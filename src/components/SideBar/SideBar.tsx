import Section from "./Section"
import styles from "./SideBar.module.scss"
import logo from "../../assets/images/sidebar_logo.svg"
import bgImage from "../../assets/images/sidebar_bg_image.svg"

const SideBar = () => (
  <aside className={styles.sidebar}>
    <div className={styles.sidebar__container__logo}>
      <img src={logo} alt="logo" className={styles.sidebar__logo} />
    </div>

    <img
      src={bgImage}
      alt="sidebar_bg_image"
      className={styles.sidebar__backImage}
    />

    <nav className={styles.sidebar__navigation}>
      <Section title="Configuration"></Section>
      <Section title="Dossier"></Section>
      <Section title="Projet"></Section>
      <Section title="Direction Technique"></Section>
      <Section title="Protection"></Section>
    </nav>
  </aside>
)

export default SideBar
