import Dashboard from "../component/dashboard/dashboard";
import { RouteGuard } from "../component/routeGuard";

export default function DashboardPage() {
  return (
    <div>
      <RouteGuard>
        <Dashboard />
      </RouteGuard>
    </div>
  )
}
