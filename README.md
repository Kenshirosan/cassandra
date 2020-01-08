# Learning Apache Cassandra
# Work in progress

Features :
---

DONE:
* Implement Express.js, Vue.js.
* Vuex and Vue router.
* Cassandra Nodejs driver.
* Keyspace, cassandra user authorisation and tables creation.

---
TODO:
* Create Cassandra user.
* CRUD on models.
* Decide what kind of app to do. :/
* Users must confirm their email.

# Helpers.teachers
* **Best screencasts ever by** [**Jeffrey Way**](https://laracasts.com)



download or clone then
```tcsh
cd path/to/app
```
```tcsh
npm install && npm run create_keyspace && npm run migrate && cd client && npm install
```
update database info in CassandraClient
```tcsh
cd CassandraClient && mv ./.config.example.js ./.config.js
```
```tcsh
npm run watch
```
