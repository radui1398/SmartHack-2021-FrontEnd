import styled from 'styled-components'
import { theme } from '../../globalStyle'

export const StyledLandingPageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 0;

  &:last-of-type {
    padding-bottom: 0;
  }
`

export const StyledPlatformDescriptionWrapper = styled.div`
  padding: 24px 32px;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  font: 400 14px/16px ${theme.font.primary};
  color: ${theme.color.gray.main};

  & > div {
    padding: 8px 0;
  }
`
