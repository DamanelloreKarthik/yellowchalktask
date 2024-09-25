import classNames from "classnames";
import styles from "./styles.module.css";

const ButtonClassNames = (props) => {
  const {
    disabled,
    customBtnTitleStyle,
    customBtnContainerStyle,
    customBtnImageContainerStyle,
    customBtnImageStyle,
  } = props;

  const button = classNames(
    styles.btnContainerStyle,
    disabled && styles.btnDisabledStyle,
    customBtnContainerStyle
  );

  const title = classNames(styles.titleStyle, customBtnTitleStyle);
  const imageContainer = classNames(
    styles.btnImageContainerStyle,
    customBtnImageContainerStyle
  );
  const image = classNames(styles.btnImageStyle, customBtnImageStyle);

  // Return destructured values
  return { button, title, imageContainer, image };
};

export default ButtonClassNames;
