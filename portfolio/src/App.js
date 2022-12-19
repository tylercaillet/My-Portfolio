import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
// import Home from './components/'
import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'
import FlipCard from './components/FlipCard'

const AppDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-size: 1.15em;
`

const Body = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <div className="App">
      <Header />
      <AppDiv>
        <Body>
          <Routes>
            {/* <Route path="/" element={<BackVid />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<FlipCard />} />
          </Routes>
        </Body>
        <Footer />
      </AppDiv>
    </div>
  )
}

export default App
