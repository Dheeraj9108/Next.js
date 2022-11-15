import React from 'react'
import style from "../../styles/temp.module.css"
import Image from 'next/image'
import Head from 'next/head'
const hello = () => {
  return (
    // for single class
    // <div className={style.hello}> 
    // for multiple classes

    <div className={`${style.hello} ${style.xx}`} style={{ textAlign: 'center' }}>
      <Head>
        <meta name='description' content='Next js page'/>
        <meta name='keywords' content='HTML, CSS, JavaScript, Next.js'/>
        <meta name='author' content='Dheeraj'/>
        <title>Home page</title>
      </Head>
      {/* <h1 style={{color:"green"}}>This is my first next js page</h1> */}
      <h1 >This is my first next js page</h1>
      <p className='intro'>Intro page</p>
      <style jsx>
        {`
          h1{
            color:red;
          }
          .intro{
            color:blue
          }
        `}
      </style>
      hello world
      <Image src="/maze.png" width='500' height='300' alt='maze.png'></Image>
      {/* <Image src="/maze.png" layout='fill'></Image> */}
    </div>
  )
}

export default hello
