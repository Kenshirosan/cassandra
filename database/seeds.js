const { userclient } = require('../CassandraClient');
const { migrate, queryPromise } = require('./helper');

const queries = [
    `INSERT INTO employee_by_id (id, name, position) VALUES (1, 'Laurent', 'The Boss');`,
    `INSERT INTO employee_by_id (id, name, position) VALUES (2, 'Marie', 'The Employee');`,
    `INSERT INTO employee_by_id (id, name, position) VALUES (3, 'Tintin', 'The ?');`,
    `INSERT INTO employee_by_id (id, name, position) VALUES (4, 'Frank', 'Developer');`,
    `INSERT INTO employee_by_id (id, name, position) VALUES (5, 'Toto', 'The berlot');`,
    `INSERT INTO employee_by_car_make (car_make, id, car_model) VALUES ('BMW', 1, 'Sports Car');`,
    `INSERT INTO employee_by_car_make (car_make, id, car_model) VALUES ('BMW', 2, 'Coupe');`,
    `INSERT INTO employee_by_car_make (car_make, id, car_model) VALUES ('AUDI', 4, 'Truck');`,
    `INSERT INTO employee_by_car_make (car_make, id, car_model) VALUES ('AUDI', 5, 'Hatchback');`,
    `INSERT INTO employee_by_car_make_and_model (car_make, car_model, id, name) VALUES ('BMW', 'Coupe', 1, 'Laurent');`,
    `INSERT INTO employee_by_car_make_and_model (car_make, car_model, id, name) VALUES ('BMW', 'Sports Car', 4, 'Frank');`,
    `INSERT INTO employee_by_car_make_and_model (car_make, car_model, id, name) VALUES ('AUDI', 'Hatchback', 2, 'Marie');`,
    `INSERT INTO employee_by_car_make_and_model (car_make, car_model, id, name) VALUES ('AUDI', 'Truck', 3, 'Tintin');`,
    `INSERT INTO employee_by_car_make_and_model (car_make, car_model, id, name) VALUES ('AUDI', 'Hatchback', 3, 'Toto');`,
];

for (var i = 5; i < 1000; i++) {
    queries.push(
        `INSERT INTO employee_by_id (id, name, position) VALUES (${i}, 'Laurent', 'The Boss${i}');`
    );
    queries.push(
        `INSERT INTO employee_by_car_make (car_make, id, car_model) VALUES ('BMW${i}', ${i}, 'Sports Car');`
    );
}
// address (
//         street text,
//         city text,
//         country text,
//         phones set<frozen<phone>>,
//         zip int

/*alias text,
        phone_number text,
        country_code int*/
let addresses = [
    {
        street: '102 Bld Mireille Lauze',
        city: 'Marseille',
        country: 'France',
        phones: { Home: '7-15-42-14-15' },
        zip: 10245,
    },
];

// INSERT INTO addresses (street, city, country, phones, zip) VALUES ('102 Bld Mireille Lauze', 'Marseille', 'France', ['Home', '7-15-42-14-15', 33], 10245);
//
// INSERT INTO users_by_email
//     (email, addresses, first_name, id, last_name, verified)
// VALUES (
//     'l.neveux@icloud.com',
//     {'Home': {{'street': '102 Bld Mireille Lauze', 'city': 'Marseille', 'country': 'France', 'phones': ['Home', '7-15-42-14-15', 33], 'zip': 10245}}},
//     'Laurent',
//     1,
//     'Neveux',
//     false
// );

const userQueries = [
    `INSERT INTO users_by_email (email, addresses, first_name, id, last_name, verified) VALUES ('l.neveux@icloud.com', '102 bld Mireille Lauze', 'Laurent', ${i}, 'Neveux', false)`,
    `INSERT INTO users_by_email (email, addresses, first_name, id, last_name, verified) VALUES ('laurent@icloud.com', '102 bld Mireille Lauze', 'Laurent', ${i}, 'Neveux', false)`,
    `INSERT INTO users_by_email (email, addresses, first_name, id, last_name, verified) VALUES ('laurent.sama@gmail.com', '102 bld Mireille Lauze', 'Laurent', ${i}, 'Neveux', false)`,
    `INSERT INTO users_by_email (email, addresses, first_name, id, last_name, verified) VALUES ('drtokky@outlook.com', '102 bld Mireille Lauze', 'Laurent', ${i}, 'Neveux', false)`,
    `INSERT INTO users_by_email (email, addresses, first_name, id, last_name, verified) VALUES ('drtokky@yahoo.com', '102 bld Mireille Lauze', 'Laurent', ${i}, 'Neveux', false)`,
    `INSERT INTO users_by_email (email, addresses, first_name, id, last_name, verified) VALUES ('laurent@marseille-web.fr', '102 bld Mireille Lauze', 'Laurent', ${i}, 'Neveux', false)`,
];

migrate(userclient, queries, queryPromise);
