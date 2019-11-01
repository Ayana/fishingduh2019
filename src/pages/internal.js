import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Internal = props => {
    return (
      <Layout location={props.location}>
        <SEO title="Internal View" />
        <div className="container-narrow" style={{padding: '8em 0'}}>
          <p className="text-center">Internal View</p>
        </div>
      </Layout>
    )

}

export default Internal

