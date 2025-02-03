import styled, { css } from "styled-components";
import { IButtonStyleProps } from "./ITextButton.props";

/**
 * ----------------------------------------------------------------------------
 * Standard button Styles
 * ----------------------------------------------------------------------------
 */

const ButtonFull = css`
  width: 100%;
`;

const ButtonStretched = css`
  padding-left: 40px;
  padding-right: 40px;
`;

const ButtonSmall = css`
  font-size: 11px;
  padding: 10px 20px;
  font-family: "Open Sans Bold", serif;
`;

export const ButtonSeparatorDot = css`
  display: inline-block;
  margin: 0 18px;
  content: "";
  height: 3px;
  width: 3px;
  border-radius: 100%;
  background: currentColor;
`;

const Button = styled.button<IButtonStyleProps>`
  position: relative;
  display: inline-block;
  padding: 12px 28px;
  line-height: normal;
  border: 1px solid transparent;
  font-family: "Open Sans Semibold", serif;
  border-radius: 0;
  font-size: 12px;
  text-align: center;
  letter-spacing: 0.2em;
  font-style: normal;
  background-color: transparent;
  transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  z-index: 1;

  &::before {
    position: absolute;
    content: "";
    display: block;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    transform: scale(1, 1);
    transform-origin: left center;
    z-index: -1;
  }

  &[disabled] {
    cursor: not-allowed;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (-moz-touch-enabled: 0), (hover: hover) {
    &:not([disabled])::before {
      transition: transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    &:not([disabled]):hover::before {
      transform-origin: right center;
      transform: scale(0, 1);
    }
  }

  ${({ isSmall }) => isSmall && ButtonSmall};
  ${({ isFull }) => isFull && ButtonFull};
  ${({ isStretched }) => isStretched && ButtonStretched};
  ${({ isSeparatorDot }) => isSeparatorDot && ButtonSeparatorDot};
  ${({ isExpand }) => isExpand && `flex: 1 1 auto;`};
`;

const OverlayButton = styled(Button)`
  background: #ffffff;
  box-shadow: 0px 1.94698px 12.1687px rgba(0, 0, 0, 0.1);
  font-size: 12.0078px;
  line-height: 167%;
  color: #000000;
  padding: 10px 28px 10px 31px;
  display: block;
  width: fit-content;
  font-family: "Open Sans Bold", serif;
`;

const PrimaryButton = styled(Button)`
  color: white;
  border-color: #000000;

  &::before {
    background-color: #000000;
  }

  @media (-moz-touch-enabled: 0), (hover: hover) {
    &:not([disabled]):hover {
      color: #000000;
      background-color: transparent;
    }
  }
`;

const SecondaryButton = styled(Button)`
  color: #939393;
  border: 1px solid rgba(147, 147, 147, 0.2);

  &::before {
    background-color: #000000;
    transform-origin: right center;
    transform: scale(0, 1);
  }

  @media (-moz-touch-enabled: 0), (hover: hover) {
    &:not([disabled]):hover {
      color: white;
      border-color: #000000;
    }
    &:not([disabled]):hover::before {
      transform-origin: left center;
      transform: scale(1, 1);
    }
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  padding: inherit;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

const ButtonGroup = styled.div<{ isleftAlign?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: -12px;
  ${({ isleftAlign }) =>
    isleftAlign && ` margin-top: 20px; justify-content: flex-start;`};

  button {
    display: block;
    margin: 12px;
  }

  @media screen and (max-width: 300px) {
    button {
      width: 100%;
      & + button {
        margin-top: 0;
      }
    }
  }
`;

export {
  PrimaryButton,
  SecondaryButton,
  Button,
  LoadingSpinner,
  ButtonGroup,
  OverlayButton,
};
