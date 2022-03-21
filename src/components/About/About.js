import React from 'react'
import './About.css'
import img1 from '../../Image/image1.png'
import img2 from '../../Image/image2.png'
import img3 from '../../Image/image3.png'
import img4 from '../../Image/image4.png'


function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About</h1>
        <div className="about-wrapper">
        <div className="left">
          <div className="image-left">
           <img src={img1} alt="" /> 
           <img src={img2} alt="" /> 
          </div>
          <div className="image-right">
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
        <div className="right">
        <h2>We Are Full Services AIzZ Shop</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas pellentesque diam viverra dictum facilisis euismod purus. Vitae ullamcorper nulla nunc, vitae. Nulla aliquet faucibus tincidunt senectus eget massa praesent feugiat. Eu, facilisis egestas blandit nam amet. Condimentum neque cursus mauris dui gravida dictum nunc eu. Duis in mi sed lacus dignissim sodales et. Ut in suscipit magna dictum. Vulputate nibh nunc nulla sed placerat a amet non. Proin ac pretium consequat turpis. Fringilla aliquam libero sollicitudin odio. Cras egestas a quis magna.
          Ut volutpat ut dignissim neque. Id amet neque tincidunt consectetur vulputate neque tristique vulputate. Purusb <br />
          <span>How manegge we are the champion or the mush</span><br />commodo condimentum commodo ultricies ut in dolor cursus massa. Arcu odio laoreet id facilisi tincidunt leo. Tincidunt libero vel sed duis id a sagittis commodo, enim. Cursus vitae nisl, ac sit lorem tincidunt cursus potenti. Sed eget tincidunt lorem amet egestas faucibus cras. Tempor urna ut dictum sit turpis sodales ut consequat.
        </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About