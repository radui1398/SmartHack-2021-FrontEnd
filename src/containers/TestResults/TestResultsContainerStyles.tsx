import styled from 'styled-components'
import { theme } from '../../globalStyle'

export const StyledResultList = styled.ul`
  margin-top: 20px;
  padding: 0;
`

export const StyledResultItem = styled.li<{ passed: boolean }>`
  font: 400 14px/16px ${theme.font.primary};
  text-align: center;
  background-color: ${(props) =>
    props.passed ? theme.color.blue['200'] : theme.color.red['200']};
  padding: 20px 0;
  color: ${theme.color.dark.main};
`

export const StyledResultText = styled.p`
  font: 400 14px/16px ${theme.font.primary};
  margin-top: 20px;
  color: ${theme.color.gray.main};
  text-align: center;
`

export const StyledResultExit = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`
