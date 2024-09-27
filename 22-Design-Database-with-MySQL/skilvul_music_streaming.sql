CREATE DATABASE skilvul_music_streaming;

--Use Database--
USE skilvul_music_streaming;

--Create table user--
CREATE TABLE user (
    user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

--Create table singer--
CREATE TABLE singer (
    singer_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255)
);

--Create table playlist--
CREATE TABLE playlist (
    playlist_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tracks INT NOT NULL,
    user_id INT NOT NULL,
    CONSTRAINT fk_user_playlist FOREIGN KEY(user_id) REFERENCES user(user_id) 
);

--Create table album--
CREATE TABLE album (
    album_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    singer_id INT NOT NULL,
    CONSTRAINT fk_singer_album FOREIGN KEY(singer_id) REFERENCES singer(singer_id)
);

--Create table track--
CREATE TABLE track (
    track_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    singer_id INT NOT NULL,
    album_id INT NOT NULL,
    CONSTRAINT fk_track_singer FOREIGN KEY (singer_id) REFERENCES singer(singer_id),
    CONSTRAINT fk_track_album FOREIGN KEY (album_id) REFERENCES album(album_id)
);

--Create table conjunction--
CREATE TABLE track_playlist
(
 id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 track_id INT NOT NULL,
 playlist_id INT NOT NULL,
 CONSTRAINT fk_track_conj FOREIGN KEY (track_id) REFERENCES track (track_id),
 CONSTRAINT fk_playlist_conj FOREIGN KEY (playlist_id) REFERENCES playlist (playlist_id)
);

--Show table--
SHOW TABLES;