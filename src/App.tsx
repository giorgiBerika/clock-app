import './App.css'
import React, {  useState, createContext, useContext, ReactNode } from 'react'

import { TopSection, BottomSection } from './sections/main';

interface MyContextValue {
  moreInfo: boolean;
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

  const toggleMoreInfo = (openedInfo: boolean) => 
  {
    setMoreInfoOpen(openedInfo);
  }
  const contextValue: MyContextValue = {
    moreInfo,
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
//  const onClickHandler = () => {
//     const divOne = document.querySelector('.div-1') as HTMLElement;

//     if (divOne) {

//       divOne.style.height = (divOne.style.height === '100%') ? '50%' : '100%';
//     }
//   };
 
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
