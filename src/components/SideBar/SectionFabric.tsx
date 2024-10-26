import { useNavigate } from "react-router-dom"
import ButtonFabric from "../../ui/Button/ButtonFabric"

const Configuration = [
  {
    title: "Utilisateurs",
    url: "Users"
  },

  {
    title: "Base",
    url: "Base"
  },
  {
    title: "Contrôle",
    url: "Control"
  }
]

const SectionFabric = ({ title }: SectionProps) => {
  const navigate = useNavigate()

  switch (title) {
    case "Configuration":
      return Configuration.map((page) => (
        <li>
          <ButtonFabric
            type={"sidebar-page-button"}
            onClick={() => navigate(`/${page.url}`)}
          >
            {page.title}
          </ButtonFabric>
        </li>
      ))

    case "Dossier":
      return (
        <li>
          <ButtonFabric
            type={"sidebar-page-button"}
            onClick={() => navigate(`/${title}`)}
          >
            {title}
          </ButtonFabric>
        </li>
      )

    case "Projet":
      return (
        <li>
          <ButtonFabric
            type={"sidebar-page-button"}
            onClick={() => navigate(`/${title}`)}
          >
            {title}
          </ButtonFabric>
        </li>
      )

    case "Direction Technique":
      return (
        <li>
          <ButtonFabric
            type={"sidebar-page-button"}
            onClick={() => navigate(`/${title}`)}
          >
            {title}
          </ButtonFabric>
        </li>
      )
    case "Protection":
      return (
        <li>
          <ButtonFabric
            type={"sidebar-page-button"}
            onClick={() => navigate(`/${title}`)}
          >
            {title}
          </ButtonFabric>
        </li>
      )
  }
}

export default SectionFabric
