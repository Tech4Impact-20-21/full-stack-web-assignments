-- Create database (skilvulbookstore) --
CREATE DATABASE skilvulbookstore;

-- Use database (skilvulbookstore) -- 
USE skilvulbookstore;

-- Create table (penerbit) --
CREATE TABLE penerbit(
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50),
    kota VARCHAR(50)
);

-- Create table (penulis) --
CREATE TABLE penulis(
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50),
    kota VARCHAR(50)
);

-- Create table (buku) --
CREATE TABLE buku(
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ISBN VARCHAR(50),
    judul VARCHAR(50),
    penulis INT(10),
    penerbit INT(10),
    harga INT(10),
    stock INT(10),
    CONSTRAINT FK_penulis_id FOREIGN KEY(penulis) REFERENCES penulis(id),
    CONSTRAINT FK_penerbit_id FOREIGN KEY(penerbit) REFERENCES penerbit(id)
);

-- Insert data (penerbit)--
INSERT INTO penerbit
    VALUES
        (1, 'ABC', 'Jakarta'),
        (2, 'XYZ', 'Suarabaya');
 
 -- Insert data (penulis)--
INSERT INTO penulis
    VALUES 
        (1, 'Albert', 'Kalimantan'),
        (2, 'Alvin', 'Medan');

-- Insert data (buku)--
INSERT INTO buku
    VALUES
        (1, '11223344', 'A adalah a', 1, 2, 75000, 7),
        (2, '99887766', 'B adalah b', 2, 2, 100000, 9);


SELECT ISBN, judul, penerbit.nama, stock FROM buku
    INNER JOIN penerbit
    ON buku.penerbit = penerbit.id;

SELECT ISBN, judul, penerbit.nama, harga, stock FROM buku
    LEFT JOIN penerbit
    ON buku.penerbit = penerbit.id;

SELECT ISBN, judul, penerbit.nama, harga, stock FROM buku
    RIGHT JOIN penerbit
    ON buku.penerbit = penerbit.id;

SELECT MAX(harga) FROM buku
    WHERE stock < 10;

SELECT MIN(harga) FROM buku;

SELECT COUNT(id) FROM buku 
    WHERE harga < 100000;