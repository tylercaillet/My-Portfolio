import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import RevinylFront from './ReVinylFront'
import RevinylBack from './RevinylBack';
import ThemeParkFront from './ThemeParkFront';
import ThemeParkBack from './ThemeParkBack';
import SnowmanFront from './SnowmanFront';
import SnowmanBack from './SnowmanBack';
import styled from 'styled-components'

const FlipCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60vw;
  p {
        font-size: 1.5vw;
        margin: .25vw;
        }
      h3 {
        font-size: 2vw;
        margin: .28vw;
      }
  @media only screen and (max-width: 750px) {
      max-width:95vw;
      
      p {
        font-size: .5rem;
        margin: 2.75px;
        }
      h3 {
        font-size: .7rem;
        margin: 3px;
      }
  }
`
export default class FlipCard extends Component {
    render() {
        return (
            <FlipCards>
                <br/>
                <p>click on image to see details</p>
                <br/>
                <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                >
                    <FrontSide>
                        <RevinylFront />
                    </FrontSide>
                    <BackSide
                        style={{
                            backgroundColor: 'rgb(239, 243, 249)',
                        }}>
                        <RevinylBack />
                    </BackSide>
                </Flippy>
                <br/>
                <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                >
                    <FrontSide>
                        <ThemeParkFront />
                    </FrontSide>
                    <BackSide
                        style={{
                            backgroundColor: 'rgb(239, 243, 249)',
                        }}>
                        <ThemeParkBack />
                    </BackSide>
                </Flippy>
                <br/>
                <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                >
                    <FrontSide>
                        <SnowmanFront />
                    </FrontSide>
                    <BackSide
                        style={{
                            backgroundColor: 'rgb(239, 243, 249)',
                        }}>
                        <SnowmanBack />
                    </BackSide>
                </Flippy>
                <br/>
                <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                >
                    {/* <FrontSide>
                    </FrontSide> */}
                    {/* <BackSide
                        style={{
                            backgroundColor: 'rgb(239, 243, 249)',
                        }}>
                    </BackSide> */}
                </Flippy>
                <br />
            </FlipCards>
        )
    }
}