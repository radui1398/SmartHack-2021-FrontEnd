import styled from 'styled-components'
import { Button } from '../../components/elements/Button/Button'

export const StyledViewTestsPageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 24px 0;

  &:last-of-type {
    padding-bottom: 0;
  }
`

export const StyledViewTestsLink: any = styled(Button)`
  width: 100%;
  padding: 16px 0;
  margin-bottom: 10px;
  margin-top: 10px;
`
