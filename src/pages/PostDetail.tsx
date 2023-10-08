import { useParams } from 'react-router-dom'
import usePost from '../hook/usePost'

const PostDetail = () => {
  const { id } = useParams()
  const { post, isLoading, error } = usePost(id || '1')

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <p>{error}</p>
  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>Post by user id: {post.userId}</p>
          <p>{post.body}</p>
        </>
      )}
    </div>
  )
}

export default PostDetail
