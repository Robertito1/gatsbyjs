import React from "react";
// import anime from 'animejs/lib/anime.es.js';


function Main() {
  // anime({
  //   targets: 'h2',
  //   translateX: 250,
  //   rotate: '1turn',
  //   backgroundColor: '#FFF',
  //   duration: 800
  // });
  return (
   <div style={{ backgroundColor: '#262626'}} className='w-full rounded-t-md flex flex-col justify-around align-center px-8 py-20 md:px-20 lg:flex-row justify-between px-30'>
    <div className='w-full flex flex-col text-white justify-center align-center items-center lg:items-start'>
      <p className='text-8xl fancytext'>HELLO</p>
      <p className='text-xl'>I’m Daniel „Danny“ Knaack, born in Hamburg, a trained media designer (non-print) and
      I work as a web / UI / UX designer.</p>
      <p className='text-xl'>You can find my current portfolio from the past 20 years and my CV here on my website.</p>
      <p className='text-xl'>Denn mal tau / cheersDanny</p>
    </div>
    <div className='text-white flex items-center'>
      <h2 className='text-gray-500 text-4xl'>MORE WRITE UP</h2>
    </div>
   </div>
  )
}


export default Main
