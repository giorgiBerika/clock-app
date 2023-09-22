import React from "react";
import { useMyContext } from "../../App";
import { RandomQuote, TimePart, ToggleBtn } from "../../components/main";

interface TopSectionInterface {

}

const TopSection: React.FC<TopSectionInterface> = () => 
{
    const {moreInfo} = useMyContext();

    return (
        <>
            <section className={`
                flex
                flex-col
                justify-end
                md:items-start
                items-center
                
                bg-black
                bg-opacity-50
                
                xl:px-40
                md:pl-16
                pt-14
                xl:pb-28
                pb-16

                transition-height
                duration-300
                ease-in-out

                ${moreInfo ? 'h-1/2 xl:pb-14 ' : 'h-full'}
            `}>
                <RandomQuote /> 

                <div className={`
                 flex
                 justify-between
                 xl:items-end
                 xl:flex-row
                 flex-col
                 md:items-start
                 items-center
                 gap-y-[80px]
                 w-full
                 
                `}>
                    <TimePart />
                    <ToggleBtn />
                </div>

            </section>
        </>
    )
}

export default TopSection;