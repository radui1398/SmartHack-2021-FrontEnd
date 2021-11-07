import styled from 'styled-components'
import { theme } from '../../globalStyle'

export const StyledRecButtonWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 50px;
`
export const StyledRecButtonText = styled.div`
  border-radius: 50%;
  cursor: pointer;
  background-color: ${theme.color.red.main};
  color: ${theme.color.white};
  justify-content: center;
  align-items: center;
  display: flex;
  width: 120px;
  height: 120px;
  margin-bottom: 12px;
  font: 300 32px/48px ${theme.font.primary};

  &:hover {
    opacity: 0.8;
  }
`

export const StyledRecButtonLabel = styled.label`
  font: 400 14px/18px ${theme.font.primary};
  margin-top: 8px;
  text-align: center;
  color: ${theme.color.gray.main};
`
