--CREATE database bernama skilvul_music_streaming--
CREATE DATABASE skilvul_music_streaming;

-- Use Database skilvul_music_streaming --
USE skilvul_music_streaming;

-- Create table User --
CREATE TABLE User (
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
    );

-- Create table Singer --
CREATE TABLE Singer (
    singer_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
    );

-- Create table Album --
CREATE TABLE Album (
    album_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    singer_id INT NOT NULL,
    CONSTRAINT fk_album_singer_id FOREIGN KEY(singer_id) REFERENCES Singer(singer_id)
    );

-- Create table Track --
CREATE TABLE Track (
    track_id  int NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    title     varchar(255) NOT NULL ,
    singer_id INT NOT NULL,
    album_id INT NOT NULL,
    CONSTRAINT fk_track_singer_id FOREIGN KEY(singer_id) REFERENCES Singer(singer_id),
    CONSTRAINT fk_track_album_id FOREIGN KEY(album_id) REFERENCES Album(album_id)
    );

-- Create table Playlist --
CREATE TABLE Playlist (
    playlist_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    tracks INT
    CONSTRAINT fk_playlist_user_id FOREIGN KEY(user_id) REFERENCES User(user_id)
    );

-- Create table Playlist Track --
CREATE TABLE Playlist_track (
    playlist_id INT NOT NULL,
    track_id INT NOT NULL,
    CONSTRAINT fk_playliststrack_playlist_id FOREIGN KEY(playlist_id) REFERENCES Playlist(playlist_id),
    CONSTRAINT fk_playliststrack_track_id FOREIGN KEY(track_id) REFERENCES Track(track_id)
    );









