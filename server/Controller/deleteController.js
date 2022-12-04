import myConnections from "../server.js";


let deleteBook = (req, res) => {
  const {titleToDelete} = req.body
    myConnections.query(`DELETE from Books where book_Title='${titleToDelete}'`, function (err, result) {
          if (err) {
            console.log(err)
          }
        });
        res.send('Deleted successfully')
      
      }

export default deleteBook;