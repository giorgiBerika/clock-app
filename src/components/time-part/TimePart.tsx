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
                 text-xl
                 font-normal
                 leading-wide
                 
                ">GOOD MORNING, IT’S CURRENTLY</span>
            </div>
            <div className={`
             flex
             items-end
             justify-around
             gap-x-[11px]

             my-[6rem]
            `}>
                <h2 className="
                 
                 text-[200px]
                 leading-8
                 font-bold

                ">11:37</h2>
                <span className="
                 text-4xl
                 font-light
                 leading-7
                 translate-y-[150%]
                ">bst</span>
            </div>
            <span className="
             text-2xl
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