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
                    <p>This is Hangman where you get assigned a catagory when you start the game, and you choose letter by letter to figure out what the word is. You have ten choices and if you dont get the word correct after ten tries then you lose.  </p>
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