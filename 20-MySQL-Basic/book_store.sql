SHOW DATABASES;
CREATE DATABASE bookstore;
USE bookstore;
SHOW TABLES;
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    author1 VARCHAR(100) NOT NULL,
    author2 VARCHAR(100),
    author3 VARCHAR(100),
    title  VARCHAR(100),
    description TEXT;
    place_sell  CHAR(3),
    stock INT DEFAULT(0),
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
ALTER TABLE books 
        ADD COLUMN ( 
            price INT DEFAULT(0),
            status ENUM('available', 'out of stock', 'limited')
        ),
        DROP COLUMN place_sell;
INSERT INTO books
    (author1, author2, author3, title, description, stock, creation_date, price, status)
VALUES  ('brian', 'doni', 'tio', 'buku 1', 'ini buku satu', 100, '2021-03-23 11:11:11', 10000, 'available'),
        ('juan', 'dev', 'nara', 'buku 2', 'ini buku dua', 50, '2021-04-23 11:11:11', 30000, 'available'),
        ('mahen', 'yudha', 'tian', 'buku 3', 'ini buku tiga', 70, '2021-08-13 11:11:11', 70000, 'available');
SELECT * FROM books;
SELECT id AS ID, author1 AS AS1, author2 AS AS2, author3 AS AS3 FROM books;
SELECT * FROM books WHERE id = 2;
SELECT * FROM books WHERE id = 1 AND author1 = 'brian';
SELECT * FROM books WHERE id = 2 OR author2 = 'mahen';
SELECT * FROM books WHERE NOT id = 1;
SELECT * FROM books ORDER BY id ASC;
SELECT * FROM books LIMIT 2;
UPDATE books SET author1='ren', price=100000 WHERE id=1;
DELETE * FROM bookstore WHERE id = 3;