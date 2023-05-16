const connection = require('../db/connection');

module.exports = {
viewAllDepartments: function() {
    return connection.query('SELECT * FROM department');
  }
}

