import React from "react";

import btnArrow from '../../assets/small-icons/icon-arrow-up.svg'

interface ToggleButtonInterface{

}

const ToggleBtn: React.FC<ToggleButtonInterface> = () => 
{
    return (
        <>
            <div className="
             flex
             items-center
             gap-x-13px
             bg-colorWhiteCommon
             rounded-[28px]

             py-2
             pr-2
             pl-7

             cursor-pointer
            ">
                <span className="
                 text-4
                 font-bold
                 leading-7
                 uppercase
                 tracking-wider
                 text-colorBlackFirst
                 opacity-50
                 mr-[13px]
                ">more</span>
                <img 
                    className={`
                     rotate-180
                    `}
                    src={btnArrow} 
                    alt="Arrow icon" />
            </div>
        </>
    )
}

export default ToggleBtn;