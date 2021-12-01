SHOW databases;
create database bookstore;
USE bookstore;

-- membuat table books
create table books (
  id int AUTO_INCREMENT PRIMARY KEY,
  author1 varchar(100) NOT NULL,
  author2 varchar(100),
  author3 varchar(100),
  title varchar(100),
  description text,
  place_sell char(3),
  stock int DEFAULT 0,
  creation_date date DEFAULT CURRENT_TIMESTAMP
);

-- menambahkan kolom baru
ALTER TABLE books ADD COLUMN price int DEFAULT 0;
ALTER TABLE books add COLUMN status ENUM('available', 'out of stock', 'limited');

-- menghapus kolom place_sell
ALTER TABLE books DROP COLUMN place_sell;

-- insert 3 data
INSERT INTO books VALUES ('', 'Cynthia Febrina', '', '', 'Bumi', 'Empat Jiwa, Meniti Satu Nadi', 2, CURRENT_TIMESTAMP, 50000, 'available');
INSERT INTO books VALUES ('', 'Leia S Chudori', '', '', 'Laut Bercerita', 'Laut Bercerita, novel terbaru Leila S. Chudori, bertutur tentang kisah keluarga yang kehilangan, sekumpulan sahabat yang merasakan kekosongan di dada, sekelompok orang yang gemar menyiksa dan lancar berkhianat, sejumlah keluarga yang mencari kejelasan makam anaknya, dan tentang cinta yang tak akan luntur.', 3, CURRENT_TIMESTAMP, 80000, 'available');
INSERT INTO books VALUES ('', 'Ichiro Kishimi', 'Fumitake Koga', '', 'Berani Tidak Disukai', 'Buku yang kaya kebijaksanaan ini akan memandu Anda memahami konsep memaafkan diri sendiri, mencintai diri, dan menyingkirkan hal-hal yang tidak penting dari pikiran. Cara pikir yang membebaskan ini memungkinkan Anda membangun keberanian untuk mengubah dan mengabaikan batasan yang mungkin Anda berlakukan bagi diri Anda.', 3, CURRENT_TIMESTAMP, 98000, 'available');

-- select semua row
SELECT * FROM books;

-- select dengan alias
SELECT id AS ID, author1 AS A1, author2 AS A2, author3 AS A3 FROM books;

-- select dengan id tertentu
SELECT author1, author2, author3, title, description FROM books WHERE id = 3;

-- select dengan operator AND
SELECT * FROM books WHERE status = 'available' AND price >= 80000;

-- select dengan operator OR
SELECT title, description, price FROM books WHERE status = 'available' OR stock = 3;

-- select dengan operator NOT
SELECT title, description, price FROM books WHERE NOT status = 'available';

-- select dengan urutan ascending berdasarkan id
SELECT * FROM books ORDER BY id ASC;

-- select dengan limit 2 row
SELECT * FROM books ORDER BY id DESC LIMIT 2;

-- update author1 dan price
UPDATE books SET author1 = 'Rosa Amalia', price = 75000 WHERE id = 1;

-- delete
DELETE FROM books WHERE id = 1;