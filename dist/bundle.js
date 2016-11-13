/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__(1);\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi main\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///multi_main?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _MainMenuState = __webpack_require__(2);\n\nvar _MainMenuState2 = _interopRequireDefault(_MainMenuState);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Game = function (_Phaser$Game) {\n  _inherits(Game, _Phaser$Game);\n\n  function Game() {\n    _classCallCheck(this, Game);\n\n    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 1020, 600, Phaser.AUTO, 'content', null));\n\n    _this.state.add('MainMenuState', _MainMenuState2.default, false);\n    _this.state.start('MainMenuState');\n    return _this;\n  }\n\n  return Game;\n}(Phaser.Game);\n\nnew Game();\n\n//////////////////\n// WEBPACK FOOTER\n// ./public/js/index.js\n// module id = 1\n// module chunks = 0\n//# sourceURL=webpack:///./public/js/index.js?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _GameState = __webpack_require__(3);\n\nvar _GameState2 = _interopRequireDefault(_GameState);\n\nvar _sockets = __webpack_require__(4);\n\nvar _globals = __webpack_require__(5);\n\nvar _globals2 = _interopRequireDefault(_globals);\n\nvar _constants = __webpack_require__(8);\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MainMenuState = function (_Phaser$State) {\n  _inherits(MainMenuState, _Phaser$State);\n\n  function MainMenuState() {\n    _classCallCheck(this, MainMenuState);\n\n    return _possibleConstructorReturn(this, (MainMenuState.__proto__ || Object.getPrototypeOf(MainMenuState)).apply(this, arguments));\n  }\n\n  _createClass(MainMenuState, [{\n    key: 'create',\n    value: function create() {\n      _globals2.default.username = '';\n\n      var backspace = this.game.input.keyboard.addKey(Phaser.KeyCode.BACKSPACE);\n      backspace.onDown.add(this.deleteCharFromName, this);\n\n      var enter = this.game.input.keyboard.addKey(Phaser.KeyCode.ENTER);\n      enter.onDown.add(this.saveName, this);\n\n      this.nameMsg = this.game.make.bitmapData(800, 200);\n      this.nameMsg.context.font = '32px Schoolbell';\n      this.nameMsg.context.fillStyle = '#ffffff';\n      this.nameMsg.context.fillText(_constants2.default.ENTER_NAME, 64, 64);\n      this.nameMsg.addToWorld();\n\n      this.bmd = this.game.make.bitmapData(800, 200);\n      this.bmd.context.font = '64px Schoolbell';\n      this.bmd.context.fillStyle = '#ffffff';\n      this.bmd.context.fillText('', 64, 128);\n      this.bmd.addToWorld();\n\n      this.game.input.keyboard.addCallbacks(this, null, null, this.keyPress);\n\n      this.game.state.add('game', _GameState2.default);\n    }\n  }, {\n    key: 'deleteCharFromName',\n    value: function deleteCharFromName() {\n      _globals2.default.username = _globals2.default.username.slice(0, _globals2.default.username.length - 1);\n      this.bmd.cls();\n      this.bmd.context.fillText(_globals2.default.username, 64, 128);\n    }\n  }, {\n    key: 'keyPress',\n    value: function keyPress(char) {\n      _globals2.default.username += char;\n      this.bmd.cls();\n      this.bmd.context.fillText(_globals2.default.username, 64, 128);\n    }\n  }, {\n    key: 'saveName',\n    value: function saveName() {\n      (0, _sockets.sendName)(_globals2.default.username);\n      this.bmd.cls();\n      this.nameMsg.cls();\n      this.game.state.start('game');\n    }\n  }]);\n\n  return MainMenuState;\n}(Phaser.State);\n\nexports.default = MainMenuState;\n\n//////////////////\n// WEBPACK FOOTER\n// ./public/js/states/MainMenuState.js\n// module id = 2\n// module chunks = 0\n//# sourceURL=webpack:///./public/js/states/MainMenuState.js?");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _sockets = __webpack_require__(4);\n\nvar _globals = __webpack_require__(5);\n\nvar _globals2 = _interopRequireDefault(_globals);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar GameState = function (_Phaser$State) {\n  _inherits(GameState, _Phaser$State);\n\n  function GameState() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, GameState);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GameState.__proto__ || Object.getPrototypeOf(GameState)).call.apply(_ref, [this].concat(args))), _this), _this.updateList = function (names) {\n      var usersList = names.reduce(function (prev, next) {\n        return '' + prev + next.name + '  ' + 50 + '\\n';\n      }, 'Users:\\n');\n      debugger;\n      _this.namesList.setText(usersList);\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(GameState, [{\n    key: 'create',\n    value: function create() {\n      //physics & setup\n      var bg = this.game.add.image(this.game.world.centerX, this.game.world.centerY, 'bg');\n      bg.scale.set(0.55);\n      bg.anchor.set(0.5);\n      this.game.physics.startSystem(Phaser.Physics.Arcade);\n      this.game.renderer.renderSession.roundPixels = true;\n      this.hitSound = this.game.add.audio('hit');\n      this.BGM = this.game.add.audio('bgm');\n      this.BGM.loopFull();\n\n      //render target\n      this.target = this.game.add.sprite(100, 120, 'target');\n      this.target.anchor.set(0.5);\n      this.target.scale.set(0.15);\n\n      //users list\n      this.namesList = this.game.add.text(700, 50, 'testing text', {\n        font: '22px Schoolbell',\n        fill: '#000000'\n      });\n      // this.namesList = this.game.make.bitmapData(800, 600)\n      // this.namesList.context.font = '22px Asul'\n      // this.namesList.context.lineSpacing = 20\n      // this.namesList.context.fillStyle = '#ffffff'\n      // this.namesList.addToWorld()\n\n\n      (0, _sockets.socketListen)('namesUpdated', this.updateList);\n\n      //target physics\n      this.game.physics.arcade.enable(this.target);\n      this.target.inputEnabled = true;\n      this.target.events.onInputDown.add(this.shoot, this);\n      this.target.enableBody = true;\n      this.target.body.bounce.x = true;\n      this.target.body.bounce.y = true;\n      this.target.body.collideWorldBounds = true;\n      //this.setTargetPosition();\n      this.initTarget();\n    }\n\n    //   WebFontConfig = {\n    //\n    //     //  'active' means all requested fonts have finished loading\n    //     //  We set a 1 second delay before calling 'createText'.\n    //     //  For some reason if we don't the browser cannot render the text the first time it's created.\n    //     active: function() { this.game.time.events.add(Phaser.Timer.SECOND, createText, this); },\n    //\n    //     //  The Google Fonts we want to load (specify as many as you like in the array)\n    //     google: {\n    //       families: ['Schoolbell']\n    //     }\n    //\n    // };\n    // function createText() {\n    //\n    //     this.text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, \"web fonts\");\n    //     this.text.anchor.setTo(0.5);\n    //\n    //     this.text.font = 'Schoolbell';\n    //     this.text.fontSize = 60;\n    //\n    //     //  x0, y0 - x1, y1\n    //     this.grd = this.text.context.createLinearGradient(0, 0, 0, this.text.canvas.height);\n    //     this.grd.addColorStop(0, '#8ED6FF');\n    //     this.grd.addColorStop(1, '#004CB3');\n    //     this.text.fill = grd;\n    //\n    //     this.text.align = 'center';\n    //     this.text.stroke = '#000000';\n    //     this.text.strokeThickness = 2;\n    //     this.text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);\n    //\n    //     this.text.inputEnabled = true;\n    //     this.text.input.enableDrag();\n    //\n    //     this.text.events.onInputOver.add(over, this);\n    //     this.text.events.onInputOut.add(out, this);\n    //\n    // }\n\n  }, {\n    key: 'shoot',\n    value: function shoot(pointer) {\n      this.hitSound.play();\n      (0, _sockets.sendShootData)({ player: _globals2.default.username });\n      this.emitter = this.game.add.emitter(this.game.world.centerX, 200);\n\n      this.emitter.makeParticles('broken_target');\n\n      // this.emitter.setXSpeed(-200, 200);\n      // this.emitter.setYSpeed(-150, -250);\n\n      this.emitter.bringToTop = true;\n      //this.emitter.setAlpha(0.1, 1, 500);\n      this.emitter.minParticleScale = 0.13;\n      this.emitter.maxParticleScale = 0.13;\n      //this.emitter.setScale(-2, 2, 1, 1, 3000, Phaser.Easing.Sinusoidal.InOut, true);\n      this.emitter.gravity = 1000;\n      this.emitter.x = pointer.x;\n      this.emitter.y = pointer.y;\n\n      this.emitter.start(true, 2000, null, 5);\n    }\n  }, {\n    key: 'setTargetPosition',\n    value: function setTargetPosition(data) {\n      this.target.reset(data.startPosition.x, data.startPosition.y);\n      this.target.body.velocity.x = data.velocity.x;\n      this.target.body.velocity.y = data.velocity.y;\n    }\n  }, {\n    key: 'preload',\n    value: function preload() {\n      this.game.load.image('target', 'img/target.png');\n      this.game.load.image('broken_target', 'img/broken_target.png');\n      this.game.load.image('bg', 'img/bg.jpg');\n      this.game.load.audio('bgm', 'sound/bgm.mp3');\n      this.game.load.audio('hit', 'sound/crash.ogg');\n      this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js');\n    }\n  }, {\n    key: 'initTarget',\n    value: function initTarget() {\n      var _this2 = this;\n\n      (0, _sockets.socketEvent)('init');\n\n      (0, _sockets.socketListen)('init', function (data) {\n        _this2.setTargetPosition(data.target);\n        _this2.updateList(data.users);\n      });\n\n      (0, _sockets.socketListen)('shoot', function (data) {\n        _this2.setTargetPosition(data.target);\n      });\n    }\n  }]);\n\n  return GameState;\n}(Phaser.State);\n\nexports.default = GameState;\n\n//////////////////\n// WEBPACK FOOTER\n// ./public/js/states/GameState.js\n// module id = 3\n// module chunks = 0\n//# sourceURL=webpack:///./public/js/states/GameState.js?");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar socket = io();\n\nvar socketEvent = exports.socketEvent = function socketEvent(eventName, data) {\n  socket.emit(eventName, data);\n};\n\nvar sendShootData = exports.sendShootData = function sendShootData(data) {\n  socketEvent('shoot', data);\n};\n\nvar sendTargetData = exports.sendTargetData = function sendTargetData(data) {\n  socketEvent('targetClicked', data);\n};\n\nvar sendName = exports.sendName = function sendName(data) {\n  socketEvent('nameChanged', data);\n};\n\nvar socketListen = exports.socketListen = function socketListen(eventName, callback) {\n  socket.on(eventName, callback);\n};\n\nexports.default = socket;\n\n//////////////////\n// WEBPACK FOOTER\n// ./public/js/utils/sockets.js\n// module id = 4\n// module chunks = 0\n//# sourceURL=webpack:///./public/js/utils/sockets.js?");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {};\n\n//////////////////\n// WEBPACK FOOTER\n// ./public/js/utils/globals.js\n// module id = 5\n// module chunks = 0\n//# sourceURL=webpack:///./public/js/utils/globals.js?");

/***/ },
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  ENTER_NAME: 'Please enter a name'\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./public/js/utils/constants.js\n// module id = 8\n// module chunks = 0\n//# sourceURL=webpack:///./public/js/utils/constants.js?");

/***/ }
/******/ ]);