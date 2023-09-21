import React from "react";

import refreshIcon from '../../assets/small-icons/icon-refresh.svg'

interface RandomQuoteInterface {

}

const RandomQuote: React.FC<RandomQuoteInterface> = () => 
{
    return (
        <>
            <div className="
             md:text-lg
             text-xs
             leading-7
             text-colorWhiteCommon
             max-w-xl
             
            ">
                <div className={`
                 flex
                 items-start
                 mb-[13px]
                `}>
                    <p className="
                     font-normal
                     md:max-w-xl
                     max-w-[290px]
                    ">
                        “The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”
                    </p>
                    <img
                        className="
                        translate-y-[50%]
                         cursor-pointer
                         ml-2
                        " 
                        src={refreshIcon} 
                        alt="refresh icon" />
                </div>
                <h2 className="
                 font-bold
                ">Ada Lovelace</h2>
            </div>
        </>
    )
}

export default RandomQuote;