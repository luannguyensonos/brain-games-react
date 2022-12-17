import React, { ReactNode } from 'react'
import Head from 'next/head'
import { container } from './PageContainer.css'

type PageContainerProps = {
  title: string
  description: string
  children?: ReactNode
}

const PageContainer = ({ title, description, children }: PageContainerProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={container}>
        {children}
      </div>
    </div>
  )
}

export default PageContainer
