import React, {useState, useRef} from "react";

import refreshIcon from '../../assets/small-icons/icon-refresh.svg'
import { useMyContext } from "../../App";
import axios from "axios";

interface RandomQuoteInterface {

}

const RandomQuote: React.FC<RandomQuoteInterface> = () => 
{
    const {moreInfo} = useMyContext();
    const [quoteText, setQuoteText] = useState<string>('');
    const [quoteAuthor, setQuoteAuthor] = useState<string>('')

    const defaultQuote = useRef<string>('The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.');
    const defaultQuoteAuthor = useRef<string>('Ada Lovelace')
    
        async function getQuote() {
            try {
                const response = await axios.get('https://api.quotable.io/random');
                
                setQuoteText(response.data.content);
                setQuoteAuthor(response.data.author)
                
            }catch(error){
                console.log('Error fetching data:', error)
            }
        };
        

    return (
        <>
            <div className={`
             md:text-lg
             text-xs
             leading-7
             text-colorWhiteCommon
             max-w-xl
             transition-all
             duration-300
             absolute
             top-[10%]
             ${moreInfo ? 'translate-x-[-150%] opacity-20' : ''}
            `}
            >
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
                        {quoteText || defaultQuote.current}
                    </p>
                    <img
                        onClick={getQuote}
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
                ">{quoteAuthor || defaultQuoteAuthor.current}</h2>
            </div>
        </>
    )
}

export default RandomQuote;