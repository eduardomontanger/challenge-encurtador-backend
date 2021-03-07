module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    protocol: 'postgres',
    host: process.env.DB_HOST,
    dialect: 'postgres',
    options: {
      ssl: false
    },
    define: {
      timestamps: false
    },
    dialectOptions: {
      ssl: false,
      useUTC: false,
      dateStrings: true,
      typeCast: function (field, next) {
        if (field.type === 'DATETIME') {
          return field.string()
        }
        return next()
      }
    },
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    protocol: 'postgres',
    dialect: 'postgres',
    options: {
      ssl: false
    },
    define: {
      timestamps: false
    },
    dialectOptions: {
      ssl: false,
      useUTC: false,
      dateStrings: true,
      typeCast: function (field, next) {
        if (field.type === 'DATETIME') {
          return field.string()
        }
        return next()
      }
    },
  }
}
