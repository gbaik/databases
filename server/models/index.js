var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT id, text, rooms.roomname, users.username FROM messages INNER JOIN rooms ON messages.room_id=rooms.room_id INNER JOIN users ON messages.user_id=users.user_id', function(error, results, fields) {
        callback(results);
      });

    }, 
    post: function (data) {
      db.connection.query(`INSERT IGNORE INTO users (username) VALUES(${db.connection.escape(data.username)})`);
      db.connection.query(`INSERT IGNORE INTO rooms (roomname) VALUES(${db.connection.escape(data.roomname)})`);
      db.connection.query(`INSERT IGNORE INTO messages (text, room_id, user_id) 
        VALUES((${db.connection.escape(data.text)}),
        (SELECT room_id FROM rooms WHERE roomname=${db.connection.escape(data.roomname)}),
        (SELECT user_id FROM users WHERE username=${db.connection.escape(data.username)}))`);
    }
  },

  users: {
    get: function (callback) {
      db.connection.query('SELECT * FROM users', function(error, results, fields) {
        callback(results);
      });
    },
    post: function (data) {
      db.connection.query(`INSERT IGNORE INTO users (username) VALUES(${db.connection.escape(data.username)})`);
    }
  }
};