import React, { Component } from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const BackDiv = styled.div`
    text-align: center;
`

export default class RevinylBack extends Component {
    render() {
        return (
            <BackDiv>
                <Card>
                    <h3>Revinyl</h3>
                    <p>An app that allows authenticated users to check out vinyls, and even add their own vinyls to the collection. You can even add existing vinyls to your own wishlist </p>
                    <h3>Technologies</h3>
                    <p>Languages - HTML, CSS, Javascript, Postgresql, Express, React, and Node</p>
                    <p>Libraries - Animate.css, jQuery</p>
                    {/* <p>Audacity</p> */}
                    <p>VS Code</p>
                    <p>Project Planning - ERD, CHD, Trello</p>
                    <p>Live Site @<a href="https://git.heroku.com/revinyl-frontend.git">Revinyl App</a></p>
                </Card>
            </BackDiv>
        )
    }
}