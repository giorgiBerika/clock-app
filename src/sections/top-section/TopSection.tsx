import React from "react";

import { RandomQuote, TimePart, ToggleBtn } from "../../components/main";

interface TopSectionInterface {

}

const TopSection: React.FC<TopSectionInterface> = () => 
{
    return (
        <>
            <section className={`
                bg-black
                bg-opacity-50
                
                px-40
                pt-14
                pb-28
            `}>
                <RandomQuote />

                <div>
                    <TimePart />
                    <ToggleBtn />
                </div>

            </section>
        </>
    )
}

export default TopSection;