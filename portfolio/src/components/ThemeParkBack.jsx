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
                    <p>This app allows you to choose from a list of many different food items. You can add them to your cart and when you have selected all the food items you want, you then can go to your cart and see all the different items you chose and see what the prices are of each item. </p>
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