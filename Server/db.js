import {createPool} from 'mysql2';

export const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'mi_guia_seguro'
});

