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
      <p className='text-xl'>I’m Robert Orazu, a Software Developer from Lagos Nigeria,  
      I specialize in efficient React and Node.js apps that just work across all platforms and browsers. 
      I care about building solutions that are usable and pleasant for the most number of people possible. </p>
      <p className='text-xl'>You can find me on other platforms using the corresponding icon at the footer of this website.</p>
      <p className='text-xl'>cheers Robert</p>
    </div>
    <div className='text-white flex items-center'>
      <h2 className='text-gray-500 text-4xl'>My Picture</h2>
    </div>
   </div>
  )
}


export default Main
