'use strict';

require('./index.html');
require('normalize.css');
require('./style/main.sass');

require('file-loader?name=alarm.ogg!./sfx/alarm.ogg');

var Elm = require('./Main.elm');
var mountNode = document.getElementById('main');

var app = Elm.Main.embed(mountNode);
