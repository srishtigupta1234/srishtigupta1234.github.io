import React from 'react'
import './LeftSection.css'
import twitter from '../../assets/code.png';
import linkedin from '../../assets/social.png';
import github from '../../assets/github2.png';

const LeftSection = () => {
  return (
    <div className='leftSection'>
            <div className='low'>
                <a href="https://www.linkedin.com/in/srishti-gupta-ab6092323/"><img src={linkedin} alt="" /></a>
            </div>
            <div className="low">
                <a href="https://github.com/srishtigupta1234"><img src={github} alt="" /></a>
            </div>
            <div className="low">
                <a href="https://leetcode.com/u/srishti1234/"><img src={twitter} alt="" /></a>
            </div>
      
    </div>
  )
}

export default LeftSection