import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'
import Post from './components/Post'
import { FormEvent, useState } from 'react'
import usePosts from './hook/usePosts'

function App() {
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
    <div className="App">
      <Navbar />
      <Greeting name="Thailand!" isLoggin={true} />

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
        <label>Body</label>
        <input type="text" value={newBody} onChange={(e) => setNewBody(e.target.value)} required />
        <button type="submit" disabled={disableSubmit}>
          submit
        </button>
      </form>

      <div className="feed-container">
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
      </div>
    </div>
  )
}
export default App
