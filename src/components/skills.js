import React from 'react';
import '../styles/skills.css';
import ReactAnime from 'react-animejs'


const Skills = () => {
 const {Anime} = ReactAnime;
  
    return ( 
        <div id='skills'style={{ backgroundColor: '#262626'}} className='text-white px-8 py-20 md:px-20 lg:px-30'>
                <Anime
                    className='hidden lg:inline'
                    initial={[
                        {
                        targets: "#express",
                        keyframes: [
                            {translateY: -10},
                            {translateX: 20},
                            {translateY: 0},
                            {color: '#68f7d5', duration: 10},
                            {color: '#262626'},
                            {translateX: 0},
                          ],
                        duration: 3000,
                        easing: "linear",
                        loop: true
                        }
                    ]}
                    >
                    <h4 style={{color: '#262626'}} id="express" className='text-white text-4xl font-bold express'>
                      EXPRESS
                    </h4>
                </Anime>
                <Anime
                    className='hidden lg:inline'
                    initial={[
                        {
                        targets: "#react",
                        keyframes: [
                            {translateY: -20},
                            {translateX: 10},
                            {translateY: 0},
                            {color: '#68f7d5', duration: 10},
                            {color: '#262626'},
                            {translateX: 0},
                          ],
                        duration: 3000,
                        easing: "linear",
                        loop: true
                        }
                    ]}
                    >
                    <h4 style={{color: '#262626'}} id="react" className='text-white text-7xl font-extrabold react'>
                      REACT.JS
                    </h4>
                </Anime>
                <Anime
                    className='hidden lg:inline'
                    initial={[
                        {
                        targets: "#node",
                        keyframes: [
                            {translateY: -15},
                            {translateX: 15},
                            {translateY: 0},
                            {color: '#68f7d5', duration: 10},
                            {color: '#262626'},
                            {translateX: 0},
                          ],
                        duration: 4000,
                        easing: "linear",
                        loop: true
                        }
                    ]}
                    >
                    <h4 style={{color: '#262626'}} id="node" className='text-white text-6xl font-extrabold node'>
                      NODE.JS
                    </h4>
                </Anime>
                <Anime
                    className='hidden lg:inline'
                    initial={[
                        {
                        targets: "#jest",
                        keyframes: [
                            {translateY: 15},
                            {translateX: -15},
                            {translateY: 0},
                            {color: '#68f7d5', duration: 10},
                            {color: '#262626'},
                            {translateX: 0},
                          ],
                        duration: 3300,
                        easing: "linear",
                        loop: true
                        }
                    ]}
                    >
                    <h4 style={{color: '#262626'}} id="jest" className='text-white text-3xl font-extrabold jest'>
                      JEST
                    </h4>
                </Anime>
                <Anime
                    className='hidden lg:inline'
                    initial={[
                        {
                        targets: "#mongo",
                        keyframes: [
                            {translateY: 35},
                            {translateX: -15},
                            {translateY: 0},
                            {color: '#68f7d5', duration: 10},
                            {color: '#262626'},
                            {translateX: 0},
                          ],
                        duration: 4300,
                        easing: "linear",
                        loop: true
                        }
                    ]}
                    >
                    <h4 style={{color: '#262626'}} id="mongo" className='text-white text-6xl font-extrabold mongo'>
                      MONGO DB
                    </h4>
                </Anime>
                <Anime
                    className='hidden lg:inline'
                    initial={[
                        {
                        targets: "#tailwind",
                        keyframes: [
                            {translateY: 15},
                            {translateX: -15},
                            {translateY: 0},
                            {color: '#68f7d5', duration: 10},
                            {color: '#262626'},
                            {translateX: 0},
                          ],
                        duration: 3000,
                        easing: "linear",
                        loop: true
                        }
                    ]}
                    >
                    <h4 style={{color: '#262626'}} id="tailwind" className='text-white text-4xl font-extrabold tailwind'>
                      TAILWIND CSS
                    </h4>
                </Anime>
                <Anime
                    className='hidden lg:inline'
                    initial={[
                        {
                        targets: "#typescript",
                        keyframes: [
                            {translateY: 25},
                            {translateX: 15},
                            {translateY: 0},
                            {color: '#68f7d5', duration: 10},
                            {color: '#262626'},
                            {translateX: 0},
                          ],
                        duration: 5000,
                        easing: "linear",
                        loop: true
                        }
                    ]}
                    >
                    <h4 style={{color: '#262626'}} id="typescript" className='text-white text-4xl font-extrabold typescript'>
                      TYPESCRIPT
                    </h4>
                </Anime>
                <Anime
                    className='hidden lg:inline'
                    initial={[
                        {
                        targets: "#ci",
                        keyframes: [
                            {translateY: -10},
                            {translateX: 10},
                            {translateY: 0},
                            {color: '#68f7d5', duration: 10},
                            {color: '#262626'},
                            {translateX: 0},
                          ],
                        duration: 3000,
                        easing: "linear",
                        loop: true
                        }
                    ]}
                    >
                    <h4 style={{color: '#262626'}} id="ci" className='text-white text-3xl font-bold ci'>
                      CI/CD
                    </h4>
                </Anime>
                <Anime
                    className='hidden lg:inline'
                    initial={[
                        {
                        targets: "#graphql",
                        keyframes: [
                            {translateY: -20},
                            {translateX: 10},
                            {translateY: 0},
                            {color: '#68f7d5', duration: 10},
                            {color: '#262626'},
                            {translateX: 0},
                          ],
                        duration: 5000,
                        easing: "linear",
                        loop: true
                        }
                    ]}
                    >
                    <h4 style={{color: '#262626'}} id="graphql" className='text-3xl font-bold graphql'>
                      GRAPHQL
                    </h4>
                </Anime>
                <Anime
                    className='hidden lg:inline'
                    initial={[
                        {
                        targets: "#redux",
                        keyframes: [
                            {translateY: 20},
                            {translateX: 10},
                            {translateY: 0},
                            {color: '#68f7d5', duration: 10},
                            {color: '#262626'},
                            {translateX: 0},
                          ],
                        duration: 5000,
                        easing: "linear",
                        loop: true
                        }
                    ]}
                    >
                    <h4 style={{color: '#262626'}} id="redux" className='text-3xl font-bold redux'>
                      REDUX
                    </h4>
                </Anime>
                <Anime
                    className='hidden lg:inline'
                    initial={[
                        {
                        targets: "#javascript",
                        keyframes: [
                            {translateY: 20},
                            {translateX: 10},
                            {translateY: 0},
                            {color: '#68f7d5', duration: 10},
                            {color: '#262626'},
                            {translateX: 0},
                          ],
                        duration: 6000,
                        easing: "linear",
                        loop: true
                        }
                    ]}
                    >
                    <h4 style={{color: '#262626'}} id="javascript" className='text-5xl font-extrabold javascript'>
                      JAVASCRIPT
                    </h4>
                </Anime>
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