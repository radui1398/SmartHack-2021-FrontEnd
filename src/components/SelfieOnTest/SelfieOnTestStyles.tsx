import styled from 'styled-components'
import { theme } from '../../globalStyle'

export const StyledSelfieOnTest = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    color: ${theme.color.gray.main};
    margin-top: 20px;
    font-family: ${theme.font.primary};
    font-size: 14px;
  }

  .camera-wrap {
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 26px;
    border-radius: 50%;
    background-color: ${theme.color.blue.main};
  }
`
