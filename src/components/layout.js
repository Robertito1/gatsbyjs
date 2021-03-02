import React from "react"
import PropTypes from "prop-types"

import "../styles/layout.css"
import Footer from "./footer"
// import Navbar from "./navbar"

const Layout = ({ children }) => {
  
  return (
    <div className='backdroP'>
      {/* <Navbar/> */}
        <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
