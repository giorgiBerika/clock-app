import React from "react";

interface ExactInfoInterface{
    title: string;
    text: string | number;
    currentGlobTime: number
}

const ExactInfo: React.FC<ExactInfoInterface> = ({title,text, currentGlobTime}) => 
{
    
    return (
        <>
            <div 
            className={`
             flex
             sm:flex-col
             flex-row
             sm:items-start
             items-center
             justify-between
             sm:w-auto
             w-[90%]
             ${(currentGlobTime > 6 && currentGlobTime < 17)? 
                'text-colorBlackSecond'
                : 'text-colorWhiteCommon'}
            `}>
              <h3 className={`
               sm:text-sm
               text-[10px]
               font-normal
               leading-7
               tracking-wide
               uppercase
              `}>{title}</h3>
              <h2 className={`
               md:text-[56px]
               sm:text-[40px]
               text-xl
               font-bold
               leading-normal
              `}>{text}</h2>
            </div>
        </>
    )
}

export default ExactInfo;