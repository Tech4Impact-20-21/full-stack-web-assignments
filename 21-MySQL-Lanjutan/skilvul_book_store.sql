--CREATE database bernama skilvulbookstore--
CREATE DATABASE skilvulbookstore;

-- Use Database skilvulbookstore --
USE skilvulbookstore;

--CREATE tabel penerbit--
CREATE TABLE penerbit(
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50),
    kota VARCHAR(50)
    );

--CREATE tabel penulis--
CREATE TABLE penulis(
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50),
    kota VARCHAR(50)
    );

--CREATE tabel buku --
 CREATE TABLE buku (
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ISBN VARCHAR(50),
    judul VARCHAR(50),
    penulis INT(10),
    penerbit INT(10),
    harga INT(10),
    stock INT(10)
    );

-- ADD foreign key penulis reference penulis.id & penerbit reference penerbit.id
 ALTER TABLE buku
    ADD CONSTRAINT fk_penulis_id
    FOREIGN KEY (penulis) REFERENCES penulis(id),
    ADD CONSTRAINT fk_penerbit_id
    FOREIGN KEY (penerbit) REFERENCES penerbit(id)
    ;

-- Insert Data --

-- INSERT Data Tabel penerbit --
 INSERT INTO penerbit(nama,kota) values
    ("PT. Buku Sejahtera", "Bandung"),
    ("PT. KREENZ BOOK INDONESIA", "Surabaya"),
    ("KOMPAS GRAMEDIA", "Jakarta"),
    ("AKU TAHU", "Bekasi");

-- INSERT Data Tabel penulis --
 INSERT INTO penulis(nama,kota) VALUES
    ("Tere Liye", "Jakarta"),
    ("Boy Chandra", "Surabaya"),
    ("Erisca Febriani", "Jakarta")
    ;

-- INSERT DATA Tabel buku -- 
INSERT INTO buku(ISBN,judul,penulis,penerbit,harga,stock) VALUES
    (110001, "Daun Yang Jatuh Tidak Pernah Membenci Angin",1,3,120000,20),
    (110002, "Patah",2,2,95000,9),
    (110003, "Dear Nathan",3,3,110000,5),
    (110004, "pulang",1,1,125000,12),
    (110005, "Rindu",1,1,75000,25);

--Query--

--INNER JOIN dari table buku terhadap table penerbit--
SELECT ISBN, Judul, penerbit.nama AS nama_penerbit, harga, stock
    FROM buku
    INNER JOIN penerbit ON buku.penerbit = penerbit.id;

--LEFT JOIN dari table buku terhadap table penerbit--
SELECT ISBN, judul, penerbit.nama AS nama_penerbit, harga, stock FROM buku
    LEFT JOIN penerbit
    ON buku.penerbit = penerbit.id;

--RIGHT JOIN dari table buku terhadap table penerbit--
SELECT ISBN, judul, penerbit.nama AS nama_penerbit, harga, stock FROM buku
    RIGHT JOIN penerbit
    ON buku.penerbit = penerbit.id;

--Cek nilai MAX dari column harga pada table book yang memiliki jumlah stok buku di bawah 10--
SELECT MAX(harga) FROM buku
    WHERE stock < 10;

--Cek nilai MIN dari column harga pada table book--
SELECT MIN(harga) FROM buku;

--COUNT untuk melihat list data dengan kondisi harga buku di bawah 100000--
SELECT COUNT(id) FROM buku 
    WHERE harga < 100000;