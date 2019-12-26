 CREATE TABLE merchants (
    id uuid PRIMARY KEY,
    common_name text,
    merchant_type text
) WITH comment='Merchant Listing for MarketPlace';

CREATE TABLE timeline (
    userid uuid,
    posted_month int,
    posted_time uuid,
    body text,
    posted_by text,
    PRIMARY KEY (userid, posted_month, posted_time)
) WITH compaction = { 'class' : 'LeveledCompactionStrategy' };

CREATE TABLE loads (
    machine inet,
    cpu int,
    mtime timeuuid,
    load float,
    PRIMARY KEY ((machine, cpu), mtime)
) WITH CLUSTERING ORDER BY (mtime DESC);


cassandra defaults: cassandra / cassandra

In cassandra.yaml:

authenticator: PasswordAuthenticator
authorizer: CassandraAuthorizer

Connection: cqlsh -u cassandra -p cassandra

Modify Cassandra password: ALTER USER cassandra WITH PASSWORD 'new password';
//

Create new admin user: CREATE USER [user] WITH PASSWORD 'password' SUPERUSER;
Create new user: CREATE USER [user] WITH PASSWORD 'password';

LIST USERS;

DROP USER laurent;

Grant auth to users: GRANT [permission] ON [resource] TO [user];
Permissions list: ALL, ALTER, AUTHORIZE, CREATE, DROP, MODIFY, SELECT

To revoke auth: REVOKE [permission] ON [resource] TO laurent;
List authorisations: LIST ALL PERMISSIONS OF laurent | LIST ALL PERMISSIONS ON [table];
LIST ALL PERMISSIONS ON KEYSPACE webcreation;
GRANT ALL ON KEYSPACE [keyspace] TO laurent;



