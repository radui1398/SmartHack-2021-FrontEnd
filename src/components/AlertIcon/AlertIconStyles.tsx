import styled from 'styled-components'
import { theme } from '../../globalStyle'

export const StyledAlertIconWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

export const StyledAlertIconText = styled.div`
  border-radius: 50%;
  cursor: pointer;
  background-color: ${theme.color.red.main};
  color: ${theme.color.white};
  justify-content: center;
  align-items: center;
  display: flex;
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
  font: 700 100px/48px ${theme.font.primary};

  &:hover {
    opacity: 0.8;
  }
`

export const StyledAlertButtonLabel = styled.label`
  font: 700 22px/27px ${theme.font.ubuntu};
  margin-top: 8px;
  text-align: center;
  color: ${theme.color.black};
`
