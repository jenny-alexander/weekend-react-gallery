CREATE DATABASE react_gallery;

CREATE TABLE items ( 
  id SERIAL PRIMARY KEY,
  path VARCHAR(100) NOT NULL,
  description VARCHAR(100),
  likes SMALLINT
);