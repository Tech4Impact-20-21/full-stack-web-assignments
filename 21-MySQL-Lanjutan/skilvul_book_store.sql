CREATE DATABASE skilvulbookstore;
USE skilvulbookstore;
CREATE TABLE penerbit (
    id INT(10) NOT NULL AUTO_INCREMENT  PRIMARY KEY,
    nama VARCHAR(50),
    kota VARCHAR(50)
    );
CREATE TABLE penulis (
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50),
    kota VARCHAR(50)
    );
CREATE TABLE buku (
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ISBN VARCHAR(50),
    judul VARCHAR(50),
    penulis VARCHAR(50),
    penerbit INT(10),
    harga INT(10),
    stock INT(10),
    CONSTRAINT fk_buku_penulis FOREIGN KEY(penulis) REFERENCES penulis(id),
    CONSTRAINT fk_buku_penerbit FOREIGN KEY(penerbit) REFERENCES penulis(id)
    );
SELECT * FROM buku INNER JOIN penerbit ON buku.penerbit = penerbit.id;
SELECT * FROM buku LEFT JOIN penerbit ON buku.penerbit = penerbit.id;
SELECT * FROM buku RIGHT JOIN penerbit ON buku.penerbit = penerbit.id;
SELECT MAX(harga) FROM buku WHERE stock<10;
SELECT MIN(harga) FROM buku;
SELECT COUNT(id) FROM buku WHERE harga<100000;