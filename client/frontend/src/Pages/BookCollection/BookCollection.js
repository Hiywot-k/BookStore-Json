import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BookCollectionCSS from './BookCollection.module.css'

export default function BookCollection() {
    const [query, setQuery] = useState([]);
    useEffect(()=>{
      fetch("/book.json")
      .then((res) => {
          return res.json();})
      .then((books)=>{
        setQuery(()=>books.data);
        console.log(setQuery)
      },[])

    })
      
    // let url = "http://localhost:2022/user/getData";
    // const dataFromDatabase = async ()=>{
    //    try{
    //      const response = await axios.get("/book.json")
    //      let converted = JSON.parse(JSON.stringify(response.data))
    //     setQuery(converted)
    //    }catch(err){
    //       console.log(err)
    //    }
    // }
    // useEffect(() => {
    //  dataFromDatabase()   
    // }, [])

  return (
    <div className={BookCollectionCSS.bgc}>
       <div className={BookCollectionCSS.wrapper}>
        <h1 className={BookCollectionCSS.title}>Book Collection</h1>
        <br/>

        <table className={BookCollectionCSS.twrap}>
          <thead>
          <tr>
            <th>ID</th>
            <th>Author Name</th>
            <th>Book Title</th>
            <th>Book Genre</th>
            <th>Published Year</th>
          </tr>
          </thead>
          
          <tbody>
          {query.map((data,i)=>{
              let display = (
            <tr>
              <td>{data.book_Id}</td>
              <td>{data.author_name}</td>
              <td>{data.book_Title}</td>
              <td>{data.book_genre}</td>
              <td>{data.published_year}</td>
            </tr>
              )
              return display

            })}
          </tbody>
          
        </table>
        <br/>
        
        <div className={BookCollectionCSS.back}>
            <a href="/home">Back to Home Page</a>
        </div>
         
    </div>

    </div>
 )
 }


