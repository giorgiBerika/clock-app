import React from "react";
import { ExactInfo } from "../../components/main";
import { useMyContext } from "../../App";
interface BottomSectionInterface {

}

const BottomSection: React.FC<BottomSectionInterface> = () => 
{
    const {moreInfo} = useMyContext();

    return (
        <>
          <section className={`
           bottom-section-bg
           h-1/2
           flex
           items-start
           justify-between
           gap-y-[148px]
           py-16
           pl-40

          `}>
            <div className={`
             flex
             flex-col
             gap-y-[42px]
            `}>
                <ExactInfo 
                    title={"CURRENT TIMEZONE"}
                    text={"Europe/London"}
                    />
                <ExactInfo 
                    title={"Day of the year"}
                    text={"295"}
                />
            </div>
            <div className={`
             flex
             flex-col
             items-start
             w-[50%]
             gap-y-[42px]
             border-l-2
             
             border-colorBlackSecond
             border-opacity-25
             pl-24
            `}>
                <ExactInfo 
                    title={"Day of the week"}
                    text={"5"}
                    />
                <ExactInfo 
                    title={"Week number"}
                    text={"42"}
                />
            </div>
          </section>
        </>
    )
}

export default BottomSection;