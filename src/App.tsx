import { useState } from 'react'
import './App.css'

import desktopBgDay from './assets/desktop/bg-image-daytime.jpg';

function App() {

 const onClickHandler = () => {
    const divOne = document.querySelector('.div-1') as HTMLElement;

    if (divOne) {

      divOne.style.height = (divOne.style.height === '100%') ? '50%' : '100%';
    }
  };
  return (
    <>
      <div className={`
        w-screen
        min-h-screen
        h-screen
        bg-desktopDay
        bg-center
        bg-no-repeat
        bg-cover
        h-full
        `}>
        {/* border
        border-rose-500 */}
        <div className='div-1 div'>
          div 1
        </div>
        <div className='div-2 div'>
          div 2
        </div>

        <button type='button' onClick={onClickHandler}>click it</button>
        
      </div>
    </>
  )
}

export default App
