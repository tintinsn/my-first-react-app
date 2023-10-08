import { useParams } from 'react-router-dom'

const PostDetail = () => {
  const { id } = useParams()
  return <div>Post ID: {id}</div>
}

export default PostDetail
