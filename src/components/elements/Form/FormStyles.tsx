import styled from 'styled-components'
import { StyledButton } from '../Button/ButtonStyles'

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  padding: 24px 0;

  ${StyledButton} {
    margin-top: 24px;
    width: 100%;
    border-radius: 12px;
    padding: 16px;
  }
`
