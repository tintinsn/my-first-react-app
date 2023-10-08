import { useEffect, useState } from 'react'
import { CreatePostDTO, PostDTO } from '../types/dto'
import axios from 'axios'

const usePosts = () => {
  const [posts, setPosts] = useState<PostDTO[] | null>(null)
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

  const createPost = async (newTitle: string, newBody: string) => {
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
          console.log(response.data)
          setPosts(currentPost)
        })
    } catch (err) {
      throw new Error('Cannot create post')
    } finally {
      setDisableSubmit(false)
    }
  }
  return { posts, isLoading, disableSubmit, createPost }
}

export default usePosts
