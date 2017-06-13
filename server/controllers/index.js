var models = require('../models');


var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data) {
        res.writeHead(200, defaultCorsHeaders);
        res.end( JSON.stringify({results: data}));
      });    
    }, 
    post: function (req, res) {
      res.writeHead(201, defaultCorsHeaders);
      models.messages.post(req.body);
      res.end(JSON.stringify(req.body));
    } 
  },

  users: {
    get: function (req, res) {
      models.users.get(function(results) {
        res.end(JSON.stringify(results));
      });    
    },
    post: function (req, res) {
      res.writeHead(201, defaultCorsHeaders);
      models.users.post(req.body);
      res.end(JSON.stringify(req.body));
    }
  }
};

