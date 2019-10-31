import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Insta from "../components/Insta"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Insta />
    </div>
  </Layout>
)

export default IndexPage
