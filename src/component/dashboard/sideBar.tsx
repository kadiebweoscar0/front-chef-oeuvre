import { NavLink } from "react-router-dom";
import "./dashboard.css"

export default function SideBar() {
  return (
    <aside className=" text-white fixed flex justify-center bg-[#4361EE] w-[23.375rem] h-[100vh] ">
        <nav className=" text-white flex flex-col gap- w-[23rem] pt-10">
            <NavLink className="w-[23rem] h-[3rem] py-3 pl-4 rounded-md" to={"#"} >Dashbord</NavLink>
            <NavLink className="w-[23rem] h-[3rem] py-3 pl-4" to={"/ajout"} >Ajouter un criminel</NavLink>
            <NavLink className="w-[23rem] h-[3rem] py-3 pl-4" to={"/cree"} >Créer un alert</NavLink>
            <NavLink className="w-[23rem] h-[3rem] py-3 pl-4" to={"/profil"} >Profil</NavLink>
        </nav>
    </aside>
  )
}
