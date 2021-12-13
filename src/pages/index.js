import * as React from 'react'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import PoapPreview from '../components/PoapPreview'
import PoapControls from '../components/PoapControls'
import { useState } from 'react'

const Home = () => {

  const [POAPdata, setPOAPdata] = useState(null)


  const updatePOAP = (data) => {
    console.log(data)
    setPOAPdata(data)
  }

  return (
    <Layout>
     <MainWrapper>
       <PoapPreview POAPdata={POAPdata} />
       <PoapControls updatePOAP={updatePOAP}/>
     </MainWrapper>
    </Layout>
  )
}

const MainWrapper = styled.main`
  height: 100%;
  display: grid;
  justify-content: center;
  
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default Home
