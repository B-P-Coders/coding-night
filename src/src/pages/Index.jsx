import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/index.module.css'
import Header from '../components/Header'
import Card  from "../components/Card";
import picture from '../images/doc.png'
import painting from '../images/paint.png'
import moment from 'moment'


const list = ['Timetable', 'Calendar', 'Calculator', 'Notebook', 'Markbook'];

export default function Index () {
function weekend() {
  let i = moment().day();
      if(i == 6 || i == 7){
          SetTime("Weekend już jest!");
      }else{
        const timeDiff = moment().isoWeekday(6).substract(moment()) 
        SetTime(timeDiff)
      }
}
  const [Time, SetTime] = useState(0);
  useEffect(() => weekend)
  return (
    <Layout>
      <div className={styles.main}>
        <Header value="Welcome to school4u! A place where you can manage your time efficiently!"/>
        <div className={styles.cardsContainer} onLoad={weekend}>
          <Card pic={picture} title="Check out our app's options" desc="We've made some amazing tools just for you! It's all to help you get better in any subject!" values={list}/>
          <Card pic={painting} title="Check out how many days are left to the weekend" desc="The time zone is selected automatically" values={[Time]}/>
        </div>
      </div>

    </Layout>
  )
}
