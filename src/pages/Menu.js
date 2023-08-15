import MenuImg1 from "../assets/images/main_pic_01.png";
import MenuImg2 from "../assets/images/main_pic_02.png";

const Menu = () => {
    return(
        <div className="grid grid-cols-2 p-10" id="menu">
            <div className="col-span-2 text-center text-[#0F256E] font-bold py-[8%]">
                <p className="text-3xl">BURRITOS & TACOS</p> 
                <p className="text-5xl">SUPPORT OUR TROOPS</p>
                <p className="text-md font-normal">We serve breakfast all day, 10% of all net proceeds are donated to the VA Hospital.<br />Enjoy our breakfast and lunch, our famous buttermilk chicken sandwitches, chicken fingers, and street tacos.</p>
            </div>
            <div className="flex flex-col font-Shaimus items-center col-span-2 sm:col-span-1">
                <img className="h-full" src={MenuImg1} alt="menu1" />
                <button className="font-Shaimu bg-[#DF1C1C] text-white text-2xl px-[5%] py-1 my-[10%] font-[Shaimus Clean Regular] font-bold">Order Now</button>
            </div>
            <div className="flex flex-col items-center font-Shaimus col-span-2 sm:col-span-1">
            <img className="h-full" src={MenuImg2} alt="menu2" />
                <button className="font-Shaimu bg-[#DF1C1C] text-white text-2xl px-[5%] py-1 my-[10%] font-[Shaimus Clean Regular] font-bold">Order Now</button>
            </div>
        </div>
    );
}

export default Menu;