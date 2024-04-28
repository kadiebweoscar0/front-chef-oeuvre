import { Outlet } from "react-router-dom";
import SideBar from "./sideBar";

export default function Dashboard() {
  return (
    <div className=" flex h-[100vh] max-w-full">
        <SideBar />
        <Outlet />
    </div>
  )
}
