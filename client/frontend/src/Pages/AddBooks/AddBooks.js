import React from 'react'
import AddBooksCSS from './AddBooks.module.css'
function AddBook() {
  return (
    <div className={AddBooksCSS.bgc} >
       <div className={AddBooksCSS.wrapper} >
      <h1 className={AddBooksCSS .title}>Add New Book</h1>
       <form action="http://localhost:2002/user/insert" method="POST">
    <label htmlFor="authorName">Author Name</label>
    <br />
    <input type="text" name='author_name' id='authorName' />
    <br />
    <br />
    <br />
    <label htmlFor="BookTitle">Book Title</label>
    <br />
    <input type="text" id='BookTitle' name='book_Title'/>
    <br />
    <br />
    <br />
    <label htmlFor="bookName">Book Genre</label>
    <br />
    <input type="text" id='bookName' name='book_Genre' />
    <br />
    <br />
    <br />
    <label htmlFor="publication">Year oF Publication</label>
    <br />
    <input type="text" id='publication' name='published_year' />
    <br />
    <br />
    <button type='submit'>submit</button>
    <br />
    <br />
    <br />
    <div className={AddBooksCSS .back}>
    <a href="/home">Back to Home Page</a>
    </div>
    
  </form>
    </div>

    </div>
   
   
  )
}

export default AddBook