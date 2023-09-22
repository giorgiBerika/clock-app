import './App.css'
import React, {  useState, createContext, useContext, ReactNode} from 'react'

import { TopSection, BottomSection } from './sections/main';

interface MyContextValue {
  moreInfo: boolean;
  timeZone: string;
  dayYear: string | number;
  dayWeek: string | number;
  weekNumber: string | number;
  changeCurrentHour: (newVal: number) => void;
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

  const [currentGlobHour, setCurrentGlobHour] = useState<number>(12);

  const [timeZone, setTimeZone] = useState<string>('');
  const [dayYear, setDayYear] = useState<string | number>('');
  const [dayWeek, setDayWeek] = useState<string | number>('');
  const [weekNumber, setWeekNumber] = useState<string | number>('');
  
  const changeCurrentHour = (currentHour: number) => 
  {
    setCurrentGlobHour(currentHour)
  }
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
    changeCurrentHour,
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

  const [currentGlobTime, setCurrentGlobTime] = useState<number>(12);

  return (
    <>
    <MyContextProvider>
      <section className={`
        w-screen
        h-screen
       ${(currentGlobTime > 6 && currentGlobTime < 17) ? 
        'lg:bg-desktopDay sm:bg-tabletDay bg-mobileDay' :
        'lg:bg-desktopNight sm:bg-tabletNight bg-mobileNight' 
      }
        bg-center
        bg-no-repeat
        bg-cover
        
        font-custom
        font-normal
        overflow-hidden
        `}>
        
        <TopSection 
        setCurrentGlobTime={setCurrentGlobTime}
        />

        <BottomSection 
        currentGlobTime={currentGlobTime}
        />        
      </section>
    </MyContextProvider>
    </>
  )
}

export default App
