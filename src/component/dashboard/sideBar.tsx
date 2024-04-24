import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <aside>
        sideBar
        <nav>
            <NavLink to={"/#"} >Dashbord</NavLink>
            <NavLink to={"/#"} >Ajouter un criminel</NavLink>
            <NavLink to={"/#"} >Créer un alert</NavLink>
            <NavLink to={"/#"} >Profil</NavLink>
        </nav>
    </aside>
  )
}
