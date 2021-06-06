-- On FreeBSD:

--  cassandra defaults: cassandra / cassandra

-- In cassandra.yaml:

-- authenticator: PasswordAuthenticator
-- authorizer: CassandraAuthorizer
--
-- Connection: cqlsh -u cassandra -p cassandra

-- Modify Cassandra password:
ALTER USER cassandra WITH PASSWORD 'new password';


-- Create new admin user:
CREATE USER [user] WITH PASSWORD 'password' SUPERUSER;
-- Create new user:
CREATE USER [user] WITH PASSWORD 'password';

LIST USERS;

DROP USER laurent;

-- Grant auth to users:
-- Permissions list: ALL, ALTER, AUTHORIZE, CREATE, DROP, MODIFY, SELECT
GRANT [permission] ON [resource] TO [user];

-- To revoke auth:
REVOKE [permission] ON [resource] TO laurent;
-- List authorisations: LIST ALL PERMISSIONS OF laurent | LIST ALL PERMISSIONS ON [table];
LIST ALL PERMISSIONS ON KEYSPACE webcreation;
GRANT ALL ON KEYSPACE [keyspace] TO laurent;


-- https://stackoverflow.com/questions/38718623/connecting-two-desktop-pc-into-multi-node-cluster-cassandra

-- cassandra.yaml on each machine:
--
--     cluster_name - this needs to be the same on both nodes
--     seed_provider.parameters.seeds - this needs to be set to the external IP address of one of the nodes and needs to be the same on both nodes.
--     listen_address - this needs to be set to the external IP address on each machine.

-- Note: Make sure you can ping each machine from the other on the IP address you use for the listen_address and make sure that the storage_port 7000 isn't blocked by a firewall on either machine.
