import React from 'react'
import style from "../../styles/temp.module.css"
const hello = () => {
  return (
    // for single class
    // <div className={style.hello}> 
    // for multiple classes
    <div className={`${style.hello} ${style.xx}`}> 
      <h1 style={{color:"green"}}>This is my first next js page</h1>
      hello world
    </div>
  )
}

export default hello
