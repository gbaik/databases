CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int auto_increment NOT NULL,
  name text,
  PRIMARY KEY(id)
);

CREATE TABLE rooms (
  id int auto_increment NOT NULL,
  name text,
  PRIMARY KEY(id)
);

CREATE TABLE messages (
   id int auto_increment NOT NULL,
   user_id int,
   room_id int,
   message text,
   PRIMARY KEY(id),
   FOREIGN KEY (user_id) REFERENCES users(id),  
   FOREIGN KEY (room_id) REFERENCES rooms(id)
);


CREATE TABLE users_rooms (
  user_id int,
  room_id int,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

