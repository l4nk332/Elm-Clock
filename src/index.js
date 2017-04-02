'use strict';

require('./index.html');
require('normalize.css');
require('./style/main.sass');

require('file-loader?name=alarm.mp3!./sfx/alarm.mp3');

var Elm = require('./Main.elm');
var mountNode = document.getElementById('main');

var app = Elm.Main.embed(mountNode);
