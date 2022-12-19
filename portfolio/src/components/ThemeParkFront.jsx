import React, { Component } from 'react'
import themepark from "../images/ThemePark.png"
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const FrontDiv = styled.div`
  img {
      max-width: 100%;
  }
`

export default class ThemeParkFront extends Component {
    render() {
        return (
            <FrontDiv>
                <Card>
                    <picture>
                        <source srcSet={themepark} type="image/png" />
                        <img src={themepark} alt="Theme-Park-Concession" />
                    </picture>
                </Card>
            </FrontDiv>
        )
    }
}