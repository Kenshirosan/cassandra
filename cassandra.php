<?php

$cluster   = Cassandra::cluster()->build();                 // connects to localhost by default
$keyspace  = 'webcreation';
$session   = $cluster->connect($keyspace);        // create session, optionally scoped to a keyspace
$statement = new Cassandra\SimpleStatement(       // also supports prepared and batch statements
    'SELECT * FROM merchants;'
);
$future    = $session->executeAsync($statement);  // fully asynchronous and easy parallel execution
$result    = $future->get();                      // wait for the result, with an optional timeout

echo'<pre>';
foreach ($result as $row) {                       // results and rows implement Iterator, Countable and ArrayAccess
    printf("Merchant called %s has uuid: %s\n", $row['common_name'], $row['id']);
}
