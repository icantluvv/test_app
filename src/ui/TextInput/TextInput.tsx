import React from "react"
import styles from "./TextInput.module.scss"

import lupa from "../../assets/images/lupa.svg"

const TextInput = () => {
  return (
    <div className={styles.input__container}>
      <input
        type="text"
        className={styles.input__field}
        placeholder="Vous cherchez quel utilisateur ..."
      />
      <img src={lupa} alt="lupa" className={styles.input__image}/>
    </div>
  )
}

export default TextInput
