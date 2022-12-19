import React, { Component } from 'react'
import styled from 'styled-components'

const AboutDiv = styled.div`
    font-family: 'Catamaran', cursive;
    text-align: center;
    p {
        font-size: 1.7rem;
    }
`
export default class About extends Component {
    render() {
        return (
            <AboutDiv>
                <br />
                <h2>Full-Stack Developer</h2>
                <h3>Fairfax, VA</h3>
                <br />
                <p>I am a full-stack developer who is ready for any challenge .</p>
                <p>I have a passion for new and exciting things, and bring the same commitment and energy to every project which I am involved.</p>
                <p>Professionally and personally my focus is on progress;</p>
                <p>whether coding, traveling, or seeking adventure I am always moving forward.</p>
            </AboutDiv>
        )
    }
}