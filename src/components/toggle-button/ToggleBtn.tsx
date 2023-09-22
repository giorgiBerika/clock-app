import React from "react";
import { useMyContext } from "../../App";
import btnArrow from '../../assets/small-icons/icon-arrow-up.svg'



const ToggleBtn: React.FC = () => 
{
    const {moreInfo, toggleMoreInfo} = useMyContext();

    const onClickHandler = () =>
    {
        toggleMoreInfo(!moreInfo);
    }
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
            "
            onClick={onClickHandler}
            >
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
                    transition-all
                    duration-150
                    hover:opacity-50
                    ${moreInfo ? '' : 'rotate-180'}
                     
                    `}
                    src={btnArrow} 
                    alt="Arrow icon" />
            </div>
        </>
    )
}

export default ToggleBtn;