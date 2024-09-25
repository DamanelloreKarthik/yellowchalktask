// import React, { useEffect, useState } from "react";
// import classNames from "classnames";
// import propTypes from "prop-types";
// import styles from "./styles.module.css";

// const Button = (props) => {
//   const {
//     // values
//     title,
//     image,
//     altText,
//     onClick = () => {},
//     loader,
//     disabled,

//     // styles
//     customBtnTitleStyle,
//     customBtnContainerStyle,
//     customBtnImageContainerStyle,
//     customBtnImageStyle,
//   } = props;

//   // button classNames
//   const buttonClassNames = classNames(
//     styles.btnContainerStyle,
//     disabled && styles.btnDisabledStyle,
//     customBtnContainerStyle
//   );

//   // titleClassNames
//   const titleClassNames = classNames(styles.titleStyle, customBtnTitleStyle);

//   // image container classNames
//   const imageContainerClassNames = classNames(
//     styles.btnImageContainerStyle,
//     customBtnImageContainerStyle
//   );

//   // image classNames
//   const imageClassNames = classNames(styles.btnImageStyle, customBtnImageStyle);

//   return (
//     <>
//       <button
//         className={buttonClassNames}
//         onClick={onClick}
//         disabled={disabled}
//       >
//         {loader ? (
//           <div className={styles.loaderStyle} data-testid="loader"></div>
//         ) : (
//           title && <p className={titleClassNames}>{title}</p>
//         )}

//         {image && !loader && (
//           <div className={imageContainerClassNames}>
//             <img src={image} alt={altText} className={imageClassNames} />
//           </div>
//         )}
//       </button>
//     </>
//   );
// };

// Button.propTypes = {
//   // values
//   title: propTypes.string,
//   image: propTypes.string,
//   altText: propTypes.string,
//   onClick: propTypes.func,
//   loader: propTypes.bool,
//   disabled: propTypes.bool,

//   // styles
//   customBtnTitleStyle: propTypes.string,
//   customBtnContainerStyle: propTypes.string,
//   customBtnImageContainerStyle: propTypes.string,
//   customBtnImageStyle: propTypes.string,
// };

// export { Button };

import React from "react";
import propTypes from "prop-types";
import styles from "./styles.module.css";
import ButtonClassNames from "./classNames";

const Button = (props) => {
  const {
    title,
    image,
    altText,
    onClick = () => {},
    loader,
    disabled,
    customBtnTitleStyle,
    customBtnContainerStyle,
    customBtnImageContainerStyle,
    customBtnImageStyle,
  } = props;

  const classNames = ButtonClassNames({
    disabled,
    customBtnContainerStyle,
    customBtnTitleStyle,
    customBtnImageContainerStyle,
    customBtnImageStyle,
  });

  return (
    <button className={classNames.button} onClick={onClick} disabled={disabled}>
      {loader ? (
        <div className={styles.loaderStyle}></div>
      ) : (
        title && <p className={classNames.title}>{title}</p>
      )}

      {image && !loader && (
        <div className={classNames.imageContainer}>
          <img src={image} alt={altText} className={classNames.image} />
        </div>
      )}
    </button>
  );
};

Button.propTypes = {
  title: propTypes.string,
  image: propTypes.string,
  altText: propTypes.string,
  onClick: propTypes.func,
  loader: propTypes.bool,
  disabled: propTypes.bool,
  customBtnTitleStyle: propTypes.string,
  customBtnContainerStyle: propTypes.string,
  customBtnImageContainerStyle: propTypes.string,
  customBtnImageStyle: propTypes.string,
};

export { Button };
