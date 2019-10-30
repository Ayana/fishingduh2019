import React from "react"
import PropTypes from "prop-types"
import "../assets/scss/styles.scss"

const Layout = ({ children }) => {

  return (
    <>
      <header className="text-center pad_t_30">
        <h1>Fishing Duh!!</h1>
      </header>
      <main>{children}</main>
      <footer className="text-center pad_b_10">
        © {new Date().getFullYear()}
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
