<?php

$config = require 'config.php';



$cluster   = Cassandra::cluster()
                ->withCredentials($config['cassandra']['user'], $config['cassandra']['password'])
                ->build();    // connects to localhost by default


$keyspace  = 'webcreation';
$session   = $cluster->connect($keyspace);        // create session, optionally scoped to a keyspace

$statement = new Cassandra\SimpleStatement(       // also supports prepared and batch statements
    'SELECT * FROM merchants;'
);
$statement2 = new Cassandra\SimpleStatement(       // also supports prepared and batch statements
    'SELECT * FROM timeline;'
);

$future    = $session->executeAsync($statement);  // fully asynchronous and easy parallel execution
$future2    = $session->executeAsync($statement2);
$result    = $future->get();
$result2    = $future2->get();// wait for the result, with an optional timeout


foreach ($result as $row) {                       // results and rows implement Iterator, Countable and ArrayAccess
    printf("Merchant called %s has uuid: %s\n", $row['common_name'], $row['id']);
}

foreach ($result2 as $row) {                       // results and rows implement Iterator, Countable and ArrayAccess
    printf("userid %s, posted month %s, posted time %s, body %s, posted by %s, t %s, time %s\n", $row['userid'], $row['posted_month'], $row['posted_time'], $row['body'], $row['posted_by'], $row['t'], $row['time']);
}
