import React, { Component } from 'react'
import snowman from "../images/Snowman.png"
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const FrontDiv = styled.div`
  img {
      max-width: 100%;
  }
`

export default class SnowmanFront extends Component {
    render() {
        return (
            <FrontDiv>
                <Card>
                    <picture>
                        <source srcSet={snowman} type="image/png" />
                        <img src={snowman} alt="Snowman" />
                    </picture>
                </Card>
            </FrontDiv>
        )
    }
}