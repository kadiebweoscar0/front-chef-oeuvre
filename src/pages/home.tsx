import Skeleton from 'react-loading-skeleton'
import Timeline from '../component/timeline/timeline'

export default function Home() {
  return (
    <div className=''>
       { <Timeline /> || <Skeleton count={7} />}
    </div>
  )
} 
