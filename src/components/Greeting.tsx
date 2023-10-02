import classes from './Greeting.module.css'

interface IGreetingProps {
  name: string
  greetingMsg: string
  isLoggin: boolean
}

const Greeting = ({ name, greetingMsg, isLoggin }: IGreetingProps) => {
  return (
    <div className={classes.card}>
      <h3>{greetingMsg}</h3>
      <p>{isLoggin ? name : 'Unknown'}</p>
    </div>
  )
}

export default Greeting
