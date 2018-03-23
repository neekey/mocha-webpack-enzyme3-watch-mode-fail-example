import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import style from './comp.Card.scss';

export default function Card(
  { title, className, cardHoverStyle, titleClassName, extra, children, bodyClassName, onClick }) {
  const needTitle = title || extra;
  return (<div
    data-ref="container"
    onClick={onClick}
    className={classnames(style.container, className, {
      [style.cardHoverBlue]: cardHoverStyle === 'blue',
      [style.cardHoverCoral]: cardHoverStyle === 'coral',
      [style.cardHoverGreen]: cardHoverStyle === 'green',
    })}>
    {needTitle ? (
      <div
        data-ref="title"
        className={classnames(style.title, titleClassName)}>
        <span data-ref="titleText" className={style.titleText}>{title || null}</span>
        <span data-ref="titleExtra" className={style.titleExtra}>{extra || null}</span>
      </div>
    ) : null}
    <div className={classnames(style.body, bodyClassName)} data-ref="body">{children}</div>
  </div>);
}

Card.propTypes = {
  onClick: PropTypes.func,
  cardHoverStyle: PropTypes.oneOf(['blue', 'coral', 'green']),
  className: PropTypes.string,
  title: PropTypes.any,
  titleClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  extra: PropTypes.any,
  children: PropTypes.any,
};
