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

  const handleClick = (e) => {
    e.preventDefault();
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
            <a href={`?page=${props.page}`} onClick={handleClick}
              onKeyPress={handleKeyPress}
              title={props.title ? props.title : `${props.page}페이지`}
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
  title: PropTypes.string,
  showTitle: PropTypes.bool,
  rootPrefixCls: PropTypes.string,
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  itemRender: PropTypes.func,
};

export default Pager;
