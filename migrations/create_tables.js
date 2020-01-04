const { userclient } = require('../CassandraClient');
const migrate = require('./helper');

const queries = [
    `CREATE TABLE users (
        email text PRIMARY KEY,
        address text,
        id uuid,
        username text,
        verified boolean,
        created_at timestamp,
        updated_at timestamp
    ) WITH comment='users table';`,

    `CREATE TABLE products (
        id uuid PRIMARY KEY,
        name text,
        short_description text,
        description text,
        price int,
        type text,
        created_at timestamp,
        updated_at timestamp
    ) WITH comment='products table';`,

    `CREATE TABLE orders (
        id uuid PRIMARY KEY,
        user_id text,
        order_details text,
        created_at timestamp,
        updated_at timestamp
    ) WITH comment='orders table';`,

    `CREATE TABLE employee_by_id (
        id int PRIMARY KEY,
        name text,
        position text
    )`,

    `CREATE TABLE employee_by_car_make (
        car_make text ,
        id int,
        car_model text,
        PRIMARY KEY(car_make, id)
    )`,

    `CREATE TABLE employee_by_car_make_sorted (
        car_make text,
        age int,
        id int,
        name text,
        PRIMARY KEY(car_make, age, id)
    )`,

    `CREATE TABLE employee_by_car_make_and_model (
        car_make text,
        car_model text,
        id int,
        name text,
        PRIMARY KEY((car_make, car_model), id)
    )`

];

async function queryPromise(client, queries) {
    return new Promise((resolve, reject) => {
        resolve(queries.map(query => {
            resolve(client.execute(query)
                .then(res => console.log(res.info.queriedHost))
                .catch(e => {
                    console.log(e.message);
                    client.shutdown();
                    process.exit();
                })
            );
        }));

        reject(`EKIE !`);
    });
};

migrate(userclient, queries, queryPromise);
