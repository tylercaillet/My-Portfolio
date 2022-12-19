import React, { Component } from 'react'
import revinyl from "../images/revinylflip.png"
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const FrontDiv = styled.div`
  img {
      max-width: 100%;
  }
`

export default class RevinylFront extends Component {
    render() {
        return (
            <FrontDiv>
                <Card>
                    <picture>
                        <source srcSet={revinyl} type="image/png" />
                        <img src={revinyl} alt="ReVinyl" />
                    </picture>
                </Card>
            </FrontDiv>
        )
    }
}