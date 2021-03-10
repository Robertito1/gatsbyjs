import React from 'react';

const Skills = () => {
    return ( 
        <div id='skills'style={{ backgroundColor: '#262626'}} className='text-white px-8 py-20 md:px-20 lg:px-30'>
        <h4 className='mb-4 text-5xl font-bold sectiontext'>Industry relevant Skills</h4>
        <div>
        <h6 className='text-2xl'>Programming Languages</h6>
        <ul className='mb-4'>
            <li className='text-xl'>JavaScript</li>
            <li className='text-xl'>TypeScript</li>
            <li className='text-xl'>Java</li>
        </ul>
        <h6 className='text-2xl'>Frontend Development</h6>
        <ul className='mb-4'>
            <li className='text-xl'>HTML</li>
            <li className='text-xl'>CSS</li>
            <li className='text-xl'>JavaScript</li>
            <li className='text-xl'>React/Redux</li>
            <li className='text-xl'>BootStrap</li>
            <li className='text-xl'>Tailwind Css</li>
        </ul>
        <h6 className='text-2xl'>Backend Development</h6>
        <ul className='mb-4'>
            <li className='text-xl'>Node.js/Express.js</li>
            <li className='text-xl'>Graphql</li>
            <li className='text-xl'>Java/SpringBoot</li>
        </ul>
        <h6 className='text-2xl'>DataBase Administration</h6>
        <ul className='mb-4'>
            <li className='text-xl'>MongoDB</li>
            <li className='text-xl'>PostgreSQL</li>
        </ul>
        <h6 className='text-2xl'>Software testing</h6>
        <ul className='mb-4'>
            <li className='text-xl'>Jest</li>
            <li className='text-xl'>Cypress</li>
        </ul>
        <h6 className='text-2xl'>CI/CD</h6>
        <ul className='mb-4'>
            <li className='text-xl'>Github Actions</li>
        </ul>
        </div>
        </div>
     );
    }
export default Skills;