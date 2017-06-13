var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT * FROM messages', function(error, results, fields) {
        callback(results);
      });
    }, 
    post: function (data) {
      // var escapedText = db.connection.escape(data.text);
      // console.log(escapedText);
      db.connection.query(`INSERT INTO messages (message) VALUES('${data.text}')`);
    }
  },

  users: {
    get: function (callback) {
      db.connection.query('SELECT * FROM users', function(error, results, fields) {
        callback(results);
      });
    },
    post: function (data) {
      db.connection.query(`INSERT INTO users (name) VALUES('${data.username}')`);
    }
  }
};

