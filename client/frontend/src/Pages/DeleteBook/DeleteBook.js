import React from 'react'
import DeleteCSS from './DeleteBook.module.css'
function DeleteBook() {
  return (
    <div className={DeleteCSS.bgc}>
      <div className={DeleteCSS.wrapper}>
      <h1 className={DeleteCSS.title}>Delete Book</h1>
    <form action="http://localhost:2022/user/remove" method='POST'>
    <h3>please insert the book title to be deleted</h3>
    <input type="text" name="titleToDelete" id="" />
    <button type="submit">Delete</button>
    <br />
    <br />
    <div className={DeleteCSS.back}>
        <a href="/home">Back to Home Page</a>
    </div>
    </form>
    
    </div>
    </div>
    
    
  )
}

export default DeleteBook