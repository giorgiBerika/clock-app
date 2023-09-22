import React, {useEffect} from "react";
import { ExactInfo } from "../../components/main";
import { useMyContext } from "../../App";
import axios from "axios";
interface BottomSectionInterface {
currentGlobTime: number;
}

const BottomSection: React.FC<BottomSectionInterface> = ({currentGlobTime}) => 
{
    const {changeDayWeek, changeWeekNumber,
        changeDayYear, changeTimeZone, moreInfo,
        timeZone, dayYear, dayWeek, weekNumber} = useMyContext();
        
 useEffect(() => {
    async function getWorldTime() {
      try {

        const response = await axios.get('http://worldtimeapi.org/api/timezone/Asia/Tbilisi');
        changeTimeZone(response.data.timezone);
        changeDayYear(response.data.day_of_year);
        changeDayWeek(response.data.day_of_week);
        changeWeekNumber(response.data.week_number);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getWorldTime();
  }, []);
  
    return (
        <>
          <section className={`
           
           ${(currentGlobTime > 6 && currentGlobTime < 17)? 
                'bottom-section-bg-day'
                : 'bottom-section-bg-night'}
                h-1/2
                flex

                sm:flex-row
                flex-col
               sm:items-start
               
               sm:justify-between
               justify-center
               sm:gap-y-[148px]
               sm:py-16
               py-12
               md:pl-40
               pl-16
           `}>
            <div className={`
             flex
             flex-col
             
             sm:gap-y-[42px]
             gap-y-[16px]
            `}>
                <ExactInfo 
                    title={"CURRENT TIMEZONE"}
                    text={timeZone}
                    currentGlobTime={currentGlobTime}
                    />
                <ExactInfo 
                    title={"Day of the year"}
                    text={dayYear}
                     currentGlobTime={currentGlobTime}
                />
            </div>
            <div className={`
             flex
             flex-col
             sm:items-start
             
             sm:w-[50%]
             w-full
             gap-y-[16px]
             mt-[16px]
             sm:border-l-2
             sm:border-colorBlackSecond
             sm:border-opacity-25
             sm:pl-24
            `}
            
            >
                <ExactInfo 
                    title={"Day of the week"}
                    text={dayWeek}
                     currentGlobTime={currentGlobTime}
                    />
                <ExactInfo 
                    title={"Week number"}
                    text={weekNumber}
                     currentGlobTime={currentGlobTime}
                />
            </div>
          </section>
        </>
    )
}

export default BottomSection;