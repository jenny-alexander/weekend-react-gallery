-- Create Database -----------------------------------------------
CREATE DATABASE react_gallery;

-- Table Definition ----------------------------------------------
CREATE TABLE items ( 
  id SERIAL PRIMARY KEY,
  path VARCHAR(250) NOT NULL,
  description VARCHAR(100),
  likes SMALLINT DEFAULT 0
);

-- Initial values -------------------------------------------------
INSERT INTO items (path, description)
VALUES ('https://www.allaboutbirds.org/guide/assets/photo/261494631-1280px.jpg','Thrush'),
       ('https://www.allaboutbirds.org/guide/assets/photo/302851271-1280px.jpg','Atlantic Puffin'),
       ('https://www.allaboutbirds.org/guide/assets/photo/304461551-720px.jpg','American White Pelican'),
       ('https://www.allaboutbirds.org/guide/assets/photo/306365831-1280px.jpg','Altamira Oriole'),
       ('https://www.allaboutbirds.org/guide/assets/photo/70095811-720px.jpg','Boreal Owl')