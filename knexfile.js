// Update with your config settings.


module.exports = {
  //TODO-pending fetch from config
  development: {
    client: "mysql",
    connection: {
      host: 'localhost',
        user: 'root',
        database: 'student_management_system',
        password: '',
    },
    migrations: {
      disableMigrationsListValidation: true
    }
  },
  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
