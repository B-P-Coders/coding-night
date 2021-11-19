import React from "react";
import * as styles from "../styles/settings.module.css" 
export default function Settings{
return(
<p className={styles.text}> Choose Theme: </p>
<div className={styles.default}>default</div>
<div className={styles.falcon}>falcon</div>
<div className={styles.luna}>luna</div>
<div className={styles.suna}>suna</div>


)
}