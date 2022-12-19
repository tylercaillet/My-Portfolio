import React, { Component } from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const BackDiv = styled.div`
    text-align: center;
`

export default class ThemeParkBack extends Component {
    render() {
        return (
            <BackDiv>
                <Card>
                    <h3>Theme Park Concession</h3>
                    <p>An app that allows authenticated users to check out vinyls, and even add their own vinyls to the collection. You can even add existing vinyls to your own wishlist </p>
                    <h3>Technologies</h3>
                    <p>Languages - HTML5, CSS, React, Express, and Mongoose</p>
                    <p>Libraries - MongoDB</p>
                    <p>VS Code</p>
                    <p>Project Planning - ERD, CHD, Trello</p>
                    <p>Live Site @<a href="https://theme-park-concessions.herokuapp.com/">Theme Park Concession App</a></p>
                </Card>
            </BackDiv>
        )
    }
}