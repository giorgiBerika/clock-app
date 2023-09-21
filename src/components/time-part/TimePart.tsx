import React from "react";

import sunIcon from '../../assets/small-icons/icon-sun.svg'
import moonIcon from '../../assets/small-icons/icon-moon.svg'

interface TimePartInterface{

}

const TimePart: React.FC<TimePartInterface> = () => 
{
    return (
        <>
          <div className={`
           text-colorWhiteCommon
           uppercase
           flex
           flex-col
           items-start
           
          `}>
            <div className="
             flex
             items-center
             justify-start
             gap-x-4
            ">
                <img src={sunIcon} alt="sun icon" />
                <span className="
                 xl:text-xl
                 md:text-lg
                 text-sm
                 font-normal
                 leading-wide
                 
                ">GOOD MORNING, IT’S CURRENTLY</span>
                {/* xl-1280 */}
                {/* md-768 */}

            </div>
            <div className={`
             flex
             items-end
             justify-around
             gap-x-[11px]

             my-[6rem]
            `}>
                <h2 className="
                 xl:text-[200px]
                 md:text-[175px]
                 text-[100px]
                 leading-8
                 font-bold

                ">11:37</h2>
                <span className="
                 lg:text-4xl
                 md:text-3xl
                 text-sm
                 font-light
                 leading-7
                 translate-y-[150%]
                ">bst</span>
            </div>
            <span className="
             xl:text-xl
             md:text-lg
             text-sm
             font-bold
             leading-7
             tracking-wide
            ">
                IN LONDON, UK
            </span>
          </div>
        </>
    )
}

export default TimePart;