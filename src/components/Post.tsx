import { PostDTO } from '../types/dto'
import classes from './Post.module.css'

interface IPostProps {
  post: PostDTO
}

const Post = ({ post }: IPostProps) => {
  const handleClick = (id: number) => {
    alert(`clicked ${id}`)
  }
  return (
    <div onClick={() => handleClick(post.id)} className={classes.post}>
      <p>id : {post.id}</p>
      <p>userId : {post.userId}</p>
      <p>title : {post.title}</p>
      <p>body : {post.body}</p>
    </div>
  )
}

export default Post
