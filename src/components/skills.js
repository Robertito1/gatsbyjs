import React from 'react';

const Skills = () => {
    return ( 
        <div id='skills'style={{ backgroundColor: '#262626'}} className='text-white px-8 py-20 md:px-20 lg:px-30'>
        <h4 className='mb-8 lg:mb-20 text-4xl md:text-6xl font-bold sectiontext aTitleText'>Industry relevant Skills</h4>
        <div>
        <p className='text-2xl'>Programming Languages</p>
        <ul className='mb-4'>
            <li className='text-xl'><p>JavaScript</p></li>
            <li className='text-xl'><p>TypeScript</p></li>
            <li className='text-xl'><p>Java</p></li>
        </ul>
        <p className='text-2xl'>Frontend Development</p>
        <ul className='mb-4'>
            <li className='text-xl'><p>HTML</p></li>
            <li className='text-xl'><p>CSS</p></li>
            <li className='text-xl'><p>JavaScript</p></li>
            <li className='text-xl'><p>React/Redux</p></li>
            <li className='text-xl'><p>Bootstrap</p></li>
            <li className='text-xl'><p>Tailwind Css</p></li>
        </ul>
        <p className='text-2xl'>Backend Development</p>
        <ul className='mb-4'>
            <li className='text-xl'><p>Node.js/Express.js</p></li>
            <li className='text-xl'><p>Graphql</p></li>
            <li className='text-xl'><p>Java/SpringBoot</p></li>
        </ul>
        <p className='text-2xl'>DataBases</p>
        <ul className='mb-4'>
            <li className='text-xl'><p>MongoDB</p></li>
            <li className='text-xl'><p>PostgreSQL</p></li>
        </ul>
        <p className='text-2xl'>Software testing</p>
        <ul className='mb-4'>
            <li className='text-xl'><p>Jest</p></li>
            <li className='text-xl'><p>Cypress</p></li>
        </ul>
        <p className='text-2xl'>CI/CD</p>
        <ul className='mb-4'>
            <li className='text-xl'><p>Github Actions</p></li>
        </ul>
        </div>
        </div>
     );
    }
export default Skills;