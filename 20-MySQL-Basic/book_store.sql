-- Show databases --
SHOW DATABASES;

-- Create bookstore databases --
CREATE DATABASE bookstore;

-- Use bookstore database --
USE bookstore;

-- Show all tables in bookstore database --
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
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Update books table --
ALTER TABLE books
    ADD price INT DEFAULT 0,
    ADD status ENUM('available', 'out of stock', 'limited'),
    DROP COLUMN place_sell;

-- Insert data --
INSERT INTO books
    VALUES 
        (1, 'Thomas', 'Billy', 'Rony', 'Sunshine', 'A Sci-Fi Novel', 10, CURRENT_TIMESTAMP, 100000, 'available'),
        (2, 'Caroline', 'Elena', 'Bonnie', 'Vampire Diaries', 'A Romantic Novel', 3, CURRENT_TIMESTAMP, 150000, 'limited'),
        (3, 'Tokyo', 'Lisbon', 'Helsinki', 'Money Heist', 'A Heist Novel', 10, CURRENT_TIMESTAMP, 120000, 'available');

-- Query data --
SELECT * FROM books;

SELECT id AS ID, author1 AS A1, author2 AS A2, author3 AS A3 FROM books;

SELECT * 
    FROM books
    WHERE id = 1;

SELECT *
    FROM books
    WHERE price > 100000 AND status = "available";

SELECT *
    FROM books
    WHERE author1 = "Thomas" OR author2 = "Elena";

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
    SET author1 = 'Jeremy', price = 130000
    WHERE id = 2;

DELETE FROM books 
    WHERE id = 3;