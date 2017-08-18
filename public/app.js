// import module 
var movies = require('./movies');
var importMovie = require('./exportModule');

// accessing function of movies module
movies.avatar();

//accessing exported functions in exportModule.js
importMovie.getAvatar();
importMovie.getTitanic();

// object factory access modules
require('./mango');
require('./apple');
