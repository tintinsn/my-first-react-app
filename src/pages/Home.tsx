import usePosts from '../hook/usePosts'
import Post from '../components/Post'
import classes from './Home.module.css'

const Home = () => {
  const { posts, isLoading } = usePosts()

  if (isLoading) return <h1>LOADING...</h1>
  return (
    <div className={classes.container}>
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
