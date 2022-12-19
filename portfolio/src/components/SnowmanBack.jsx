import React, { Component } from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const BackDiv = styled.div`
    text-align: center;
`

export default class SnowmanBack extends Component {
    render() {
        return (
            <BackDiv>
                <Card>
                    <h3>Snowman</h3>
                    <p>An app that allows authenticated users to check out vinyls, and even add their own vinyls to the collection. You can even add existing vinyls to your own wishlist </p>
                    <h3>Technologies</h3>
                    <p>Languages - HTML, CSS, Javascript</p>
                    <p>VS Code</p>
                    <p>Project Planning - Trello</p>
                    <p>Live Site @<a href="https://github.com/tylercaillet/Snowman">Snowman</a></p>
                </Card>
            </BackDiv>
        )
    }
}