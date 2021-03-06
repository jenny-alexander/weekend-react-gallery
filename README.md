# Image Gallery

## Description

The objective of this weekend challenge was to build an image gallery that uses React as the main building block of the user interface components. We were asked to display images that are significant to us.

I chose to build a gallery of *bird images* because being outdoors has always been a big part of my life. I used to go bird watching with my parents as a child and enjoyed it very much.

Image gallery requirements:

- DISPLAY images from the relational database and display on the front-end.
- allow a user to ADD an image to the image gallery.
- allow a user to DELETE an image from the image gallery.
- allow a user to UPDATE an image by clicking on the "love" button.
- allow a user to VIEW the image description by clicking on the image.

The base mode took me approximately **5** hours. The completed application (with stretch goals & Bootstrap styling) took me a full **15** hours to do.

**Note 1:** Images themselves are not stored in the database. Rather, a path to the image is stored.

**Note 2:** At this time, only images from the internet (with URL) can be added to the image gallery. A future challenge would be to allow a user to add an image from another source (local drive, Google drive, dropbox, etc).

## Application Demo

![Image Gallery application](public/images/react_gallery_demo.gif)

## Screenshot of Database

![Image Gallery database](public/images/react_gallery_db.png)

### Prerequisites

The following should be installed before attempting to use the image gallery:

- [Express](https://expressjs.com/en/starter/installing.html) - a web framework for Node.js
- [Postgresql](https://www.postgresql.org/) - an open source relational database

## Installation

In order to get the image gallery application up and running, do the following:

1. Download code locally from GitHub.
2. Create the database and corresponding table by doing the following:

- Using your favorite relational database client (I use Postico(<https://eggerapps.at/postico/>), go to the SQL Query tab that allows you to run a query. Using the queries from the *Create Database.sql* file, do the following:
- Run the 'CREATE DATABASE' query. This will create the react_gallery database.
- Then, within the react_gallery database, run the 'CREATE TABLE' query. This will create the tasks table.
- Finally, run the 'INSERT INTO' query. This will insert a few images into the database for the web application to use.

3. Launch the application locally.

- Go to your terminal and type 'npm run server'. This will start a local server on port 5000.
- Go to your terminal and type 'npm run client'. This will start a client session in your broswer on port 3000.

## Usage

1. A user can add a new image by entering the image URL(required) and image description into the input fields. The image is saved to the database by clicking on the 'Add' button. The gallery of images will be updated with the new image.

2. A user can "love"" an item by clicking on the heart button. This will increase the number of people who love the image by 1.

3. A user can view the image description by clicking on the image.

4. A user can delete an image from the gallery by clicking on the garbage can button. The image will be deleted from the database.

## Built With/Using

- HTML
- CSS
- Bootstrap
- Sweetalert2
- React
- JavaScript
- Axios
- Express
- Postgresql

## Acknowledgement

- Thanks to our fearless instructor, Dev Jana! His easy-going nature and patience are truly what make him a great teacher.
- Thanks to [Prime Digital Academy](www.primeacademy.io) for providing all Prime students with the opportunity to make substantial changes in their lives by learning how to program and how to think like a programmer.

## Support

- Thank you to my fellow Ionian cohort members for interesting conversations about how to make our projects work. They all offer interesting thoughts, ideas and approaches. Best of all, they are awesome human beings!

If you have suggestions or questions, please email me at <jenny_alexander@icloud.com>.
