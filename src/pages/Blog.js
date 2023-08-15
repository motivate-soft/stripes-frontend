import React from "react";
import BlogImg from '../assets/images/main_pic_04.png';
import Carousel from 'react-bootstrap/Carousel';
const Blog = () => {
    return(
        <div id="blog">
            <div className="col-span-2 text-center font-Shaimus py-[8%] px-10">
                <p className="text-[#070041] text-2xl">DISCOVER</p> 
                <p className="text-[#B10808] text-5xl">UPCOMING EVENTS</p>
                <p className="font-Mont">Check out our veteran wall when you visit us, if you want to be part of it just say so to the manager at our location and we will be happy to take your picture and hang it on our wall.</p>
            </div>
            {/* <div className="blog" id="blog">
                <p style={{fontFamily:'ShaimusClean Regular', fontSize:'35px', margin:'0'}}>DISCOVER</p>
                <p style={{fontFamily:'ShaimusClean Regular', color:'#B10808', fontSize:'50px'}}>UPCOMING EVENTS</p>
                <p style={{fontFamily:'Montserrat Regular', fontSize:'27px', padding:'0 4%'}}>Check out our veteran wall when you visit us, if you want to be part of it just say so to the manager at our location and we will be happy to take your picture and hang it on our wall.</p>
            </div> */}
            <Carousel slide={true} className="py-10">
                <Carousel.Item className="" style={{display:'flex', justifyContent:'center', }}>
                    <img
                    className="d-block w-50 "
                    src={BlogImg}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{display:'flex', justifyContent:'center', }}>
                    <img
                    className="d-block w-50"
                    src={BlogImg}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{display:'flex', justifyContent:'center', }}>
                    <img
                    className="d-block w-50"
                    src={BlogImg}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
        
    );
}

export default Blog;