import React from 'react'
import { RiAlarmWarningLine } from 'react-icons/ri'

import {
  StyledEmergencyCtaIcon,
  StyledEmergencyCtaLabel,
  StyledEmergencyCtaWrapper,
} from './EmergencyCtaStyles'

interface Props {
  handleClick: () => void
}

export const EmergencyCta: React.FC<Props> = ({ handleClick }: Props) => (
  <StyledEmergencyCtaWrapper>
    <StyledEmergencyCtaIcon onClick={handleClick}>
      <RiAlarmWarningLine />
    </StyledEmergencyCtaIcon>
    <StyledEmergencyCtaLabel>Emergency Call</StyledEmergencyCtaLabel>
  </StyledEmergencyCtaWrapper>
)
