import styled from 'styled-components'
import { theme } from '../../../globalStyle'

export const SpinnerWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  &:first-child {
    animation-delay: -0.45s;
  }

  &:nth-child(2) {
    animation-delay: -0.3s;
  }

  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`

export const SpinnerRing = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid ${theme.color.white};
  border-radius: 50%;
  animation: ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${theme.color.white} transparent transparent transparent;

  @keyframes ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
