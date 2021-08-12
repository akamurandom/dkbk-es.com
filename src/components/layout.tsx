import React, { ReactNode } from 'react'

import Footer from './footer'
import Head from './head'
import { Props as HeadProps } from './head'
import Nav from './nav'

type Props = {
  headProps?: HeadProps,
  children: ReactNode
}

const Layout = (props: Props) => {
  return (
    <div>
      <Head {...props.headProps} />
      <Nav />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
