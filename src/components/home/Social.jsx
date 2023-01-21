import React from 'react'
import {BsLinkedin, BsGithub, BsWhatsapp, BsInstagram} from 'react-icons/bs';

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://github.com/rochak-ms" 
      className="home__social-icon" target="_blank" rel="noreferrer"><BsLinkedin/></a> 

      <a href="https://www.facebook.com/x.bitzz" className="home__social-icon" target="_blank" rel="noreferrer"><BsGithub/></a>

      <a href="https://api.whatsapp.com/send?phone=%2B61435319711&amp;text&amp;app_absent=0" className="home__social-icon" target="_blank" rel="noreferrer"><BsWhatsapp/> </a>

      <a href="https://www.instagram.com/intoxicated_stha/" className="home__social-icon" target="_blank" rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default Social