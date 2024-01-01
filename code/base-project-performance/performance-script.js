import sql from 'k6/x/sql';
import { sleep } from 'k6';

export let options = {
    vus: 50,
    duration: '10s'
};

// Reading parameters from environment variables
const dbParams = {
    user: __ENV.DB_USER || 'defaultUser',
    password: __ENV.DB_PASSWORD || 'defaultPassword',
    host: __ENV.DB_HOST || 'localhost',
    port: __ENV.DB_PORT || 5432,
    dbname: __ENV.DB_NAME || 'mydb',
    schema: __ENV.DB_SCHEMA || 'CREATE TABLE IF NOT EXISTS data.testdata (id SERIAL PRIMARY KEY, data VARCHAR);',
    insertQuery: __ENV.DB_INSERT_QUERY || 'INSERT INTO data.testdata (data) VALUES($1);',
    selectQuery: __ENV.DB_SELECT_QUERY || 'SELECT * FROM data.testdata;',
    recordSize: parseInt(__ENV.RECORD_SIZE) || 100,
    recordsPerMinute: parseInt(__ENV.RECORDS_PER_MINUTE) || 100,
};

// Open Database Connection
const db = sql.open('postgres', `postgresql://${dbParams.user}:${dbParams.password}@${dbParams.host}:${dbParams.port}/${dbParams.dbname}`);

// Setup - Create Table
export function setup() {
    db.exec(dbParams.schema);
}

// Teardown - Optional cleanup
export function teardown() {
    db.exec('DROP TABLE IF EXISTS data.testdata;');
}

// Main function
export default function () {
    // Insert Data
    for (let i = 0; i < dbParams.recordsPerMinute; i++) {
        const data = 'X'.repeat(dbParams.recordSize); // Generate data of specified size
        db.exec(dbParams.insertQuery, [data]);
    }

    // Read Data
    let res = sql.query(db, dbParams.selectQuery);
    for (const row of res) {
        console.log(`ID: ${row.id}, Data: ${row.data}`);
    }

    // Sleep to match records per minute requirement
    sleep(60 - (Date.now() % 60000) / 1000);
}
