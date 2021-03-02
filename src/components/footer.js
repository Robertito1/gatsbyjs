import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBitbucket } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className='w-full flex flex-col align-center justify-around bg-black h-40 rounded-md px-40 lg:flex-row justify-between'>
    <div className='text-white flex justify-center align-center w-full items-center lg:justify-start'>
    <a href="https://linkedin.com/in/orazurobert" rel="noopener noreferrer" target="_blank" className="mr-6">
       <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="hover:bg-gray-400"/>
    </a>
    <a href="https://github.com/robertito1" rel="noopener noreferrer" target="_blank" className="mx-6">
       <FontAwesomeIcon icon={faGithub} size="2x" className="hover:bg-gray-400"/>
    </a>
    <a href="https://twitter.com/emperorberto" rel="noopener noreferrer" target="_blank" className="mx-6">
       <FontAwesomeIcon icon={faTwitter} size="2x" className="hover:bg-gray-400"/>
    </a>
    <a href="https://bitbucket.org/orazurobert/" rel="noopener noreferrer" target="_blank" className="ml-6">
       <FontAwesomeIcon icon={faBitbucket} size="2x" className="hover:bg-gray-400"/>
    </a>
    </div>
    <div className='text-white flex items-center justify-center w-full'>
    &copy; Copyright 2021 König Technologies | Gatsby.js
    </div>
  </footer>
)


export default Footer