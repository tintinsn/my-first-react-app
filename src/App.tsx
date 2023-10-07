import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'
import { PostDTO } from './types/dto'
import Post from './components/Post'
import { FormEvent, useState, useEffect } from 'react'
import axios from 'axios'
import { CreatePostDTO } from './types/dto'

function App() {
  const [posts, setPosts] = useState<PostDTO[] | null>(null)
  const [newTitle, setNewTitle] = useState<string>('')
  const [newBody, setNewBody] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        // const data = await res.json()

        // if (!res.ok) {
        //   throw new Error('error')
        // }

        // * Axios
        const res = await axios<PostDTO[]>('https://jsonplaceholder.typicode.com/posts')

        setPosts(res.data)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!posts) return
    // const currentPost = [...posts]
    // currentPost.push({
    //   id: Math.floor(Math.random() * 1000),
    //   userId: Math.floor(Math.random() * 1000),
    //   title: newTitle,
    //   body: newBody,
    // })

    const newPostBogdy: CreatePostDTO = {
      userId: Math.floor(Math.random() * 1000),
      id: Math.floor(Math.random() * 1000),
      title: newTitle,
      body: newBody,
    }
    setDisableSubmit(true)
    try {
      await axios
        .post('https://jsonplaceholder.typicode.com/posts', newPostBogdy, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          const currentPost = [...posts]
          currentPost.push(response.data)
          setPosts(currentPost)
        })
    } catch (err) {
      console.log(err)
    } finally {
      setDisableSubmit(false)
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
