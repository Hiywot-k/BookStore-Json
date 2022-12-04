import React from 'react'
import HomeCSS from'./Home.module.css'

function Home() {
  return (
    <section>
      <div className={HomeCSS.overlay}>
      <div className={HomeCSS.links}>
      <nav className={HomeCSS.navigation}>
      <a href="/BookCollection">Show Book Collection</a>
      <a href="/addBook">Add Books</a>
      <a href="/updateBook">Update Book</a>
      <a href="/deleteBook">Delete Book</a>
      <br />
      </nav>
    </div>
    </div>
    </section>
    
    
  )
}

export default Home