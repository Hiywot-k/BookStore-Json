let createBooks = `CREATE TABLE if not exists Books(
    book_Id int auto_increment,
    author_name varchar(255) not null,
    book_Title varchar(255) not null,
    book_genre varchar(255) not null,
    published_year varchar(255) not null,
    PRIMARY KEY (book_Id)
    )`
 export default createBooks