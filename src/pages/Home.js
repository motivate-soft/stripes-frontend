import SidebarBackImg from "../assets/images/SideBarBackground.png";
import logoImg from "../assets/images/logo.png";
import homeMainImg from "../assets/images/homeMain.png";
import humanImg from "../assets/images/human.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [nav, setNav] = useState(false);

    const showNav = () => {
        setNav(!nav);
    };

    return (
        <div className="grid grid-cols-11" id="home">
            {nav ? (
                <FontAwesomeIcon icon={faBars} size="2x"
                    className="text-3xl z-50 md:hidden text-white p-3"
                    onClick={showNav} />
            ) : (
                <FontAwesomeIcon icon={faBars} size="2x"
                    className="text-3xl md:hidden text-black p-3"
                    onClick={showNav} />
            )}
            {/* mobile nav */}
            <nav className={`fixed top-[0px] flex flex-col font-Mont text-2xl justify-around items-center w-full md:hidden bg-main-blue z-40 duration-1000 ${nav ? "right-[0px]" : "right-[100%]"
                } `}>
                <a href="#home" className="py-2" onClick={showNav}>Home</a>
                <a href="#menu" className="py-2" onClick={showNav}>Our Menu</a>
                <a href="#location" className="py-2" onClick={showNav}>Locations</a>
                <a href="#blog" className="py-2" onClick={showNav}>Blog</a>
                <a href="#contact" className="py-2" onClick={showNav}>Contact</a>
            </nav>
            <div className="hidden md:col-span-2 md:flex flex-col justify-around bg-cover"
                style={{ backgroundImage: `url(${SidebarBackImg})`
                }}        
            >
                <div className="px-2">
                    <img src={logoImg} alt="logo" />
                </div>
                <div className="w-7/12 border-b-2 border-white mt-10 ml-12" />
                <div className="flex flex-col-reverse items-center md:flex-row md:justify-center md:items-center">
                    <div className="hidden md:flex flex-col text-white gap-4 text-xl ">
                        <a href="#home" >Home</a>
                        <a href="#menu" >Our Menu</a>
                        <a href="#location" >Locations</a>
                        <a href="#blog" >Blog</a>
                        <a href="#contact" >Contact</a>
                    </div>
                </div>
                <div className="flex justify-evenly">
                    <div className="flex flex-col items-center text-white gap-4">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </div>
                    <div className="hidden md:flex"/>
                </div>
            </div>
            <div className="col-span-11  md:col-span-4 flex flex-col justify-around items-center">
                <div className="md:hidden sm:flex justify-center px-4">
                    <img src={logoImg} alt="logo" />
                </div>
                <input className="w-2/3 rounded-2xl  bg-[#000063] text-white text-lg px-2 m-10" placeholder="Search"></input>
                <div className="text-[#0024A0] font-Montserrat-Regular px-3 ">
                    <div className="text-3xl lg:text-4xl font-bold mb-2">WHERE YOUR</div>
                    <div className="text-[42px] md:text-5xl lg:text-7xl font-[900] mb-2">FAVORITE</div>
                    <div className="text-3xl lg:text-3xl font-bold ">HAND HELD BURRITOS ARE</div>
                </div>
                <div className="mt-[10px] md:mt-[300px] ml-4">
                    <button className="px-8 mb-4 bg-[#BF0D3D] text-2xl text-white italic rounded-3xl">
                        More Info
                    </button>
                    <div className="text-[#BF0D3D] text-3xl font-Montserrat-Regular font-bold">
                        REMEMBER THAT 10%
                    </div>
                    <div className="text-[#0024A0] font-bold text-2xl">
                    OF OUR PROCEDS ARE <br />DONATED TO THE VA HOSPITAL
                    </div>
                </div>
                   <div className="w-8/12 border-b-2 border-[#BF0D3D] mt-2 " />
            </div>
            <div className="col-span-11 md:col-span-5 bg-cover"
                style={{ backgroundImage: `url(${homeMainImg})`, height:'100vh'}}
            />
            <div className="hidden md:block absolute bottom-[37%] sm:bottom-0 md:left-[45%] left-[45%] bg-cover w-1/3 sm:w-1/3 md:1/4 lg:w-1/5">
                <img src={humanImg} alt="human"
            />
            </div>  
        </div>  
    );
}

export default Home;
