import ButtonFabric from "../../ui/Button/ButtonFabric"
import PageTitle from "../../ui/PageTitle/PageTitle"
import TextInput from "../../ui/TextInput/TextInput"
import Member from "./Member/Member"
import styles from "./Users.module.scss"

const Users = () => {
  return (
    <div className={styles.users}>
      <PageTitle></PageTitle>
      <TextInput></TextInput>
      <ButtonFabric type={"primary"} onClick={() => console.log("click")}>
        Ajouter un utilisateur
      </ButtonFabric>
      <div className={styles.users__members}>
        <Member></Member>
      </div>
    </div>
  )
}

export default Users
