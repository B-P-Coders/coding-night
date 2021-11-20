import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/index.module.css'
import Header from '../components/Header'
import Card  from "../components/Card";
import Calculator from '../images/calculator.png';
import Charts from '../images/chart.png';
import Formulas from '../images/formulas.png';

export default function Math () {
  return (
    <Layout>
      <div className={styles.main}>
      <Header value="Welcome to our Math mark! You can find here some reaally helpful tools!"/>
      <div className={styles.cardsContainer}>
        <Card pic={Formulas} title="Those are really helpful" desc="We've made some amazing tools just for you! It's all to help you get better in any subject!" values={
          [
            'Basics', 'Advanced', 'Physics', 'Chemistry'
          ]
        }/>
        <Card pic={Charts} title="Some amazing charts creator!" desc="Here you go, have fun!" values={
          [
            'This tool alows you to make a chart whatever you want!'
          ]
        }/>
        <Card pic={Calculator} title="barteknapiszto!" desc="to tez!" values={
          [
            'tuzrobopis!'
          ]
        }/>
      </div>
      </div>

    </Layout>
  )
}
