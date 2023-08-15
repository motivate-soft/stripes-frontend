import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import contactImg from '../assets/images/main_pic_flag.png';

const Contact = () => {
    return(
        <div className="flex flex-col md:flex-row  justify-center md:justify-around bg-cover text-[#FCFCFF]" id="contact" style={{ backgroundImage: `url(${contactImg})`, height:'60vh'}} >
            <div className="flex items-center font-Mont p-5">
                <p>Enjoy our breakfast and lunch burritos, our famous buttermilk<br />
                chicken sandwitches, chicken finger, and street tacos.</p>
            </div>
            <div className="flex text-4xl md:mt-32 p-10 font-Shaimus items-center">
                 <FontAwesomeIcon className="sm:pr-8 mb-3 " icon={faEnvelope} />
                <p className="text-2xl sm:text-3xl">STRIPESBISCUITCO@GMAIL.COM</p>
            </div>
        </div>
    );
}

export default Contact;