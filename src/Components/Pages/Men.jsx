import React, { useState } from "react";
import Mens from "../../assets/MEN.json";
import { FaArrowRightLong } from "react-icons/fa6";
import MenDenimBanner from "../../assets/images/menDenimBanner.PNG"
import { useNavigate } from "react-router-dom";





const Men = () => {
  return (
    <main>
      {/* //video loading */}
      {/* <section className='max-h-screen'>
            <img src={Mens.previewVideo} alt=""className='object-cover h-full w-full' />
        </section> */}

      <Denim />
    </main>
  );
};

const MenDenimSampleImage=[
    "https://outfitters.com.pk/cdn/shop/files/F0603109622_lower_1.jpg?v=1763465173&width=1066",
    "https://outfitters.com.pk/cdn/shop/files/F0607109630LOWER.jpg?v=1765969058&width=1066",
    "https://outfitters.com.pk/cdn/shop/files/F0533109630LOWER.jpg?v=1755069653&width=1066",
    "https://outfitters.com.pk/cdn/shop/files/F0718109622LOWER.jpg?v=1768469688&width=1066",
]

export default Men;

const Denim = () => {
  
  const navigate = useNavigate();
  const [blurImageIndex,setBlurImageIndex] = useState("");

  return (
    <main>
        {/* intro */}
        <section className="px-20">
      <h2 className="text-2xl md:text-3xl font-bold">Denim</h2>
      <p className="w-1/2 py-4 text-lg font-medium">
        WHEN WE THINK ABOUT DENIM, WE THINK ABOUT CRAFT — THE FABRIC, THE
        SILHOUETTE, THE WASH. IT’S A FASHION STAPLE, A CLASSIC PIECE THAT GROWS
        BETTER WITH WEAR, BECOMING MORE PERSONAL OVER TIME. WE KNOW WHAT MAKES
        DENIM, DENIM — SO WE CRAFT IT WITH CARE RIGHT HERE IN PAKISTAN. EACH
        WASH AND EVERY CUT CARRIES A STORY OF TEXTURE, MOVEMENT, AND EASE —
        BUILT FOR COMFORT, CONFIDENCE, AND EFFORTLESS STYLE.
      </p>
      <button 
      onClick={()=>navigate("/collections")}
      className="flex items-center gap-2 text-2xl font-semibold">VIEW ALL<span><FaArrowRightLong/></span></button>
        </section>

            {/* banner img */}
        <section>

        <div className="py-4">
            <img src={MenDenimBanner} alt="" className="w-full min-h-screen object-cover"/>
        </div>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
                {MenDenimSampleImage?.map((img,i)=>(
                    <img 
                    onMouseEnter={()=>setBlurImageIndex(img)}
                    onMouseLeave={()=>setBlurImageIndex("")}
                    src={img} alt={img} key={i} className={`w-full h-full object-cover ${blurImageIndex && blurImageIndex==!img ? "transition duration-300 blur-xs" :""}`}/>
                ))}
        </section>
        </section>

    </main>
  );
};
