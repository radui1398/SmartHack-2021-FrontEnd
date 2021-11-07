import styled from 'styled-components'
import { theme } from '../../globalStyle'

export const StyledSteadyGreenBar = styled.div<{ steady: boolean; degrees: number }>`
  width: 200px;
  height: 6px;
  transform: rotateZ(${(props) => props.degrees}deg);
  -webkit-transform: -webkit-rotateZ (${(props) => props.degrees}deg);
  background-color: ${(props) =>
    props.steady ? theme.color.green.main : theme.color.red.main};
`
