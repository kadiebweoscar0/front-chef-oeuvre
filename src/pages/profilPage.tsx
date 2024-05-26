import Profil from "../component/profil/profil";
import { RouteGuard } from "../component/routeGuard";

export default function ProfilPage() {
  return (
    <>
    <RouteGuard>
    ProfilPage
    <Profil/>
    </RouteGuard>
    </>
  )
}
