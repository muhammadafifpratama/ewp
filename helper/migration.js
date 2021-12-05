const { Client } = require('pg')
const config = require('../config.json');
const { host, user, password, database} = config.database;

        const client = new Client({
            user: user,
            host: host,
            password: password,
        })
        await client.connect()
        await client.query(`DROP DATABASE IF EXISTS ${database};`)
        await client.query(`CREATE DATABASE ${database};`)
        await client.end()