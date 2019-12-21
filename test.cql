 CREATE TABLE [ IF NOT EXISTS ] table_name
                            '('
                                column_definition
                                ( ',' column_definition )*
                                [ ',' PRIMARY KEY '(' primary_key ')' ]
                            ')' [ WITH table_options ]

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