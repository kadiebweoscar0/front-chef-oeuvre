import { RouteGuard } from '../component/routeGuard'
import Timeline from '../component/timeline/timeline'

export default function Home() {
  return (
    <div className=' border w-[70%] m-auto drop-shadow-2xl h-[100vh] rounded-2xl'>
      <RouteGuard>
       <Timeline />
      </RouteGuard>
    </div>
  )
} 
