import React from 'react'
import styled from '@emotion/styled'

const PoapPreview = ({ POAPdata }) => {

  const getBorderSize = () => {
    if (POAPdata && POAPdata.borderWidth )
      return 200 - ( POAPdata.borderWidth / 2)
    return 200
  }

  const getFontSize = () => {
    if (POAPdata && POAPdata.textSize) {
      return `${POAPdata.textSize}px`
    }
    return '18px'
  }

  return (
    <PreviewWrapper>
      <svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="200" fill={POAPdata?.backgroundColor?.hex} />
        <circle cx="200" cy="200" r={getBorderSize()} strokeWidth={POAPdata?.borderWidth} stroke={POAPdata?.borderColor?.hex} fill="none"/>
        <image xlinkHref="image-path" />
        <text
          x="50%"
          y="50%"
          fill={POAPdata?.textColor?.hex}
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize={getFontSize()}
          style={{ textAlign: 'center', shapeInside: 'circle(120px at 150px 150px)'}}
        >
          {POAPdata?.textValue}
        </text>
      </svg>
    </PreviewWrapper>
  )
}

const PreviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 1rem 0;
  
  @media (min-width: 600px) {
    padding: 2rem;
  }
`

const Preview = styled.div`
  border: 5px solid #6634ff;
  background: #53d2bd;
  border-radius: 50%;
  height: 100%;
  width: 100%;
`

export default PoapPreview



