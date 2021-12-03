create DATABASE skilvulbookstore;
USE skilvulbookstore;

-- Membuat tabel
CREATE TABLE penerbit(
    id_penerbit INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nama_penerbit VARCHAR(50),
    kota_penerbit VARCHAR(50)
);

CREATE TABLE penulis(
    id_penulis INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nama_penulis VARCHAR(50),
    kota_penulis VARCHAR(50)
);

CREATE TABLE buku(
    id_buku INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_penerbit INT(10) NOT NULL,
    id_penulis INT(10) NOT NULL,
    isbn_buku VARCHAR(50),
    judul_buku VARCHAR(50),
    penulis_buku VARCHAR(50),
    harga INT(10),
    stock INT(10),
    FOREIGN KEY (id_penerbit) REFERENCES penerbit(id_penerbit),
    FOREIGN KEY (id_penulis) REFERENCES penulis(id_penulis)
);

-- Melakukan insert data
INSERT INTO penerbit VALUES ('', 'Gramedia Pustaka Utama', 'Jakarta');
INSERT INTO penerbit VALUES ('', 'Elex Media Komputindo', 'Jakarta');
INSERT INTO penerbit VALUES ('', 'Bhuana Ilmu Populer', 'Jakarta');
INSERT INTO penerbit VALUES ('', 'm&c!', 'Jakarta');

INSERT INTO penulis VALUES ('', 'Ika Natassa', 'Medan');
INSERT INTO penulis VALUES ('', 'Liz Moore', 'Surabaya');
INSERT INTO penulis VALUES ('', 'Paula Harrison', 'Britania Raya');
INSERT INTO penulis VALUES ('', 'Faza Meonk', 'Bandung');
INSERT INTO penulis VALUES ('', 'Eriko Ono', 'Tokyo');

INSERT INTO buku VALUES ('', 1, 1, '9786020656274', 'Critical Eleven - English Edition', 'Ika Natassa', 93000, 10);
INSERT INTO buku VALUES ('', 1, 1, 'SCOOP234050', 'Semesta Cerita Kebangkitan Kita', 'Ika Natassa', 54000, 100);
INSERT INTO buku VALUES ('', 1, 2, '9786020651170', 'Mereka yang Tak Kembali (Long Bright River)', 'Liz Moore', 103200, 5);
INSERT INTO buku VALUES ('', 2, 4, '9786230029165', 'Si Juki Seri Jalan-Jalan Nusantara: Petualangan di Mandalika - Lombok', 'Faza Meonk', 52000, 4);
INSERT INTO buku VALUES ('', 3, 3, '9786230405921', 'Kitty dan Tragedi di Pekan Raya', 'Paula Harrison', 53600, 7);
INSERT INTO buku VALUES ('', 3, 3, '9786230405914', 'Kitty dan Kompetisi Lampion', 'Paula Harrison', 53600, 7);
INSERT INTO buku VALUES ('', 4, 5, '9786230301254', 'Hai, Miiko! Best Selection - Marugoto Miiko', 'Ono Eriko', 56000, 7);

-- Melakukan INNER JOIN buku dengan penerbit
SELECT * FROM buku INNER JOIN penerbit ON buku.id_penerbit = penerbit.id_penerbit;

-- Melakukan LEFT JOIN buku dengan penerbit
SELECT * FROM buku LEFT JOIN penerbit ON buku.id_penerbit = penerbit.id_penerbit;

-- Melakukan RIGHT JOIN buku dengan penerbit
SELECT * FROM buku RIGHT JOIN penerbit ON buku.id_penerbit = penerbit.id_penerbit;

-- Cek nilai MAX dari column harga pada table book yang memiliki jumlah stok buku di bawah 10
SELECT MAX(harga) FROM buku WHERE stock < 10;

-- Cek nilai MIN dari column harga pada table book
SELECT MIN(harga) FROM buku;

-- Gunakan COUNT untuk melihat list data dengan kondisi harga buku di bawah 100000
SELECT COUNT(*) FROM buku WHERE harga > 100000;
