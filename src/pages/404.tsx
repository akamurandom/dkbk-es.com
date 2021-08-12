import React from "react"
import { Link } from "gatsby"

import Head from "../components/head"

// markup
const NotFoundPage = () => {
  return <>
    <Head
      title="404 NOT FOUND"
      description="ページが見つかりませんでした"
    />
    <h2 className="title is-2">404 NOT FOUND</h2>
    <p>
      <Link to="/">TOPに戻る</Link>
    </p>
  </>
}

export default NotFoundPage
