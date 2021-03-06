import React,{useEffect} from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import { StaticImage } from "gatsby-plugin-image"

const Projects = () => {
  useEffect(() => {
    AOS.init({
        duration: 500,
        easing: 'ease-in',
        delay: 100
    });
  }, []);
    return ( 
        <div id='projects' style={{ backgroundColor: '#262626'}} className='rounded-b-md text-white mb-8 px-8 py-20 md:px-20 lg:px-30 '>
            <h1 className='text-4xl md:text-6xl font-bold mb-8 lg:mb-20 sectiontext aTitleText'>Some of my works</h1>
            <div className='w-full mb-20 flex flex-col justify-between items-center align-center lg:flex-row justify-between'  data-aos="fade-up">
              <div className='my-auto lg:pr-4'>
               <StaticImage src="../images/guala.png" width={800} quality={95} alt="A dinosaur" className='p-0' /> 
              </div>
              <div className='w-full pl-0 lg:w-1/4 lg:pl-4'>
               <h1 className='text-xl aTitleText'> Type:</h1>
               <p className='text-xl mb-4'>A Fintech App</p>
               <h1 className='text-xl aTitleText'>Tech Stack:</h1>
               <ol className='mb-4'>
                 <li className='text-xl'><p>-React.js</p></li>
                 <li className='text-xl'><p>-TailwindCSS</p></li>
                 <li className='text-xl'><p>-Formik</p></li>
                 <li className='text-xl'><p>-Yup</p></li>
               </ol>
               <h1 className='text-xl aTitleText'>Description:</h1>
               <p className='text-xl mb-4'>Fintech App used to manage business also personal assests</p>
               <div className='flex justify-left'>
                  <a href='https://prospa-fintech.herokuapp.com' 
                     role='button' 
                     className='viewProjectBtn text-black font-bold'
                     >Live link
                  </a>
                  <a href='https://github.com/robertito1/getpreneured' 
                     role='button' 
                     className='viewProjectBtn text-black font-bold ml-2'
                    >Code
                  </a>
               </div>   
              </div>
           </div>
           <div className='w-full  mb-20 flex flex-col justify-around items-center align-center lg:flex-row justify-between'  data-aos="fade-up">
              <div className='my-auto order-1 lg:order-2 lg:pl-4'>
               <StaticImage src="../images/beauty.png" width={800} quality={95} alt="A dinosaur" className='p-0' /> 
              </div>
              <div className='order-2 w-full lg:w-1/4 lg:order-1 pr-4'>
               <h1 className='text-xl'> Type:</h1>
               <p className='text-xl mb-4'>A Landing Page</p>
               <h1 className='text-xl'>Tech Stack:</h1>
               <ol className='mb-4'>
                 <li className='text-xl'><p>-HTML</p></li>
                 <li className='text-xl'><p>-CSS</p></li>
                 <li className='text-xl'><p>-JavaScript</p></li>
                 <li className='text-xl'><p>-BootStrap</p></li>
               </ol>
               <h1 className='text-xl'> Description:</h1>
               <p className='text-xl mb-4'>The landing page of a beauty and cosmetics E-commerce shop</p>
               <div className='flex justify-left'>
                  <a href='https://robertito1.github.io/beauty/' 
                     role='button' 
                     className='viewProjectBtn text-black font-bold'
                     >Live link
                  </a>
                  <a href='https://github.com/robertito1/beauty' 
                     role='button' 
                     className='viewProjectBtn text-black font-bold ml-2'
                    >Code
                  </a>
                </div>
              </div>
           </div>
           <div className='w-full mb-6 flex flex-col justify-between items-center align-center lg:flex-row justify-between'  data-aos="fade-up">
              <div className='my-auto lg:pr-4'>
               <StaticImage src="../images/dorcas.png" width={800} quality={95} alt="A dinosaur" className='p-0' /> 
              </div>
              <div className='w-full pl-0 lg:w-1/4 lg:pl-4'>
               <h1 className='text-xl aTitleText'> Type:</h1>
               <p className='text-xl mb-4'>A portfolio Site</p>
               <h1 className='text-xl aTitleText'>Tech Stack:</h1>
               <ol className='mb-4'>
                 <li className='text-xl'><p>-HTML</p></li>
                 <li className='text-xl'><p>-CSS</p></li>
                 <li className='text-xl'><p>-JavaScript</p></li>
                 <li className='text-xl'><p>-BootStrap</p></li>
               </ol>
               <h1 className='text-xl aTitleText'>Description:</h1>
               <p className='text-xl mb-4'>A portfolio Site for a Human Resource Consultant</p>
               <div className='flex justify-left'>
                  <a href='https://robertito1.github.io/project23/' 
                     role='button' 
                     className='viewProjectBtn text-black font-bold'
                     >Live link
                  </a>
                  <a href='https://github.com/robertito1/project23' 
                     role='button' 
                     className='viewProjectBtn text-black font-bold ml-2'
                    >Code
                  </a>
               </div> 
              </div>
           </div>
        </div>
     );
}
 
export default Projects;