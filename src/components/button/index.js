import React, { useEffect, useState } from "react";
import classNames from "classnames";
import propTypes from "prop-types";
import styles from "./styles.module.css";

const Button = (props) => {
  const {
    // values
    title,
    image,
    altText,
    onClick = () => {},
    loader,
    disabled,
    sampleData,

    // styles
    customBtnTitleStyle,
    customBtnContainerStyle,
    customBtnImageContainerStyle,
    customBtnImageStyle,
  } = props;

  // console.log(props);

  // button classNames
  const buttonClassNames = classNames(
    styles.btnContainerStyle,
    disabled && styles.btnDisabledStyle,
    customBtnContainerStyle
  );

  // titleClassNames
  const titleClassNames = classNames(styles.titleStyle, customBtnTitleStyle);

  // image container classNames
  const imageContainerClassNames = classNames(
    styles.btnImageContainerStyle,
    customBtnImageContainerStyle
  );

  // image classNames
  const imageClassNames = classNames(styles.btnImageStyle, customBtnImageStyle);

  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    //   setShowElement(true);
    // }, 500);

    setTimeout(() => {
      setShowElement(true);
    }, 1001);
  }, []);

  return (
    <>
      {/* <h1>hellOne</h1> */}
      {/* <h2>hellTwo</h2> */}

      {/* <label>Name</label> */}
      {/* <label>Name</label> */}
      {/* <input placeholder="fullNameS" name="fullName" /> */}
      {/* <p>test and description</p> */}
      {/* <input
        placeholder="description"
        name="description"
        value={"description"}
        onChange={() => {}}
      /> */}

      {/* <img src="ffff" alt="sampleImage" className="sampleImg" /> */}
      {/* <span title="subTitle">subTitle</span> */}

      {/* <div data-testid="customElement">CustomElement</div> */}

      {/* {
        <>
          <ul>
            {sampleData?.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </>
      } */}

      {/* <div>Some Content</div> */}

      {/* {showElement ? (
        <button>initialElementChanged</button>
      ) : (
        <button onClick={() => setShowElement(true)}>initialElement</button>
      )} */}

      <button
        className={buttonClassNames}
        onClick={onClick}
        disabled={disabled}
      >
        {loader ? (
          <div className={styles.loaderStyle} data-testid="loader"></div>
        ) : (
          title && <p className={titleClassNames}>{title}</p>
        )}

        {image && !loader && (
          <div className={imageContainerClassNames}>
            <img src={image} alt={altText} className={imageClassNames} />
          </div>
        )}
      </button>
    </>
  );
};

Button.propTypes = {
  // values
  title: propTypes.string,
  image: propTypes.string,
  altText: propTypes.string,
  onClick: propTypes.func,
  loader: propTypes.bool,
  disabled: propTypes.bool,

  // styles
  customBtnTitleStyle: propTypes.string,
  customBtnContainerStyle: propTypes.string,
  customBtnImageContainerStyle: propTypes.string,
  customBtnImageStyle: propTypes.string,
};

export { Button };
