-- Create skilvulbookstore database --
CREATE DATABASE skilvulbookstore;

-- Create penerbit table --
USE skilvulbookstore;
CREATE TABLE penerbit(
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(50),
    kota VARCHAR(50)
);

-- Create penulis table --
CREATE TABLE penulis(
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(50),
    kota VARCHAR(50)
);

-- Create buku table --
CREATE TABLE buku(
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    ISBN VARCHAR(50),
    judul VARCHAR(50),
    penulis INT(10),
    penerbit INT(10),
    harga INT(10),
    stock INT(10),
    CONSTRAINT fk_penulis_id FOREIGN KEY(penulis) REFERENCES penulis(id),
    CONSTRAINT fk_penerbit_id FOREIGN KEY(penerbit) REFERENCES penerbit(id)
);

-- Insert data --
INSERT INTO penulis
    VALUES 
        (1, 'John', 'Surabaya'),
        (2, 'Amel', 'Malang');

INSERT INTO penerbit
    VALUES
        (1, 'Kompas', 'Jakarta'),
        (2, 'Gramedia', 'Bandung');

INSERT INTO buku
    VALUES
        (1, '12345678', 'Indonesia Pusaka', 1, 2, 80000, 10),
        (2, '23456789', 'Merdeka Negeriku', 2, 2, 200000, 10);

-- Query data --
SELECT ISBN, judul, penerbit.nama AS nama_penerbit, harga, stock FROM buku
    INNER JOIN penerbit
    ON buku.penerbit = penerbit.id;

SELECT ISBN, judul, penerbit.nama AS nama_penerbit, harga, stock FROM buku
    LEFT JOIN penerbit
    ON buku.penerbit = penerbit.id;

SELECT ISBN, judul, penerbit.nama AS nama_penerbit, harga, stock FROM buku
    RIGHT JOIN penerbit
    ON buku.penerbit = penerbit.id;

SELECT MAX(harga) FROM buku
    WHERE stock < 10;

SELECT MIN(harga) FROM buku;

SELECT COUNT(id) FROM buku 
    WHERE harga < 100000;
