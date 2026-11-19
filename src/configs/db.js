require('dotenv').config();

module.exports = {
    dialect : process.env.DIALECT,
    database : process.env.DATABASE,
    host : process.env.HOST,
    username : process.env.USER,
    password : process.env.PASSWORD,
    db_port : process.env.DB_PORT,
    timezone: 'America/Sao_Paulo', // Defina o fuso horário aqui
    dialectOptions: {
        timezone: 'local',
    },
    define: {
        timestamps: false,
        underscored: true,
        underscoredAll: true,
    }
}