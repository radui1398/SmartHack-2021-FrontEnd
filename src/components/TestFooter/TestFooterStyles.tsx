import styled from 'styled-components'
import { theme } from '../../globalStyle'

export const StyledTestFooter = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${theme.color.blue.secondary};
  margin-top: auto;
  left: 0;
  bottom: 0;
  border-radius: 10px 10px 0 0;
  text-align: center;
  font-family: ${theme.font.primary};
  font-size: 14px;
  color: white;
  padding: 18px 0 14px 0;
`
