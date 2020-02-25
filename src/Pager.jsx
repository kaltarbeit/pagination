import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Pager = (props) => {
  const prefixCls = `${props.rootPrefixCls}-item`;
  const cls = classNames(prefixCls, `${prefixCls}-${props.page}`, {
    [`${prefixCls}-active`]: props.active,
    [props.className]: !!props.className,
    [`${prefixCls}-disabled`]: !props.page,
  });

  const handleClick = () => {
    props.onClick(props.page);
  };

  const handleKeyPress = e => {
    props.onKeyPress(e, props.onClick, props.page);
  };

  return (
    <li
      className={cls}
    >
      {props.itemRender(props.page, 'page', props.active ?
        (<a title="현재 페이지">{props.page}</a>)
          : (
            <a href="#none" onClick={handleClick}
              onKeyPress={handleKeyPress}
              title={props.showTitle ? `${props.page}페이지` : null}
            >
              {props.page}
            </a>
          )
        )
      }
    </li>
  );
};

Pager.propTypes = {
  page: PropTypes.number,
  active: PropTypes.bool,
  last: PropTypes.bool,
  locale: PropTypes.object,
  className: PropTypes.string,
  showTitle: PropTypes.bool,
  rootPrefixCls: PropTypes.string,
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  itemRender: PropTypes.func,
};

export default Pager;
