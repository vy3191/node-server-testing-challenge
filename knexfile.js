// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,  
    connection: {
      filename: './data/cars.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seed: {
      directory: './data/migrations'
    }
  },

  test : {
    client: 'sqlite3',
    useNullAsDefault: true,  
    connection: {
      filename: './data/test.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seed: {
      directory: './data/migrations'
    }
  },

  

};
