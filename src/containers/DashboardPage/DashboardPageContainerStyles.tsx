import styled from 'styled-components'
import { Button } from '../../components/elements/Button/Button'
import { theme } from '../../globalStyle'

export const StyledDashboardPageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 24px 0;

  &:last-of-type {
    padding-bottom: 0;
  }
`

export const StyledDashboardLink: any = styled(Button)`
  width: 100%;
  padding: 16px 0;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const StyledDashboardSecondsHeading = styled.div`
  width: 100%;
  margin-top: 20px;
`

export const StyledDashboardPicture = styled.div<{ src: string }>`
  width: 50px;
  height: 50px;
  background-color: red;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 2-px solid ${theme.color.dark.main};
`
