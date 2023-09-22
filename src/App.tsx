import './App.css'
import React, {  useState, createContext, useContext, ReactNode, useEffect } from 'react'

import { TopSection, BottomSection } from './sections/main';
import axios from 'axios';
interface MyContextValue {
  moreInfo: boolean;
  timeZone: string;
  dayYear: string | number;
  dayWeek: string | number;
  weekNumber: string | number;
  changeWeekNumber: (newVal: string | number) => void;
  changeDayWeek: (newVal: string | number) => void;
  changeDayYear: (newVal: string | number) => void;
  changeTimeZone: (newVal: string) => void;
  toggleMoreInfo: (newValue: boolean) => void;
}


const MyContext = createContext<MyContextValue | undefined>(undefined);

interface MyContextProviderProps
{
  children: ReactNode;
}

const MyContextProvider: React.FC<MyContextProviderProps> = ({children}) =>
{
  const [moreInfo, setMoreInfoOpen] = useState<boolean>(false);

  const [timeZone, setTimeZone] = useState<string>('');
  const [dayYear, setDayYear] = useState<string | number>('');
  const [dayWeek, setDayWeek] = useState<string | number>('');
  const [weekNumber, setWeekNumber] = useState<string | number>('');
  
  const toggleMoreInfo = (openedInfo: boolean) => 
  {
    setMoreInfoOpen(openedInfo);
  }
  const changeWeekNumber = (weekNum: string| number) =>
  {
    setWeekNumber(weekNum)
  }
  const changeDayWeek = (dayWeek: string | number) =>
  {
    setDayWeek(dayWeek)
  }
  const changeDayYear = (dayYear: string | number) =>
  {
    setDayYear(dayYear);
  }
  const changeTimeZone = (timeZone: string) => 
  {
    setTimeZone(timeZone)
  }
  const contextValue: MyContextValue = {
    moreInfo,
    timeZone,
    dayYear,
    dayWeek,
    weekNumber,
    changeWeekNumber,
    changeDayWeek,
    changeDayYear,
    changeTimeZone,
    toggleMoreInfo
  }
   return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider> 
}

export const useMyContext = (): MyContextValue => {
  const context = useContext(MyContext);
  if(!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }else
  {
    return context;
  }
}

const App: React.FC = () =>{


  // useEffect(() => {
  //   async function getWorldTime() {
  //     try {

  //       const response = await axios.get('http://worldtimeapi.org/api/timezone/Asia/Tbilisi');
  //       console.log(response.data.day_of_week);
  //       changeDayWeek()
        
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }
  //   getWorldTime();
  // }, [])
  return (
    <>
    <MyContextProvider>
      <section className={`
        w-screen
        h-screen


        lg:bg-desktopDay
        sm:bg-tabletDay
        bg-mobileDay

        bg-center
        bg-no-repeat
        bg-cover
        
        font-custom
        font-normal
        overflow-hidden
        `}>
        
        <TopSection 
        />
        <BottomSection />
        

        {/* <button type='button' onClick={onClickHandler}>click it</button> */}
        
      </section>
    </MyContextProvider>
    </>
  )
}

export default App
