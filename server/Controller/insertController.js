import myConnections from "../server.js";

let newBook = (req, res) => {  
  const {author_name,published_year,book_Title,book_Genre} = req.body
    let sqlAddToProducts = 
    `INSERT INTO Books (author_name,book_Title,book_genre,published_year) VALUES ('${author_name}','${book_Title}','${book_Genre}','${published_year}')`;
    
    myConnections.query(sqlAddToProducts, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
   
    });
  
    res.end('new book added')
  
  }

  export default newBook