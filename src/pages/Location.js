import LocationImg from "../assets/images/main_pic_03.png"

const Location = () => {
    return(
        <div className="grid grid-cols-5 place-items-center p-10 gap-10" id="location">
            <div className="col-span-5 md:col-span-3 ">
                <img src={LocationImg} alt="LocationsImg" />
            </div>
            <div className="col-span-5 md:col-span-2 font-Shaimus gap-1">
                <p className="text-[#D82A2A] text-4xl py-2">
                    VISIT OUR LOCATIONS
                </p>
                <p className="text-[#070041] text-2xl py-2">
                ALBUUERQUE<br />
                MENAUL (NEAR UNIVERSITY)<br />
                2204 MENAUL BLVD NE ALBUUERQUE, NM87107<br />
                PHONE : 505.881.5151
                </p>
                <p className="text-[#070041] text-2xl py-2">GIBSON (NEAR SAN MATEO)<br />
                5211 GIBSON BLVD SE ALBUUERQUE, NM87109<br />
                PHONE : 505.265.9200
                </p>
                <p className="text-[#070041] text-2xl py-2">JUAN TABO (NEAR LOMAS)<br />
                801 JUAN TABO BLVD NE ALBUUERQUE, NM87123<br />
                PHONE : 505.308.5194
                </p>
            </div>
        </div>
    );
}

export default Location;