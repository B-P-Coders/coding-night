import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Canvas from '../components/Canvas'

export default function Draw() {
  return (
    <Layout>
      <Header value="Drawing app"/>
      <main>
        <Canvas/>
      </main>
    </Layout>
  )
}
