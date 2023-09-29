import styled, { DefaultTheme, keyframes, css } from "styled-components";
import { space } from "styled-system";
import { Box } from "../Box";
import { CardProps } from "./types";

const PromotedGradient = keyframes`
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
`;

interface StyledCardProps extends CardProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success --> Active
 */
const getBorderColor = ({ isActive, isSuccess, isWarning, borderBackground, theme }: StyledCardProps) => {
  if (borderBackground) {
    return borderBackground;
  }
  if (isWarning) {
    return theme.colors.warning;
  }

  if (isSuccess) {
    return theme.colors.success;
  }

  if (isActive) {
    return `linear-gradient(180deg, ${theme.colors.primaryBright}, ${theme.colors.secondary})`;
  }

  return theme.colors.cardBorder;
};

export const StyledCard = styled.div<StyledCardProps>`
  // background: linear-gradient(90deg, rgba(12,1,151,1) 0%, rgba(30,30,255,1) 50%, rgba(0,255,242,1) 100%);
  background: ${({ theme, isDisabled }) => theme.colors[isDisabled ? "input" : "backgroundAlt"]};
  animation: 2s linear 0s infinite normal none running bzhXFX;
  border-radius: 32px;
  color: ${({ theme, isDisabled }) => theme.colors[isDisabled ? "textDisabled" : "text"]};
  overflow: hidden;
  position: relative;

  ${({ isActive }) =>
    isActive &&
    css`
      animation: ${PromotedGradient} 3s ease infinite;
      background-size: 400% 400%;
    `}

  padding: 1px 1px 3px 1px;

  ${space}
`;

export const StyledCardInner = styled(Box)<{ background?: string; hasCustomBorder: boolean }>`
  width: 100%;
  height: 100%;
  overflow: ${({ hasCustomBorder }) => (hasCustomBorder ? "initial" : "inherit")};
  background: transparent;
  border-radius: 32px;
`;

StyledCard.defaultProps = {
  isActive: false,
  isSuccess: false,
  isWarning: false,
  isDisabled: false,
};
