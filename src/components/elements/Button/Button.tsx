import React from 'react'
import { StyledButton } from './ButtonStyles'

interface Props {
  children?: React.ReactNode
  disabled?: boolean
  className?: string
  onTouchStart?: (event: React.TouchEvent<HTMLButtonElement>) => void
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Button: React.FC<Props> = ({
  children,
  disabled,
  className,
  onTouchStart,
  onClick,
}: Props) => (
  <StyledButton
    onClick={onClick}
    disabled={disabled}
    className={className}
    onTouchStart={onTouchStart}
  >
    {children}
  </StyledButton>
)
