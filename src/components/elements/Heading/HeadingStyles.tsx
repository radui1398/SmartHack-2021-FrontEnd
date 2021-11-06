import styled from 'styled-components'
import { theme } from '../../../globalStyle'

export const StyledHeading = styled.h5<{ size: number; width: number }>`
  padding: 0 ${(props) => (100 - props.width) / 2}%;
  text-align: center;
  color: ${theme.color.gray.main};
  font: 400 ${(props) => props.size}px / ${(props) => props.size + 4}px
    ${theme.font.tertiary};
  text-transform: uppercase;
  position: relative;

  :before {
    content: '';
    width: ${(props) => (100 - props.width) / 2 - 2}%;
    height: ${(props) => (props.size === 20 ? 2 : 0.5)}px;
    background-color: ${theme.color.gray.main};
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
  }

  :after {
    content: '';
    width: ${(props) => (100 - props.width) / 2 - 2}%;
    height: ${(props) => (props.size === 20 ? 2 : 0.5)}px;
    background-color: ${theme.color.gray.main};
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
  }

  span {
    background: ${theme.color.white};
  }
`
