import { useState } from 'react'
import classes from './counter.module.scss'

export function Counter() {
  const [count, setcount] = useState(0)

  const increment = (): null => {
    setcount(count + 1)
    return null
  }
  return (
    <div className={classes.button}>
      <h1>{count}</h1>
      <button onClick={increment}>counter</button>
    </div>
  )
}

export default Counter
