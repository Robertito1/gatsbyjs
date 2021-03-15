import React from "react";
import { StaticImage } from "gatsby-plugin-image"

function Main() {
  return (
   <div style={{ backgroundColor: '#262626'}} className='w-full rounded-t-md flex flex-col justify-around align-center px-8 py-20 md:px-20 md:py-28 lg:flex-row lg:justify-between lg:px-30 lg:py-40'>
    <div className='w-full lg:w-1/2 order-2 lg:order-1 flex flex-col text-white justify-center align-center items-center lg:items-start lg:pr-8'>
      <h2 className='text-8xl fancytext aTitleText'>HELLO</h2>
      <p className='text-xl'>I’m Robert Orazu, a Software Developer from Lagos Nigeria,  
      I specialize in efficient React and Node.js apps that just work across all platforms and browsers. 
      I care about building solutions that are usable and pleasant for the most number of people possible. I am interested in various
      technologies and I am always eager to learn new things</p>
      <p className='text-xl'>You can find me on other platforms using the corresponding icon at the footer of this website.</p>
      <p className='text-2xl text-yellow-200  mt-4 aTitleText'>CHEERS ROBERT</p>
    </div>
    <div className='flex order-1 lg:order-2 justify-center mt-12 lg:mt-0 lg:justify-start'>
      <StaticImage src="../images/robert.jpg" width={300} quality={95} alt="A dinosaur" className='p-0 rounded-full' /> 
    </div>
   </div>
  )
}


export default Main
