import React, { ChangeEvent, KeyboardEvent } from 'react'

import {
  StyledErrorMessage,
  StyledHelperMessage,
  StyledInput,
  StyledInputLabel,
  StyledInputWrapper,
} from './InputStyles'

type InputEventType = ChangeEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>

interface Props {
  name: string
  type: 'text' | 'email' | 'number' | 'date'
  label?: string
  required?: boolean
  groupClassName?: string
  inputClassName?: string
  placeholder?: string
  disabled?: boolean
  value?: string | number
  errorMessage?: string
  helperMessage?: string
  onChange?: (event: InputEventType) => void
  onKeyDown?: (event: InputEventType) => void
}

export const Input: React.FC<Props> = ({
  name,
  label,
  required,
  type,
  groupClassName,
  inputClassName,
  placeholder,
  disabled,
  value,
  onChange,
  onKeyDown,
  errorMessage,
  helperMessage,
}: Props) => {
  const handleChange = (e: InputEventType) => {
    if (onChange) {
      onChange(e)
    }
  }

  const handleKeyDown = (e: InputEventType) => {
    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  return (
    <StyledInputWrapper className={`${groupClassName || ''}`}>
      <StyledInput
        id={name}
        isInvalid={!!errorMessage}
        name={name}
        required={required}
        className={`${inputClassName || ''}`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
      />
      <StyledInputLabel htmlFor={name}>{label}</StyledInputLabel>

      {helperMessage && !errorMessage && (
        <StyledHelperMessage>{helperMessage}</StyledHelperMessage>
      )}

      {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </StyledInputWrapper>
  )
}
