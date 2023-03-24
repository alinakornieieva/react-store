import ContentLoader from 'react-content-loader'
import './Skeleton.scss'

const Skeleton = () => {
  return <div className='Skeleton'>
        <ContentLoader viewBox="0 0 500 280" height={280} width={500}>
        <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
        <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
    </ContentLoader>
  </div>
}

export default Skeleton