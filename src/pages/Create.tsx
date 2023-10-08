import { FormEvent, useState } from 'react'
import usePosts from '../hook/usePosts'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [newTitle, setNewTitle] = useState<string>('')
  const [newBody, setNewBody] = useState<string>('')
  const { disableSubmit, createPost } = usePosts()
  const navigate = useNavigate()
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await createPost(newTitle, newBody)

      setNewTitle('')
      setNewBody('')

      navigate('/')
    } catch (err) {
      console.log(err)
    }

    // setPosts(currentPost)
    setNewTitle('')
    setNewBody('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
        <label>Body</label>
        <input type="text" value={newBody} onChange={(e) => setNewBody(e.target.value)} required />
        <button type="submit" disabled={disableSubmit}>
          submit
        </button>
      </form>
    </div>
  )
}

export default Create
