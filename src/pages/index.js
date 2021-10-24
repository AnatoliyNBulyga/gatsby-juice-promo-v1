import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import Header from "../components/common/Header"
import WithAnimation from "../hoc/WithAnimation"

const IndexPage = () => (
  <WithAnimation>
    <Layout>
      <Seo title="Home" />
      <Header />
    </Layout>
  </WithAnimation>

)

export default IndexPage
