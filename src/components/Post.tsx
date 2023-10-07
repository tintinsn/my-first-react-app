import { useState } from 'react'
import { PostDTO } from '../types/dto'
import classes from './Post.module.css'

interface IPostProps {
  post: PostDTO
}

const Post = ({ post }: IPostProps) => {
  const handleClick = (id: number) => {
    console.log(`clicked ${id}`)
  }

  const [show, setShow] = useState<boolean>(false)

  const handleShowMore = () => {
    setShow(show !== true ? true : false)
  }
  return (
    <>
      <div onClick={() => handleClick(post.id)} className={classes.post}>
        <p>id : {post.id}</p>
        <p>userId : {post.userId}</p>
        <p>title : {post.title}</p>
        <p>body : {post.body}</p>
        <p>{show && 'more post infomation'}</p>
        <button onClick={handleShowMore}>{show ? 'Show Less' : 'Show More'}</button>
      </div>
    </>
  )
}

export default Post
