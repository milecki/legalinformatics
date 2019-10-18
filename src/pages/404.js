import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Nie odnaleziono strony</h1>
    <p>
      Strona o podanym adresie nie istnieje. Spróbuj wpisać adres jeszcze raz.
    </p>
  </Layout>
)

export default NotFoundPage
