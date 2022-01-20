CREATE TABLE User
(
  user_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(100) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE Singer
(
  singer_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (singer_id)
);

CREATE TABLE Album
(
  album_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  singer_id INT NOT NULL,
  PRIMARY KEY (album_id),
  FOREIGN KEY (singer_id) REFERENCES Singer(singer_id)
);

CREATE TABLE Playlist
(
  playlist_id INT NOT NULL,
  tracks INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (playlist_id),
  FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Track
(
  track_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  singer_id INT NOT NULL,
  album_id INT NOT NULL,
  PRIMARY KEY (track_id),
  FOREIGN KEY (singer_id) REFERENCES Singer(singer_id),
  FOREIGN KEY (album_id) REFERENCES Album(album_id)
);

CREATE TABLE terdiri
(
  playlist_id INT NOT NULL,
  track_id INT NOT NULL,
  PRIMARY KEY (playlist_id, track_id),
  FOREIGN KEY (playlist_id) REFERENCES Playlist(playlist_id),
  FOREIGN KEY (track_id) REFERENCES Track(track_id)
);