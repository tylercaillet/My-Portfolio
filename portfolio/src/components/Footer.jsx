import React, { Component } from 'react'
import styled from 'styled-components'
import inIcon from '../images/Linkedin.png'
import gitIcon from '../images/github.png'
import mailIcon from '../images/email.png'

const FooterDiv = styled.div`
  padding-top: 3rem;
  padding-bottom: 0;
  background-color: white;
  box-shadow:0px -3px 6px 4px #d3d3d3;
  text-align: center;
  max-height: 10rem;
  position: relative;
  bottom: 0;
  width: 100%;
  a img {
  transition: all .4s;
  height: 32px;
  width: 32px;
}
a img:hover {
  transform: scale(1.3);
}
`;

const IconList = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  max-width: 50%;
  margin: 0 auto;
`

export default class Footer extends Component {
    render() {
        return (
            <FooterDiv>
                <IconList>
                    <a className="icon" href="https://github.com/tylercaillet"><img src={gitIcon} alt="GitHub" /></a>
                    <a className="icon" href="https://www.linkedin.com/in/tyler-caillet/"><img src={inIcon} alt="LinkedIn" /></a>
                    <a className="icon" href="mailto:jj.atl@icloud.com"><img src={mailIcon}
                        alt="tylercaillet2121@gmail.com" /></a>
                </IconList>
                <br />
                <div className="row" id="copyright" style={{ margin: 0 }}>
                    <div className="col-lg-12">
                        <p className="small">©2022 Tyler Caillet</p>
                    </div>
                </div>
            </FooterDiv>
        )
    }
}