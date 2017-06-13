var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT * FROM messages', function(error, results, fields) {
        callback(results);
      });
    }, 
    post: function (data) {
      db.connection.query(`INSERT IGNORE INTO users (name) VALUES(${db.connection.escape(data.username)})`);
      db.connection.query(`INSERT IGNORE INTO rooms (name) VALUES(${db.connection.escape(data.roomname)})`);
      db.connection.query(`INSERT INTO messages (message, room_id, user_id) 
        VALUES((${db.connection.escape(data.text)}),
        (SELECT room_id FROM rooms WHERE name=${db.connection.escape(data.roomname)}),
        (SELECT user_id FROM users WHERE name=${db.connection.escape(data.username)}))`);
    }
  },

  users: {
    get: function (callback) {
      db.connection.query('SELECT * FROM users', function(error, results, fields) {
        callback(results);
      });
    },
    post: function (data) {
      db.connection.query(`INSERT INTO users (name) VALUES(${db.connection.escape(data.username)})`);
    }
  }
};