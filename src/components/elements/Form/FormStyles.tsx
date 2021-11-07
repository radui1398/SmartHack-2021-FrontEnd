import styled from 'styled-components'
import { StyledButton } from '../Button/ButtonStyles'
import { theme } from '../../../globalStyle'
import { StyledImageUploadWrapper } from '../../ImageUpload/ImageUploadStyles'

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  padding: 24px 0;

  & > .MuiFormGroup-root {
    width: 100%;
  }

  ${StyledButton} {
    margin-top: 24px;
    width: 100%;
    border-radius: 12px;
    padding: 16px;
  }

  ${StyledImageUploadWrapper} {
    align-items: flex-start;
    justify-content: flex-start;
  }
`

export const StyledImageUploadIcon = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column;
  cursor: pointer;
  align-items: flex-start;
  justify-content: flex-start;
  color: ${theme.color.gray['500']};

  & > span:first-child {
    font: 400 14px/22px ${theme.font.primary};
    margin-bottom: 8px;
  }

  & > span:last-child {
    font-size: 28px;
  }
`
