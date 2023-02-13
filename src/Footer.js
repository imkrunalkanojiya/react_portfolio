import React from 'react'

import { FaGithubSquare,FaLinkedin,FaDribbbleSquare,FaSkype } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"

const Footer = () => {
  return (
    <div id="app-footer">
        <div className="container">
            <div className="row">
                <div className="follow-sec">
                    <a href="https://github.com/imkrunalkanojiya"><FaGithubSquare /></a>
                    <a href="https://www.linkedin.com/in/krunalkanojiya/"><FaLinkedin /></a>
                    <a href="https://dribbble.com/krunalkanojiya"><FaDribbbleSquare /></a>
                    <a href="skype:imkrunalkanojiya?chat"><FaSkype /></a>
                    <a href="mailto:kanojiyakrunal5@gmail.com"><IoMdMail /></a>
                </div>      
                <div className='copyrights-sec'>
                    <p>Copyright © 2023 - Krunal Kanojiya</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer