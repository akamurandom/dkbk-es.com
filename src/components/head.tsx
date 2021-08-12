import React from 'react'
import Helmet from 'react-helmet'

export type Props = {
  title?: string,
  description?: string
}

const Head = (props: Props) => (
  <Helmet
    htmlAttributes={{
      lang: 'ja'
    }}
    title={props.title || '凸凹ES'}
    meta={[
      {
        name: 'description',
        content: props.description
      }
    ]}
  />
)

export default Head
