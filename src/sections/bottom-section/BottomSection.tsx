import React, {useEffect} from "react";
import { ExactInfo } from "../../components/main";
import { useMyContext } from "../../App";
import axios from "axios";
interface BottomSectionInterface {

}

const BottomSection: React.FC<BottomSectionInterface> = () => 
{
    const {changeDayWeek, changeWeekNumber,
        changeDayYear, changeTimeZone, moreInfo,
        timeZone, dayYear, dayWeek, weekNumber} = useMyContext();
        
 useEffect(() => {
    async function getWorldTime() {
      try {

        const response = await axios.get('http://worldtimeapi.org/api/timezone/Asia/Tbilisi');
        console.log(response.data.timezone);
        changeTimeZone(response.data.timezone);
        changeDayYear(response.data.day_of_year);
        changeDayWeek(response.data.day_of_week);
        changeWeekNumber(response.data.week_number);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getWorldTime();
  }, [])
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
                    text={timeZone}
                    />
                <ExactInfo 
                    title={"Day of the year"}
                    text={dayYear}
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
                    text={dayWeek}
                    />
                <ExactInfo 
                    title={"Week number"}
                    text={weekNumber}
                />
            </div>
          </section>
        </>
    )
}

export default BottomSection;