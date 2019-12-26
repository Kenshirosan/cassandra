Native Cassandra Functions:

cast:

The cast function can be used to converts one native datatype to another.

The following table describes the conversions supported by the cast function. Cassandra will silently ignore any cast converting a datatype into its own datatype.

From 	To
ascii 	text, varchar
bigint 	tinyint, smallint, int, float, double, decimal, varint, text, varchar
boolean 	text, varchar
counter 	tinyint, smallint, int, bigint, float, double, decimal, varint, text, varchar
date 	timestamp
decimal 	tinyint, smallint, int, bigint, float, double, varint, text, varchar
double 	tinyint, smallint, int, bigint, float, decimal, varint, text, varchar
float 	tinyint, smallint, int, bigint, double, decimal, varint, text, varchar
inet 	text, varchar
int 	tinyint, smallint, bigint, float, double, decimal, varint, text, varchar
smallint 	tinyint, int, bigint, float, double, decimal, varint, text, varchar
time 	text, varchar
timestamp 	date, text, varchar
timeuuid 	timestamp, date, text, varchar
tinyint 	tinyint, smallint, int, bigint, float, double, decimal, varint, text, varchar
uuid 	text, varchar
varint 	tinyint, smallint, int, bigint, float, double, decimal, text, varchar

SELECT avg(cast(count as double)) FROM myTable;


Uuid()

The uuid function takes no parameters and generates a random type 4 uuid suitable for use in INSERT or UPDATE statements.
Timeuuid functions

now()

The now function takes no arguments and generates, on the coordinator node, a new unique timeuuid at the time the function is invoked. Note that this method is useful for insertion but is largely non-sensical in WHERE clauses. For instance, a query of the form:

SELECT * FROM myTable WHERE t = now()

will never return any result by design, since the value returned by now() is guaranteed to be unique.

currentTimeUUID is an alias of now.
minTimeuuid and maxTimeuuid

The minTimeuuid (resp. maxTimeuuid) function takes a timestamp value t (which can be either a timestamp or a date string <timestamps>) and return a fake timeuuid corresponding to the smallest (resp. biggest) possible timeuuid having for timestamp t. So for instance:

SELECT * FROM myTable
 WHERE t > maxTimeuuid('2013-01-01 00:05+0000')
   AND t < minTimeuuid('2013-02-02 10:00+0000')

will select all rows where the timeuuid column t is strictly older than '2013-01-01 00:05+0000' but strictly younger than '2013-02-02 10:00+0000'. Please note that t >= maxTimeuuid('2013-01-01 00:05+0000') would still not select a timeuuid generated exactly at ‘2013-01-01 00:05+0000’ and is essentially equivalent to t > maxTimeuuid('2013-01-01 00:05+0000').

