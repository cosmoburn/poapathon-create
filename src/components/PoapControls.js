import React, { useEffect, useState, useRef } from 'react'
import styled from '@emotion/styled'
import { ChromePicker } from 'react-color'

import useOnClickOutside from '../utils/useOnClickOutside'
import ControlButton from './ControlButton'
import ControlSlider from './ControlSlider'

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
  const [textValue, setTextValue] = useState('')
  const [textColor, setTextColor] = useState('#000')
  const [textSize, setTextSize] = useState(12)
  const handleTextColorChange = (color) => setTextColor(color)
  const handleTextSizeChange = (size) => setTextSize(size)

  const [showImageControl, setShowImageControl] = useState(false)

  useEffect(() => {
    updatePOAP({
      backgroundColor,
      borderColor,
      borderWidth,
      textValue,
      textColor,
      textSize
    })
  },[backgroundColor, borderColor, borderWidth, textColor, textValue, textSize])

  const bgPopupRef = useRef()
  useOnClickOutside(bgPopupRef, () => setShowBGColorControl(false))

  const borderPopupRef = useRef()
  useOnClickOutside(borderPopupRef, () => setShowBorderControl(false))

  const textPopupRef = useRef()
  useOnClickOutside(textPopupRef, () => setShowTextControl(false))

  return (
    <ControlsWrapper>

      <ControlButtons>
        {/* Background */}
        <ControlGroup>
          <ControlButton
            onClick={ () => setShowBGColorControl(true) }
            text='Background'
            color={backgroundColor}
          />
          {showBGColorControl &&
            <ControlPopup ref={bgPopupRef}>
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
            <ControlPopup ref={borderPopupRef}>
              <ControlSlider value={borderWidth} onChange={handleBorderWidthChange} />
              <ChromePicker
                color={borderColor}
                onChange={handleBorderColorChange}
                disableAlpha
              />
            </ControlPopup>
          }
        </ControlGroup>

        {/* Text */}
        <ControlGroup>
          <ControlButton
            onClick={() => setShowTextControl(!showTextControl)}
            text='Text'
            color={textColor}
          />
          {showTextControl &&
            <ControlPopup ref={textPopupRef}>
              <ControlSlider value={textSize} onChange={handleTextSizeChange} />
              <StyledTextArea
                placeholder="Your text here..."
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
              />
              <ChromePicker
                color={textColor}
                onChange={handleTextColorChange}
                disableAlpha
              />
            </ControlPopup>
          }
        </ControlGroup>

        {/* Image */}
        <ControlGroup>
          <ControlButton text='Add Image'/>
        </ControlGroup>

      </ControlButtons>

      <DownloadWrapper>
        <ControlButton
          text='Download'
        />
      </DownloadWrapper>


    </ControlsWrapper>
  )
}

const ControlsWrapper = styled.div`
  padding: .5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (min-width: 600px) {
    padding: 5rem 2rem;
  }
`

const ControlButtons = styled.div`
  display: grid;
  grid-gap: 1rem;
`

const ControlGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ControlPopup = styled.div`
  position: absolute;
  z-index: 10;
  border: 1px solid #eee;
  background: white;
  top: 20%;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 30%) 0 4px 8px;
  width: 280px;
  padding: 1rem;
  
  .chrome-picker {
    width: 100% !important;
    box-shadow: none !important;
  }
  
`
const StyledTextArea = styled.textarea`
  margin-bottom: 1rem;
  max-width: 280px;
  min-width: 280px;
`

const DownloadWrapper = styled.div`
  padding: 2rem;
`

export default PoapControls
