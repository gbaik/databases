var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT * FROM messages', function(error, results, fields) {
        callback(results);
      });
    }, 
    post: function (data) {
      db.connection.query(`INSERT INTO messages (message) VALUES(${db.connection.escape(data.text)})`);
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

// INSERT INTO messages (message) VALUES('${escapedText}