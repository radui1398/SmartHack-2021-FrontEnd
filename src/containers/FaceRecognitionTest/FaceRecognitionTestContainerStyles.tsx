import styled from 'styled-components'

export const StyledFaceRecognitionTestSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 24px 0;

  &:last-of-type {
    padding-bottom: 0;
  }
`

export const StyledUploadedImage = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  top: 0;
  left: 0;
`
