import React, { useState } from "react";
import classNames from "classnames";
import propTypes from "prop-types";
import styles from "./styles.module.css";

const Input = (props) => {
  const {
    label,
    type,
    name,
    placeholder,
    value,
    leftImg,
    rightImg,
    rightText,
    bottomText,
    autoComplete,
    tabIndex,
    maxLength,
    onKeyUp,
    min,
    max,
    disabled,
    errorMessage,
    onFocus = () => {},
    onBlur = () => {},
    onChange = () => {},
    onPaste = () => {},
    onClickRightImg = () => {},
    onClickRightText = () => {},
    onClickBottomText = () => {},
    customInputContainerStyle,
    customLabelStyle,
    customInputSubContainerStyle,
    customInputStyle,
    customRightImgStyle,
  } = props;

  return (
    <div
      className={classNames(
        styles.inputContainerStyle,
        customInputContainerStyle
      )}
    >
      {label && (
        <label className={classNames(styles.labelTextStyle, customLabelStyle)}>
          {label}
        </label>
      )}
      <div
        className={classNames(
          styles.inputSubContainerStyle,
          customInputSubContainerStyle
        )}
      >
        {leftImg && (
          <Image
            image={leftImg}
            altText="leftImg"
            customImageStyle={styles.imageStyles}
          />
        )}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          // autoComplete="off"
          tabIndex={tabIndex}
          maxLength={maxLength}
          onKeyUp={onKeyUp}
          onPaste={onPaste}
          min={min}
          max={max}
          className={classNames(styles.inputStyle, customInputStyle)}
          disabled={disabled || false}
        />
        {rightImg && (
          <Image
            image={rightImg}
            altText="rightImg"
            onClick={onClickRightImg}
            customImageStyles={classNames(
              styles.imageStyle,
              customRightImgStyle
            )}
          />
        )}
        {rightText && (
          <p className={styles.rightTextStyle} onClick={onClickRightText}>
            {rightText}
          </p>
        )}
      </div>
      {errorMessage && (
        <p className={styles.errorMsgTextStyle}>{errorMessage}</p>
      )}
      {bottomText && (
        <p className={styles.bottomTextStyle} onClick={onClickBottomText}>
          {bottomText}
        </p>
      )}
    </div>
  );
};

export { Input };

Input.propTypes = {
  label: propTypes.string,
  type: propTypes.string,
  name: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.any,
  rightText: propTypes.string,
  bottomText: propTypes.string,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  onChange: propTypes.func,
  disabled: propTypes.bool,
};
