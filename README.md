# Sailsjs CRUD

Simple app that does CRUD written in sails js and using EJS as its templating engine. MySQL is needed to run this app.

Check here to get started on sailsjs http://sailsjs.org/get-started

Since this is using MySQL, don't forget to install the driver.

```sh
$ npm install sails-mysql
```
Create database on MySQL, in this case i named it "directory", you can change it to anything you like and adjust it on ```config/connections.js```

Here is the "category" table script 
```sh
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `alias` varchar(255) NOT NULL,
  `status` int(1) NOT NULL,
  `date_created` datetime NOT NULL,
  `parent_id` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
```
After everything is set, run it ```sails lift```

### Done!

Note : This app using Lumino, a free bootstrap based beautiful template from MediaLoot. Thanks!
http://medialoot.com/item/lumino-admin-bootstrap-template/
