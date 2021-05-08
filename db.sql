-- postgresqltutorial.com 

-- for help 

-- list database l

-- create database - CREATE DATABASE {databse_name} 

-- list all tables d

-- list all fields in table d {table_name}

-- list all elements within a table SELECT  from {table_name}

-- Create Table EX
CREATE TABLE products(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50),
    price INT,
    on_sale BOOLEAN
);


INSERT INTO restaurants ( name, location, price_range) values('burger king', 'oceanside', 1);

CREATE TABLE reviews(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT check(rating = 1 and rating =5)
);

INSERT INTO reviews (restaurant_id, name, review, rating) values (9000, 'Carl', 'Restaurant was awesome', 4);



-----------------------------------------------------------------------------------------------------------------

CREATE TABLE recipes(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50),
    rating INT check (rating >=1 and rating <=5),
    price INT NOT NULL
);

CREATE TABLE ingredients_list(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    recipe_id BIGINT NOT NULL REFERENCES recipes(id),
    ingredients TEXT NOT NULL
);

CREATE TABLE instructions_list(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    recipe_id BIGINT NOT NULL REFERENCES recipes(id),
    instructions TEXT NOT NULL
);

INSERT INTO recipes (name, rating, price) values ('Spaghetti', 4, 10);

INSERT INTO ingredients_list (recipe_id, ingredients) values (1, '1. Spaghetti Noodles');

INSERT INTO instructions_list (recipe_id, instructions) values (1, '1. Boil water');


LOCAL ENV INFO
PORT = 4000
PGUSER=postgres
PGHOST=localhost
PGPASSWORD=Xirdneh13!!
PGDATABASE=recipe
PGPORT=5432