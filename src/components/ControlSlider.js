import React from 'react'
import styled from '@emotion/styled'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const ControlSlider = ({ value, onChange }) => {
  return (
    <SliderWrapper>
      <StyledSlider value={value} onChange={onChange} />
    </SliderWrapper>
  )
}

const SliderWrapper = styled.div`
  padding: 16px 16px 32px;
`

const StyledSlider = styled(Slider)`
  .rc-slider-step {
    cursor: pointer;
  }
`

export default ControlSlider
