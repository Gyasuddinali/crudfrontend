
import React from 'react'
import image1 from '../Handling/1725359550794.png'; 
import '../router/Routercss.css'
import { FaFacebook, FaInstagram, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  return (
    <div id='h'>
        <h1>Hello Contact us
</h1>

<div className='container-fluid'>
<img className='rounded-circle' src={image1} alt="logo" /><br></br>
<p><FaWhatsapp></FaWhatsapp><FaPhone></FaPhone>9199245536</p>
<h5>Address</h5><pre>Siwan,Bihar</pre>
<a href="https://www.facebook.com/gyasusrkian91992"><FaFacebook/></a>
<a href='https://www.instagram.com/iam_gyasu/'><FaInstagram/></a>

<a href='https://x.com/iamgyasu'><FaTwitter/></a>
</div>
    </div>
  )
}
