import styled, { keyframes } from "styled-components";
import { SvgProps } from "../circleIcons.types";

const rotate = keyframes`
 0% {
     transform: rotate(0deg) translateX(0)
 }
 50% {
     transform: rotate(180deg) translateX(50px)
 }
 100%{
    transform: rotate(360deg) translateX(0)
 }
`;
export const Wrapper = styled.div`
  position: relative;
  height: 500px;
  width: 500px;
  animation: ${rotate} 64s linear infinite;
`;

export const SvgWrapper = styled.div<SvgProps>`
  position: absolute;
  top: ${({ positionY }) => `${positionY}px`};
  left: ${({ positionX }) => `${positionX}px`};
  display: inline-block;
  animation: ${rotate} 16s linear infinite;
`;
