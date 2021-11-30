-- Show Database --
SHOW DATABASES;

-- Create Database bookstore --
CREATE DATABASE bookstore;

-- Use Database bookstore --
USE bookstore;

-- Show seluruh table yang ada pada Database bookstore --
SHOW TABLES;

-- Create books table --
    CREATE TABLE books(
        id INT PRIMARY KEY AUTO_INCREMENT,
        author1 VARCHAR(100) NOT NULL,
        author2 VARCHAR(100),
        author3 VARCHAR(100),
        title VARCHAR(100),
        description TEXT,
        place_sell CHAR(3),
        stock INT DEFAULT 0,
        creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP );

-- Updates column dari table books --
    ALTER TABLE books
        ADD price INT DEFAULT 0,
        ADD status ENUM('available', 'out of stock', 'limited'),
        DROP COLUMN place_sell;

-- Insert Data pada table books --
    INSERT INTO books(author1,author2,author3,title,description,stock,price,status) VALUES
        ("tereliye","nadya","joko","bumi","sebuah karya berjudul bumi",4,150000,"available"),
        ("pramoedya","andrea","dewi","bumi manusia", "sebuah buku bumi manusia", 2,125000, "limited"),
        ("pidi baiq", "milea", "faisal", "dilan 1990", "sebuah karya pidi baiq dilan 1990",1,78000, "limited");

-- Query --
    --SELECT semua row pada table books--
    SELECT * FROM books;

    --SELECT menggunakan ALIAS. Column id digantikan ID, author1 digantikan A1, author2 digantikan A2, author3 digantikan A3.--
    SELECT id AS ID, author1 AS A1, author2 AS A2, author3 AS A3 FROM books;

    --SELECT data menggunakan WHERE untuk id tertentu--
    SELECT * FROM books WHERE id = 3;

    --SELECT data menggunakan WHERE untuk dengan operator logical AND--
    SELECT * FROM books
        WHERE price < 100000 AND 
        status = "limited";

    --SELECT data menggunakan WHERE untuk dengan operator logical OR--
     SELECT * FROM books
        WHERE author1 = "tereliye" OR
        author2 = "joko";

    --SELECT data menggunakan WHERE untuk dengan operator logical NOT--
     SELECT *
        FROM books
        WHERE status NOT IN ('available', 'out of stock');

    --SELECT seluruh column dari table bookstore dan diurutkan secara ASC berdasarkan id--
    SELECT * FROM books
        ORDER BY id ASC;

    --SELECT seluruh column dan berikan LIMIT untuk 2 row saja--
    SELECT *
        FROM books
        LIMIT 2;


    --Pilih 1 row untuk dilakukan UPDATE pada column author1 dan price.--
    UPDATE books
        SET author1 = "ananta pramoedya", price = 250000
        WHERE id = 2;

    --Pilih 1 row untuk dilakukan DELETE--
    DELETE FROM books 
        WHERE id = 3;





