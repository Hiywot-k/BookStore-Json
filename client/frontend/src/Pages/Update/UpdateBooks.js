import React from 'react'
import UpdateCSS from './UpdateBook.module.css'

function UpdateBooks() {
  return (
    <div className={UpdateCSS.bgc}>
      <div className={UpdateCSS.wrapper}>
      <h1 className={UpdateCSS.title}>Update Book</h1>
      <form action="http://localhost:2022/user/update" method="POST">
       <h3>Choose what to edit</h3>
      <select name="editOptions" id="editOptionsId">
        <option value="author_name">Author Name</option>
        <option value="book_Title">Book Title</option>
        <option value="book_Genre">Book Genre</option>
        <option value="published_year">Year oF Publication</option>
      </select><br/>
      <h3>Insert the previous value</h3>
          <input type="text" name="toBeUpdate" />
      <h3>Insert the value for updating</h3>
          <input type="text" name="updatedInput" />
      <button type="submit">Update</button>
      <br />
      <br />
      <br />
      <div className={UpdateCSS.back}>
      <a href="/home">Back to Home Page</a>
      </div>
      
    </form>
    </div>
    
    </div>
    
  )
}

export default UpdateBooks