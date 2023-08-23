import React from 'react'
import {AiFillFacebook,AiFillGithub,AiFillTwitterSquare} from 'react-icons/ai'
import './footer.scss';
function Footer() {
  return (
    <div className='footerContainer'>
        <div className='footerElements'>
            <div className='footerElement'>
                <div className='footerElementTag'>About US</div>
                <div className='footerElementDesc footerClass footerColor'>Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis montes.</div>
                <div className='contactLinks'>
                    <div className='contactLink'><AiFillFacebook/></div>
                    <div className='contactLink'><AiFillGithub/></div>
                    <div className='contactLink'><AiFillTwitterSquare/></div>
                </div>
            </div>
            <div className='footerElement'>
                <div className='footerElementTag'>Information Link</div>
                <div className='footerElementLinks footerClass'>
                    <div className='footerElementLink footerColor'>Home</div>
                    <div className='footerElementLink footerColor'>About Us</div>
                    <div className='footerElementLink footerColor'>Course</div>
                    <div className='footerElementLink footerColor'>Contact</div>
                </div>
            </div>
            <div className='footerElement'>
                <div className='footerElementTag'>Contact Details</div>
                    <div className='footerElementContacts footerClass'>
                    <div className='footerElementContact footerColor'>info@yoursite.com</div>
                    <div className='footerElementContact footerColor'>www.yoursite.com</div>
                    <div className='footerElementContact footerColor'>PO Box 16122 Collins Street West Victoria 8007 Australia</div>
                    <div className='footerElementContact footerColor'>+61 3 8376 6284</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
