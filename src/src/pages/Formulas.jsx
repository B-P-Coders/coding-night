import React from 'react'
import * as styles from '../styles/formulas.module.css'
import Layout from '../components/Layout'

const math = [
    ' n! = 1 · 2 · 3 · ... · n',
    'sin(α + β) = sinαcosβ + cosαsinβ',
    'Pn = n!',
    'P=1/2ah',
    'L = 2πr',
    'L = 2πr',
    'V = Pp · H',
    'sin(270° + α) = -cosα',
    'a3 - b3 = (a - b)(a2 + ab + b2)',
]

const physics = [
    'Fg = m • g',
    'ρ = m/V',
    'p = Fn/S',
    'p = ρ • g • h',
    'Fw = ρc • g • Vc',
    'Vch = Δxm/ Δtm',
    'a = ΔV/Δt',
    'V = a • t',
    'a = F/m',
];

const chemistry = [
  'cm=n/Vr</div',
  'cm=(cp⋅dr)(100%⋅M)',
  'd=m/v</div>',
  'pH + pOH = 14</div>',
  'pV=nRT</div>'
];

export default function Formulas() {
    return (
        <Layout>
            <div className={styles.main}>
                <div className={styles.math}>
                    <p className={styles.paragraph}>Math</p>
                    {math.map(value => <div className={styles.formula}>{value}</div>)}
                </div>
                <div className={styles.physics}>
                <p className={styles.paragraph}>Physics</p>
                {physics.map(value => <div className={styles.formula}>{value}</div>)}
                </div>
                <div className={styles.chemistry}>
                    <p className={styles.paragraph}>Chemistry</p>
                    {chemistry.map(value => <div className={styles.formula}>{value}</div>)}

                </div>
            </div>
        </Layout>
    )
}
