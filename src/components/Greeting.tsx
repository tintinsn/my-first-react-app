import { useState } from 'react'
import classes from './Greeting.module.css'

interface IGreetingProps {
  name: string
  isLoggin: boolean
}

const Greeting = ({ name, isLoggin }: IGreetingProps) => {
  const [greetingMsg, setGreetingMsg] = useState<string>('Welcome!')
  const handleClick = () => {
    setGreetingMsg('hello')
  }

  return (
    <>
      <div className={classes.card}>
        <h3>{greetingMsg}</h3>
        <p>{isLoggin ? name : 'Unknown'}</p>
      </div>
      <button onClick={handleClick}>click me</button>
    </>
  )
}

export default Greeting
