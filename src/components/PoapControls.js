import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { ChromePicker } from 'react-color'

import ControlButton from './ControlButton'

const PoapControls = ({ updatePOAP }) => {

  const [showBGColorControl, setShowBGColorControl] = useState(false)
  const [backgroundColor, setBackgroundColor] = useState('#53d2bd')
  const handleBGColorChange = (color) => setBackgroundColor(color)

  const [showBorderControl, setShowBorderControl] = useState(false)
  const [borderColor, setBorderColor] = useState('#6634ff')
  const [borderWidth, setBorderWidth] = useState(10)
  const handleBorderColorChange = (color) => setBorderColor(color)
  const handleBorderWidthChange = (width) => setBorderWidth(width)

  const [showTextControl, setShowTextControl] = useState(false)

  const [showImageControl, setShowImageControl] = useState(false)

  useEffect(() => {
    updatePOAP({
      backgroundColor,
      borderColor,
      borderWidth
    })
  },[backgroundColor, borderColor, borderWidth])

  return (
    <ControlsWrapper>

      {/* Background */}
      <ControlGroup>
        <ControlButton
          onClick={ () => setShowBGColorControl(!showBGColorControl) }
          text='Background'
          color={backgroundColor}
        />
        {showBGColorControl &&
          <ControlPopup>
            <ChromePicker
              color={backgroundColor}
              onChange={handleBGColorChange}
              disableAlpha
            />
          </ControlPopup>
        }
      </ControlGroup>

      {/* Border */}
      <ControlGroup>
        <ControlButton
          onClick={ () => setShowBorderControl(!showBorderControl) }
          text='Border'
          color={borderColor}
        />
        {showBorderControl &&
          <ControlPopup>
            <StyledInput
              value={borderWidth}
              type='number'
              onChange={(e) => handleBorderWidthChange(e.target.value)}
              min={0}
              placeholder='Border width...'
            />
            <ChromePicker
              color={borderColor}
              onChange={handleBorderColorChange}
              disableAlpha
            />
          </ControlPopup>
        }
      </ControlGroup>

      <ControlGroup>
        <ControlButton text='Text'/>
      </ControlGroup>

      <ControlGroup>
        <ControlButton text='Add Image'/>
      </ControlGroup>

    </ControlsWrapper>
  )
}

const ControlsWrapper = styled.div`
  background: aquamarine;
  padding: .5rem;
  display: grid;
  align-items: center;

  @media (min-width: 600px) {
    padding: 5rem 2rem;
  }
`

const ControlGroup = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`

const ControlPopup = styled.div`
  position: absolute;
  z-index: 10;
  border: 1px solid #eee;
  background: white;
  top: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 30%) 0 4px 8px;
`

const StyledInput = styled.input`
  margin: 1rem;
`

export default PoapControls
