import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'

export default function Draw() {
  return (
    <Layout>
      <Header value="Drawing app"/>
      <main>
        <canvas>

        </canvas>
      </main>
    </Layout>
  )
}
