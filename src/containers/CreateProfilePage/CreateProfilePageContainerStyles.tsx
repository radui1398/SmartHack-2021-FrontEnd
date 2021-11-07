import styled from 'styled-components'
import { theme } from '../../globalStyle'

export const StyledCreateProfileTitle = styled.div`
  color: ${theme.color.gray['700']};
`

export const StyledCreateProfileHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font: 700 28px/32px ${theme.font.primary};
`

export const StyledCreateProfileBackCta = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${theme.color.black};
  margin-right: 16px;
`
