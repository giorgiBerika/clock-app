import './App.css'
import React, { useState } from 'react'

import { TopSection, BottomSection } from './sections/main';

const App: React.FC = () =>{

//  const onClickHandler = () => {
//     const divOne = document.querySelector('.div-1') as HTMLElement;

//     if (divOne) {

//       divOne.style.height = (divOne.style.height === '100%') ? '50%' : '100%';
//     }
//   };
  return (
    <>
      <section className={`
        w-screen
        min-h-screen
        h-screen


        lg:bg-desktopDay
        sm:bg-tabletDay
        bg-mobileDay

        bg-center
        bg-no-repeat
        bg-cover

        h-full
        
        font-custom
        font-normal
        overflow-hidden
        `}>
        
        <TopSection />
        <BottomSection />
        

        {/* <button type='button' onClick={onClickHandler}>click it</button> */}
        
      </section>
    </>
  )
}

export default App
