import React from "react"
import styles from "./Member.module.scss"
import ButtonFabric from "../../../ui/Button/ButtonFabric"

const Member = () => {
  function suspendre() {}
  function supprimer() {}
  return (
    <div className={styles.member}>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <div></div>
      <ButtonFabric type={"actions-light"} onClick={() => suspendre()}>
        Suspendre
      </ButtonFabric>
      <ButtonFabric type={"actions-red"} onClick={() => supprimer()}>
        Supprimer
      </ButtonFabric>
    </div>
  )
}

export default Member
