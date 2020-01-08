const { userclient } = require('../CassandraClient');
const { migrate, queryPromise } = require('./helper');

const queries = [
    `CREATE TABLE IF NOT EXISTS users_by_email (
        email text,
        id uuid,
        addresses map<text, frozen<address>>,
        first_name text,
        last_name text,
        verified boolean,
        created_at timestamp,
        updated_at timestamp,
        PRIMARY KEY(email, created_at)
    ) WITH CLUSTERING ORDER BY(created_at DESC);`,
    `CREATE TABLE IF NOT EXISTS products_by_categories (
        id uuid,
        name text,
        category_id int,
        short_description text,
        description text,
        price int,
        type text,
        created_at timestamp,
        updated_at timestamp,
        PRIMARY KEY(category_id, name)
    );`,
    `CREATE TABLE IF NOT EXISTS categories_by_id (
        id uuid,
        name text,
        created_at timestamp,
        updated_at timestamp,
        PRIMARY KEY(id, name)
    );`,
    `CREATE TABLE IF NOT EXISTS categories_by_name (
        id uuid,
        name text,
        created_at timestamp,
        updated_at timestamp,
        PRIMARY KEY(name, id)
    );`,
    `CREATE TABLE IF NOT EXISTS orders_by_users (
        id uuid,
        user_id uuid,
        type text,
        created_at timestamp,
        updated_at timestamp,
        PRIMARY KEY(user_id, created_at)
    ) WITH CLUSTERING ORDER BY (created_at DESC);`,
    `CREATE TABLE IF NOT EXISTS orders_by_type (
        id uuid,
        user_id uuid,
        type text,
        created_at timestamp,
        updated_at timestamp,
        PRIMARY KEY((id, user_id), type)
    ) WITH CLUSTERING ORDER BY (type DESC);`,
    `CREATE TABLE IF NOT EXISTS order_by_type_and_by_users (
        id uuid,
        user_id uuid,
        type text,
        created_at timestamp,
        update_at timestamp,
	PRIMARY KEY((type, created_at), user_id)
    ) WITH CLUSTERING ORDER BY (user_id DESC);`,
    `CREATE TABLE IF NOT EXISTS employee_by_id (
        id int PRIMARY KEY,
        name text,
        position text
    )`,
    `CREATE TABLE IF NOT EXISTS employee_by_car_make (
        car_make text,
        id int,
        car_model text,
        PRIMARY KEY(car_make, id)
    )`,
    `CREATE TABLE IF NOT EXISTS employee_by_car_make_sorted (
        car_make text,
        age int,
        id int,
        name text,
        PRIMARY KEY(car_make, age, id)
    )`,
    `CREATE TABLE IF NOT EXISTS employee_by_car_make_and_model (
        car_make text,
        car_model text,
        id int,
        name text,
        PRIMARY KEY((car_make, car_model), id)
    )`
];


migrate(userclient, queries, queryPromise);
