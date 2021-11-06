import styled from 'styled-components'
import { theme } from '../../../globalStyle'

export const StyledInputWrapper = styled.div`
  padding: 8px 0;
  position: relative;
  width: 100%;
`

export const StyledInputLabel = styled.label`
  position: absolute;
  font: 500 14px/22px ${theme.font.primary};
  color: ${theme.color.gray['600']};
  left: 16px;
  top: 26px;
  transition: 300ms;
`

export const StyledInput = styled.input<{ isInvalid?: boolean }>`
  padding: 16px;
  border-radius: 12px;
  outline: none;
  width: 100%;
  font: 500 16px/22px ${theme.font.primary};
  border: ${({ isInvalid }) =>
    `1px solid ${isInvalid ? theme.color.red['500'] : theme.color.gray['500']}`};

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${theme.color.white} inset;
  }

  &:focus,
  &:active,
  &:not(:placeholder-shown) {
    border: 1px solid ${theme.color.black};
  }

  &:focus
    + ${StyledInputLabel},
    &:active
    + ${StyledInputLabel},
    &:not(:placeholder-shown)
    + ${StyledInputLabel} {
    padding: 0 4px;
    color: ${theme.color.black};
    top: 0;
    background: ${theme.color.white};
  }
`

export const StyledHelperMessage = styled.p`
  font: 400 12px/18px ${theme.font.secondary};
  color: ${theme.color.gray['400']};
  opacity: 0.8;
  padding: 4px;
  white-space: pre-wrap;
`

export const StyledErrorMessage = styled.p`
  color: ${theme.color.red['600']};
  font: 400 14px/16px ${theme.font.secondary};
  padding: 4px;
`
