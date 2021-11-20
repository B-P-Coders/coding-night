import React from 'react'
import * as styles from '../styles/formulas.module.css'
import Layout from '../components/Layout'
export default function Formulas() {
return (
  <Layout>
  <div className={styles.main}>
<p>Math</p>
<div className={styles.formula}> n! = 1 · 2 · 3 · ... · n</div>
<div className={styles.formula}>sin(α + β) = sinαcosβ + cosαsinβ</div>
<div className={styles.formula}>  Pn = n!</div>
<div className={styles.formula}>P=1/2ah</div>
<div className={styles.formula}>L = 2πr</div>
<div className={styles.formula}> V = Pp · H</div>
<div className={styles.formula}>sin(270° + α) = -cosα </div>
<div className={styles.formula}>a3 - b3 = (a - b)(a2 + ab + b2)</div>
<p>Physics</p>
<div className={styles.formula}>Fg = m • g</div>
<div className={styles.formula}>ρ = m/V</div>
<div className={styles.formula}>p = Fn/S</div>
<div className={styles.formula}>p = ρ • g • h</div>
<div className={styles.formula}>Fw = ρc • g • Vc</div>
<div className={styles.formula}>Vch = Δxm/ Δtm</div>
<div className={styles.formula}>a = ΔV/Δt</div>
<div className={styles.formula}>V = a • t</div>
<div className={styles.formula}>a = F/m</div>

<p>Chemistry</p>
<div className={styles.formula}>cm=n/Vr</div>
<div className={styles.formula}>cm=(cp⋅dr)(100%⋅M)</div>
<div className={styles.formula}></div>
<div className={styles.formula}></div>
<div className={styles.formula}></div>

  </div>
  </Layout>

)
}
