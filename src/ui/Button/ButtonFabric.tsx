import React from "react"
import styles from "./Button.module.scss"

interface ButtonFabricProps {
  type: string
  onClick: () => void
  disabled?: boolean
  children: React.ReactNode
}

const ButtonFabric = ({ type, onClick, children }: ButtonFabricProps) => {
  return (
    <button
      className={`${styles.button} ${styles[`button--${type}`]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ButtonFabric
