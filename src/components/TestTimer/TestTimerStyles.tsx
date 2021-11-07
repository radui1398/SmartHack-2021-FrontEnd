import styled from 'styled-components'
import { theme } from '../../globalStyle'

export const StyledTestTimer = styled.a`
  margin-top: 50px;
  margin-bottom: 50px;
  width: 150px;
  height: 150px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font: 400 22px/26px ${theme.font.primary};
  background-color: ${theme.color.blue.main};
  color: white;
`
