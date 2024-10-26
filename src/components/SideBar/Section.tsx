import { useState } from "react"
import ButtonFabric from "../../ui/Button/ButtonFabric"
import styles from "./SideBar.module.scss"
import configuration from "../../assets/images/configuration.svg"
import roll_down from "../../assets/images/roll_down.svg"
import SectionFabric from "./SectionFabric"

const Section = ({ title }: SectionProps) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <ButtonFabric
        type={`${show ? "sideBar-section-button" : "sideBar-section-button-hidden"}`}
        onClick={() => setShow(!show)}
      >
        <div className={styles.sidebar__topic}>
          <img src={configuration} alt="configuration" />
          {title}

          <img
            src={roll_down}
            alt="roll_down"
            className={
              show
                ? styles.sideBar__downArrow
                : styles.sideBar__downArrow__reverse
            }
          />
        </div>
      </ButtonFabric>

      <ul>{show && <SectionFabric title={title}></SectionFabric>}</ul>
    </>
  )
}

export default Section
