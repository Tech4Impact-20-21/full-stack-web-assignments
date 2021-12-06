-- Create Database --
CREATE DATABASE skilvul_music_streaming;

-- Use Database --
USE skilvul_music_streaming;

-- Create Table (User) --
CREATE TABLE User(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(8) NOT NULL
);

--  Create Table (Singer) --
CREATE TABLE Singer(
    singer_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

-- Create Table (Album) --
CREATE TABLE Album(
    album_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    singer_id INT NOT NULL,
    CONSTRAINT fk_albums_singer_id FOREIGN KEY(singer_id) REFERENCES Singer(singer_id)
);

-- Create Table (Track) --
CREATE TABLE Track(
    track_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    singer_id INT NOT NULL,
    album_id INT NOT NULL,
    CONSTRAINT fk_tracks_singer_id FOREIGN KEY(singer_id) REFERENCES Singer(singer_id),
    CONSTRAINT fk_tracks_album_id FOREIGN KEY(album_id) REFERENCES Album(album_id)
);

-- Create Table (Playlist) --
CREATE TABLE Playlist(
    playlist_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    CONSTRAINT fk_playlists_user_id FOREIGN KEY(user_id) REFERENCES User(user_id)
);

-- Create Table (Playlists_tracks) (Conjunction) --
CREATE TABLE Playlists_tracks(
    playlist_id INT NOT NULL,
    track_id INT NOT NULL,
    CONSTRAINT fk_playliststracks_playlist_id FOREIGN KEY(playlist_id) REFERENCES Playlist(playlist_id),
    CONSTRAINT fk_playliststracks_track_id FOREIGN KEY(track_id) REFERENCES Track(track_id)
);