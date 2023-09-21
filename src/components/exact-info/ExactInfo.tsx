import React from "react";

interface ExactInfoInterface{
    title: string;
    text: string;
}

const ExactInfo: React.FC<ExactInfoInterface> = ({title,text}) => 
{
    return (
        <>
            <div className={`
             flex
             flex-col
             text-colorBlackSecond

            `}>
              <h3 className={`
               text-sm
               font-normal
               leading-7
               tracking-wide
               uppercase
              `}>{title}</h3>
              <h2 className={`
               text-[56px]
               font-bold
               leading-normal
              `}>{text}</h2>
            </div>
        </>
    )
}

export default ExactInfo;