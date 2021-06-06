// import React from 'react';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
// import img1 from "../Assests/img.jpg";

// const slideImages = [
//     'data:image/png;base64,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',
//     'https://images.unsplash.com/photo-1591799265444-d66432b91588?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFyZHdhcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//     'images/slide_4.jpg',
//     '..Assests/img.jpg'
// ];

// const Body = () => {
//     return (
//         <div className="slide-container">
//             <Slide>
//                 <div className="each-slide">
//                     {/* <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}> */}
//                     <div style={{ 'backgroundImage': `url(${slideImages[0]})`,width:"100vw",height:"100vh" }}>

//                         <span>Slide 1</span>
//                     </div>
//                 </div>
//                 <div className="each-slide">
//                     <div style={{ 'backgroundImage': `url(${slideImages[1]})`,width:"100vw",height:"100vh" }}>
//                         <span>Slide 2</span>
//                     </div>
//                 </div>
//                 <div className="each-slide">
//                     <div style={{ 'backgroundImage': `url(${slideImages[2]})`,width:"100vw",height:"100vh" }}>
//                         <span>Slide 3</span>
//                     </div>
//                 </div>
//             </Slide>
//         </div>
//     )
// }
// export default Body;

import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "../Assests/img.jpg";
import img2 from "../Assests/img1.jpg";
import img3 from "../Assests/img3.jpg";
import "../Home/Style/Body.css";

const Body = () => {
    return (
        <div style={{marginTop:"70px"}}>
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={img1} className="sliderimg" />
                <img src={img2} className="sliderimg" />
                <img src={img3} className="sliderimg" />
            </AliceCarousel>
        </div>
    )
}
export default Body;