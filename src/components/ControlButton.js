import React from 'react'
import styled from '@emotion/styled'

const ControlButton = ({ color, onClick, text }) => {

  if (text && text === 'Download') {
    return (
      <DownloadButton onClick={onClick}>
        {text}
      </DownloadButton>
    )

  }

  return (
    <StyledButton onClick={onClick}>
      <Icon color={color?.hex}/>
      {text}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background: white;
  padding: 8px 16px;
  min-width: 240px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`

const Icon = styled.div`
  width: 32px;
  height: 32px;
  background: ${p => p.color ? p.color : '#f9879a'};
  position: relative;
  border-radius: 50%;
  margin-right: 16px;
  
  ::before {
    content: '';
    position: absolute;
    display: block;
    width: 16px;
    height: 3px;
    background: white;
    left: 50%;
    top: 50%;
    border-radius: 8px;
    transform: translate(-50%, -50%);
  }
  
  ::after {
    content: '';
    position: absolute;
    display: block;
    width: 3px;
    height: 16px;
    background: white;
    left: 50%;
    top: 50%;
    border-radius: 8px;
    transform: translate(-50%, -50%);
  }
`

const DownloadButton =  styled.button`
  background: #6634ff;
  color: white;
  padding: 8px 16px;
  min-width: 240px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ControlButton
