import { FormEvent, useState } from 'react'
import usePosts from '../hook/usePosts'
import Post from '../components/Post'
import classes from './Home.module.css'

const Home = () => {
  const [newTitle, setNewTitle] = useState<string>('')
  const [newBody, setNewBody] = useState<string>('')
  const { posts, isLoading, disableSubmit, createPost } = usePosts()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await createPost(newTitle, newBody)

      setNewTitle('')
      setNewBody('')
    } catch (err) {
      console.log(err)
    }

    // setPosts(currentPost)
    setNewTitle('')
    setNewBody('')
  }
  if (isLoading) return <h1>LOADING...</h1>
  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
        <label>Body</label>
        <input type="text" value={newBody} onChange={(e) => setNewBody(e.target.value)} required />
        <button type="submit" disabled={disableSubmit}>
          submit
        </button>
      </form>

      <div className={classes.feedContainer}>
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
      </div>
    </div>
  )
}

export default Home
