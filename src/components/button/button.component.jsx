import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.styles"

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  const buttons = {};
  buttons[BUTTON_TYPE_CLASSES.base] = BaseButton
  buttons[BUTTON_TYPE_CLASSES.google] = GoogleSignInButton
  buttons[BUTTON_TYPE_CLASSES.inverted] = InvertedButton
  return buttons[buttonType];
}

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton
      {...otherProps}
    >
      {children}
    </CustomButton>
  )
}

export default Button
