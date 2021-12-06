-- Create Database --
CREATE DATABASE skilvul_music_streaming;

-- Use Database --
USE skilvul_music_streaming;

-- Create Users Table --
CREATE TABLE users(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password TEXT NOT NULL
);

--  Create Singers Table --
CREATE TABLE singers(
    singer_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL
);

-- Create Albums Table --
CREATE TABLE albums(
    album_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    singer_id INT NOT NULL,
    CONSTRAINT fk_albums_singer_id FOREIGN KEY(singer_id) REFERENCES singers(singer_id)
);

-- Create Tracks Table --
CREATE TABLE tracks(
    track_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    singer_id INT NOT NULL,
    album_id INT NOT NULL,
    CONSTRAINT fk_tracks_singer_id FOREIGN KEY(singer_id) REFERENCES singers(singer_id),
    CONSTRAINT fk_tracks_album_id FOREIGN KEY(album_id) REFERENCES albums(album_id)
);

-- Create Playlists Table --
CREATE TABLE playlists(
    playlist_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    CONSTRAINT fk_playlists_user_id FOREIGN KEY(user_id) REFERENCES users(user_id)
);

-- Create Conjunction Table --
CREATE TABLE playlists_tracks(
    playlist_id INT NOT NULL,
    track_id INT NOT NULL,
    CONSTRAINT fk_playliststracks_playlist_id FOREIGN KEY(playlist_id) REFERENCES playlists(playlist_id),
    CONSTRAINT fk_playliststracks_track_id FOREIGN KEY(track_id) REFERENCES tracks(track_id)
);