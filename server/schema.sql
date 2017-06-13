CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  user_id int auto_increment NOT NULL,
  username varchar(255),
  PRIMARY KEY(user_id),
  UNIQUE (username)
);

CREATE TABLE rooms (
  room_id int auto_increment NOT NULL,
  roomname varchar(255),
  PRIMARY KEY(room_id),
  UNIQUE (roomname)
);

CREATE TABLE messages (
   id int auto_increment NOT NULL,
   user_id int NOT NULL,
   room_id int NOT NULL,
   text text,
   PRIMARY KEY(id),
   FOREIGN KEY (user_id) REFERENCES users(user_id),  
   FOREIGN KEY (room_id) REFERENCES rooms(room_id)
);


-- CREATE TABLE users_rooms (
--   user_id int,
--   room_id int,
--   FOREIGN KEY (user_id) REFERENCES users(user_id),
--   FOREIGN KEY (room_id) REFERENCES rooms(room_id)
-- );

INSERT INTO users (username) VALUES('gideon');

INSERT INTO rooms (roomname) VALUES('lobby');

INSERT INTO messages (text, user_id, room_id) VALUES('hey there', 1, 1); 
  -- (SELECT id FROM rooms WHERE name=${db.connection.escape(data.roomname)}),
  -- (SELECT id FROM users WHERE name=${db.connection.escape(data.username)}))`);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

