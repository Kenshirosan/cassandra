const { userclient } = require('../CassandraClient');

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