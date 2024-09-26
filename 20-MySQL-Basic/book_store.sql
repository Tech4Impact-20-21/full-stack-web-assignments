-- Show database --
SHOW DATABASES;

-- Create database (bookstore) --
CREATE DATABASE bookstore;

-- Use database (bookstore)--
USE bookstore;

-- Show all tables in bookstore database --
SHOW TABLES;

-- Create table (books) --
CREATE TABLE books(
    id INT AUTO_INCREMENT PRIMARY KEY,
    author1 VARCHAR(100) NOT NULL,
    author2 VARCHAR(100),
    author3 VARCHAR(100),
    title VARCHAR(100),
    description TEXT,
    place_sell CHAR(3),
    stock INT DEFAULT 0,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Update table (books) --
ALTER TABLE books
    ADD price INT DEFAULT 0,
    ADD status ENUM('available', 'out of stock', 'limited'),
    DROP COLUMN place_sell;

-- Insert data (books) --
INSERT INTO books
    VALUES 
        (1, 'Hector', 'Jean', 'Ethel', 'Happy Love Story', 'Romance', 5, CURRENT_TIMESTAMP, 125000, 'available'),
        (2, 'Darnell', 'Shawna', 'Cornelius', 'Imagination Life', 'Fantasy', 3, CURRENT_TIMESTAMP, 150000, 'limited'),
        (3, 'Lorenzo', 'Caleb', 'Lynn', 'Dark Mysterious Life', 'Thriller', 0, CURRENT_TIMESTAMP, 175000, 'out of stock');


SELECT * FROM books;

SELECT id AS ID, author1 AS A1, author2 AS A2, author3 AS A3 FROM books;

SELECT * 
    FROM books
    WHERE id = 1;

SELECT *
    FROM books
    WHERE id = 2 AND status = "limited";

SELECT *
    FROM books
    WHERE title = "Happy Love Story" OR author1 = "Lorenzo";

SELECT *
    FROM books
    WHERE status NOT IN ('available', 'out of stock');

SELECT *
    FROM books
    ORDER BY id ASC;

SELECT *
    FROM books
    LIMIT 2;

UPDATE books
    SET author1 = 'Hacker', price = 135000
    WHERE id = 1;

DELETE FROM books 
    WHERE id = 3;