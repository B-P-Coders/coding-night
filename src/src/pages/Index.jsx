import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/index.module.css'
import Header from '../components/Header'
import Card  from "../components/Card";
import picture from '../images/doc.png'
import painting from '../images/paint.png'
import { Link } from 'react-router-dom';


const list = ['Timetable', 'Calendar', 'Calculator', 'Notebook', 'Markbook'];
var today = new Date();
let inp = (today.getDay());
inp = [(6-inp)];
if (inp == 6 || inp == 0){
  inp = ['Weekend już jest!'];
}
export default function Index () {
  return (
    <Layout>
      <div className={styles.main}>
        <Header value="Welcome to School4u! A place where you can manage your time efficiently!"/>
        <div className={styles.cardsContainer}>
          <Card pic={picture} title="Check out our app's options" desc="We've made some amazing tools just for you! It's all to help you get better in any subject!" values={list}/>
          <Card pic={painting} title="Check out how many days are left to the weekend" desc="The time zone is selected automatically" values={inp}/>
          <Link to="/wordcounter"><Card pic={""} title="Word counter" desc="Check how many words has your essey" values={[]}/></Link>
        </div>
      </div>
    </Layout>
  )
}
