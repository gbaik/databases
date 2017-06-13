CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  user_id int auto_increment NOT NULL,
  name varchar(255),
  PRIMARY KEY(user_id),
  UNIQUE (name)
);

CREATE TABLE rooms (
  room_id int auto_increment NOT NULL,
  name varchar(255),
  PRIMARY KEY(room_id),
  UNIQUE (name)
);

CREATE TABLE messages (
   id int auto_increment NOT NULL,
   user_id int NOT NULL,
   room_id int NOT NULL,
   message text,
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

INSERT INTO users (name) VALUES('gideon');

INSERT INTO rooms (name) VALUES('lobby');

INSERT INTO messages (message, user_id, room_id) VALUES('hey there', 1, 1); 
  -- (SELECT id FROM rooms WHERE name=${db.connection.escape(data.roomname)}),
  -- (SELECT id FROM users WHERE name=${db.connection.escape(data.username)}))`);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

