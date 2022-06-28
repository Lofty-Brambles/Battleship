/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/components/base.js":
/*!****************************************!*\
  !*** ./src/modules/components/base.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initPage)
/* harmony export */ });
/* harmony import */ var _one_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one-player */ "./src/modules/components/one-player.js");
/* harmony import */ var _two_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./two-player */ "./src/modules/components/two-player.js");
/* harmony import */ var _assets_discord_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/discord.webp */ "./src/assets/discord.webp");
/* harmony import */ var _assets_github_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/github.png */ "./src/assets/github.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/logo.png */ "./src/assets/logo.png");
/* eslint-disable no-param-reassign */






function makeheader() {
  var header = document.createElement("header");
  var headerTxt = document.createElement("h2");
  var headerImg = document.createElement("img");
  headerTxt.textContent = "Battleship!";
  headerTxt.classList.add("header-txt", "block");
  headerImg.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__;
  headerImg.alt = "Logo Image";
  headerImg.classList.add("header-img", "block");
  [headerTxt, headerImg].forEach(function (ele) {
    header.appendChild(ele);
  });
  return header;
}

function makeNav() {
  var nav = document.createElement("nav");
  var twoPlayerMode = document.createElement("button");
  var onePlayerMode = document.createElement("button");

  var activateBtn = function activateBtn(btn) {
    nav.querySelectorAll("button").forEach(function (button) {
      button.classList.remove("active");
    });
    btn.classList.add("active");
  };

  twoPlayerMode.innerHTML = "<span class=\"material-symbols-outlined\">group</span><span>Player vs. Player</span>";
  onePlayerMode.innerHTML = "<span class=\"material-symbols-outlined\">dvr</span><span>Player vs. Computer</span>";
  twoPlayerMode.addEventListener("click", function (e) {
    if (e.target.classList.contains("active")) return;
    activateBtn(twoPlayerMode);
    (0,_two_player__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
  onePlayerMode.addEventListener("click", function (e) {
    if (e.target.classList.contains("active")) return;
    activateBtn(onePlayerMode);
    (0,_one_player__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
  [onePlayerMode, twoPlayerMode].forEach(function (ele) {
    nav.appendChild(ele);
  });
  return {
    nav: nav,
    activateBtn: activateBtn
  };
}

function makeBody() {
  var main = document.createElement("main");
  main.style.flexGrow = "1";
  return main;
}

function makeFooter() {
  var foot = document.createElement("footer");
  var discord = document.createElement("a");
  var github = document.createElement("a");
  var footTxt = document.createElement("div");
  var footArr = [discord, footTxt, github];
  footTxt.textContent = "Made with \u2665 by Lofty Brambles";
  footArr.forEach(function (ele, i) {
    if (i !== 1) {
      var image = document.createElement("img");

      if (i === 0) {
        ele.href = " https://discord.com/users/740094143379800156";
        image.src = _assets_discord_webp__WEBPACK_IMPORTED_MODULE_2__;
        image.alt = "discord";
      } else {
        ele.href = "https://github.com/Lofty-Brambles/restuarant-page";
        image.src = _assets_github_png__WEBPACK_IMPORTED_MODULE_3__;
        image.alt = "github";
      }

      ;
      ele.appendChild(image);
    }

    ;
    foot.appendChild(ele);
  });
  return foot;
}

function initPage() {
  document.body.appendChild(makeheader());

  var _makeNav = makeNav(),
      nav = _makeNav.nav;

  document.body.appendChild(nav);
  document.body.appendChild(makeBody());
  document.body.appendChild(makeFooter());
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0");
  document.head.appendChild(link);
  document.body.querySelectorAll("nav > button")[0].click();
}

/***/ }),

/***/ "./src/modules/components/load-start.js":
/*!**********************************************!*\
  !*** ./src/modules/components/load-start.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadStartModal)
/* harmony export */ });
function loadStartModal(mode) {
  var wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  if (mode === "single") {
    var inp = document.createElement("input");
    inp.setAttribute("placeholder", " ");
    inp.setAttribute("required", true);
    var label = document.createElement("label");
    label.innerHTML = "Name<span class=\"red\">*</span>";
    var group = document.createElement("div");
    group.classList.add("form-group");
    group.appendChild(inp);
    group.appendChild(label);
    var button = document.createElement("button");
    button.classList.add("button", "start-btn");
    button.textContent = "Start Game!";
    [group, button].forEach(function (ele) {
      wrapper.appendChild(ele);
    });
  } else {
    var group1 = document.createElement("div");
    group1.classList.add("form-group");
    var group2 = document.createElement("div");
    group2.classList.add("form-group");
    [group1, group2].forEach(function (ele, i) {
      var inp = document.createElement("input");
      inp.setAttribute("placeholder", " ");
      inp.setAttribute("required", true);
      var label = document.createElement("label");
      label.innerHTML = "Name ".concat(i + 1, "<span class=\"red\">*</span>");
      ele.appendChild(inp);
      ele.appendChild(label);
    });

    var _button = document.createElement("button");

    _button.classList.add("button", "start-btn");

    _button.textContent = "Start Game!";
    [group1, group2, _button].forEach(function (ele) {
      wrapper.appendChild(ele);
    });
  }

  var main = document.querySelector("main");
  main.innerHTML = null;
  main.appendChild(wrapper);
}

/***/ }),

/***/ "./src/modules/components/one-player.js":
/*!**********************************************!*\
  !*** ./src/modules/components/one-player.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onePlay)
/* harmony export */ });
/* harmony import */ var _util_init_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/init-board */ "./src/modules/util/init-board.js");
/* harmony import */ var _load_start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-start */ "./src/modules/components/load-start.js");


function onePlay() {
  (0,_load_start__WEBPACK_IMPORTED_MODULE_1__["default"])("single");
  var nameVal = [];
  document.querySelector(".start-btn").addEventListener("click", function (e) {
    var names = e.target.previousSibling.querySelectorAll("input");
    names.forEach(function (ele) {
      nameVal.push(ele.value);
    });
  });
  (0,_util_init_board__WEBPACK_IMPORTED_MODULE_0__["default"])(nameVal);
}

/***/ }),

/***/ "./src/modules/components/two-player.js":
/*!**********************************************!*\
  !*** ./src/modules/components/two-player.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ twoPlay)
/* harmony export */ });
/* harmony import */ var _util_init_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/init-board */ "./src/modules/util/init-board.js");
/* harmony import */ var _load_start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-start */ "./src/modules/components/load-start.js");


function twoPlay() {
  (0,_load_start__WEBPACK_IMPORTED_MODULE_1__["default"])("dual");
  var nameVal = [];
  document.querySelector(".start-btn").addEventListener("click", function (e) {
    var names = e.target.previousSibling.querySelectorAll("input");
    names.forEach(function (ele) {
      nameVal.push(ele.value);
    });
  });
  (0,_util_init_board__WEBPACK_IMPORTED_MODULE_0__["default"])(nameVal);
}

/***/ }),

/***/ "./src/modules/factories/gameboard.js":
/*!********************************************!*\
  !*** ./src/modules/factories/gameboard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Board": () => (/* binding */ Board),
/* harmony export */   "testInitBoard": () => (/* binding */ testInitBoard)
/* harmony export */ });
/* harmony import */ var _util_boardgen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/boardgen */ "./src/modules/util/boardgen.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var testInitBoard = function testInitBoard() {};

var spaceCheck = function spaceCheck(board, length, position, direction) {
  if (direction === "x") {
    for (var i = position[1]; i < position[1] + length; i++) {
      if (board[position[0]][i] === "hidden-ship" || i >= 7) {
        throw new Error("Ship doesn't fit in board.");
      }
    }
  } else if (direction === "y") {
    for (var _i = position[0]; _i < position[0] + length; _i++) {
      if (board[_i][position[1]] === "hidden-ship" || _i >= 7) {
        throw new Error("Ship doesn't fit in board.");
      }
    }
  }
};

var parseArray = function parseArray(array, target) {
  return array.findIndex(function (val) {
    return JSON.stringify(target) === JSON.stringify(val);
  });
};

var Board = /*#__PURE__*/function () {
  function Board() {
    _classCallCheck(this, Board);

    this.board = (0,_util_boardgen__WEBPACK_IMPORTED_MODULE_0__["default"])();
    this.ships = [];
  }

  _createClass(Board, [{
    key: "placeShip",
    value: function placeShip(ship) {
      var length = ship.length,
          position = ship.position,
          axis = ship.axis;
      spaceCheck(this.board, length, position, axis);

      if (!this.ships.includes(ship)) {
        this.ships.push(ship);
      }

      if (axis === "x") {
        for (var index = position[1]; index < position[1] + length; index++) {
          this.board[position[0]][index] = "hidden-ship";
        }
      } else if (axis === "y") {
        for (var _index = position[0]; _index < position[0] + length; _index++) {
          this.board[_index][position[1]] = "hidden-ship";
        }
      }
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(a, b) {
      if (!Number.isInteger(a) || a >= 7 || a < 0) throw new Error("The argument is not a proper position coordinate.");
      if (!Number.isInteger(b) || b >= 7 || b < 0) throw new Error("The argument is not a proper position coordinate.");

      if (this.board[a][b] === "found-ship" || this.board[a][b] === "missed") {
        throw new Error("You cannot hit a spot that you had already hit before.");
      }

      if (this.board[a][b] === "hidden-ship") {
        this.board[a][b] = "found-ship";
        this.ships.forEach(function (shipPresent) {
          var array = shipPresent.coordSet();
          var index = parseArray(array, [a, b]);
          if (index !== -1) shipPresent.hits(index);
        });
        return true;
      }

      if (this.board[a][b] === "empty") {
        this.board[a][b] = "missed";
      }

      return false;
    }
  }, {
    key: "allSunk",
    value: function allSunk() {
      var sunkArr = [];
      this.ships.forEach(function (ship) {
        sunkArr.push(ship.isSunk());
      });
      return sunkArr.indexOf(false) === -1;
    }
  }, {
    key: "findTakenMoves",
    value: function findTakenMoves() {
      var positions = [];

      for (var i = 0; i < 7; i++) {
        for (var j = 0; j < 7; j++) {
          if (this.board[i][j] === "found-ship" || this.board[i][j] === "missed") {
            positions.push([i, j]);
          }
        }
      }

      return positions;
    }
  }]);

  return Board;
}();



/***/ }),

/***/ "./src/modules/factories/player.js":
/*!*****************************************!*\
  !*** ./src/modules/factories/player.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/factories/gameboard.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Player = /*#__PURE__*/function () {
  function Player(name, turn, type) {
    _classCallCheck(this, Player);

    this.name = name !== null && name !== void 0 ? name : "User";
    this.turn = turn !== null && turn !== void 0 ? turn : false;
    this.type = type !== null && type !== void 0 ? type : "Player";
    this.boardset = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Board();
  }

  _createClass(Player, [{
    key: "toggleTurn",
    value: function toggleTurn() {
      this.turn = !this.turn;
    }
  }, {
    key: "attackReceived",
    value: function attackReceived(i, j) {
      if (!this.turn) throw new Error("Wrong player turn.");
      if (this.type !== "Player") throw new Error("Non human Player.");
      var marked = this.boardset.receiveAttack(i, j);
      return marked;
    }
  }]);

  return Player;
}();



/***/ }),

/***/ "./src/modules/factories/ship.js":
/*!***************************************!*\
  !*** ./src/modules/factories/ship.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _util_ship_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/ship-info */ "./src/modules/util/ship-info.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Ship = /*#__PURE__*/_createClass(function Ship(shipType, _position) {
  var _this = this;

  _classCallCheck(this, Ship);

  _defineProperty(this, "changeAxis", function (axisArg) {
    if (axisArg) {
      _this.axis = axisArg;
    } else {
      _this.axis = _this.axis === "x" ? "y" : "x";
    }
  });

  _defineProperty(this, "hits", function (index) {
    if (index >= 0 && index < _this.length) _this.hitArr[index] = true;
  });

  _defineProperty(this, "coordSet", function () {
    var array = [];
    var axis = _this.axis,
        position = _this.position,
        length = _this.length;

    for (var i = 0; i < length; i++) {
      array.push(axis === "x" ? [position[0], position[1] + i] : [position[0] + i, position[1]]);
    }

    return array;
  });

  _defineProperty(this, "isSunk", function () {
    return _this.hitArr.indexOf(false) === -1;
  });

  var _shipdtls$shipType = (0,_util_ship_info__WEBPACK_IMPORTED_MODULE_0__["default"])()[shipType],
      name = _shipdtls$shipType.name,
      _length = _shipdtls$shipType.length,
      icon = _shipdtls$shipType.icon;
  this.name = name;
  this.length = _length;
  this.icon = icon;
  this.position = _position;
  this.axis = "x";
  this.hitArr = Array(_length).fill(false);
});



/***/ }),

/***/ "./src/modules/util/boardgen.js":
/*!**************************************!*\
  !*** ./src/modules/util/boardgen.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateBoard)
/* harmony export */ });
function generateBoard() {
  var array = [];

  for (var i = 0; i < 7; i++) {
    var newArr = new Array(7).fill("empty");
    array.push(newArr);
  }

  return array;
}

/***/ }),

/***/ "./src/modules/util/init-board.js":
/*!****************************************!*\
  !*** ./src/modules/util/init-board.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initBoardSetup)
/* harmony export */ });
/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/player */ "./src/modules/factories/player.js");
/* harmony import */ var _factories_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/ship */ "./src/modules/factories/ship.js");



function shipInit() {
  return [new _factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"]("Carrier", [0, 0]), new _factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"]("Submarine", [0, 0]), new _factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"]("Destroyer", [0, 0]), new _factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"]("Frigate", [0, 0])];
}

function loadBoard() {
  var boardUI = document.createElement("div");
  boardUI.classList.add("board");

  for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 7; j++) {
      var cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.x = i;
      cell.dataset.y = j;
      boardUI.appendChild(cell);
    }
  }

  return boardUI;
}

function initBoardSetup(nameVal) {
  var wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  nameVal.forEach(function (ele) {
    var player = new _factories_player__WEBPACK_IMPORTED_MODULE_0__["default"](ele, true);
    var playerTab = document.createElement("div");
    playerTab.classList.add("player-tab");
    playerTab.setAttribute("id", ele);
    var headTag = document.createElement("div");
    headTag.textContent = "Hey ".concat(player.name, ", time to place yoour ships!");
    headTag.classList.add("head-tag");
    var boardUI = loadBoard();
    var shipBar = document.createElement("div");
    shipBar.classList.add("ship-bar");
    shipInit().forEach(function (element) {
      var image = document.createElement("img");
      image.src = element.icon;
      image.alt = element.name;
      image.setAttribute("id", element.name);
      image.classList.add("block");
      shipBar.appendChild(image);
    });
    var button = document.createElement("button");
    button.classList.add("button", "start-btn");
    button.textContent = "Start Game!";
    [headTag, boardUI, shipBar, button].forEach(function (element) {
      playerTab.appendChild(element);
    });
    wrapper.appendChild(playerTab);
  });
}

/***/ }),

/***/ "./src/modules/util/ship-info.js":
/*!***************************************!*\
  !*** ./src/modules/util/ship-info.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shipdtls)
/* harmony export */ });
function shipdtls() {
  return {
    Carrier: {
      name: "Carrier",
      length: 5,
      icon: ""
    },
    Submarine: {
      name: "Submarine",
      length: 4,
      icon: ""
    },
    Destroyer: {
      name: "Destroyer",
      length: 3,
      icon: ""
    },
    Frigate: {
      name: "Frigate",
      length: 2,
      icon: ""
    }
  };
}

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_components_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/components/base */ "./src/modules/components/base.js");
/* harmony import */ var _modules_css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/css/main.scss */ "./src/modules/css/main.scss");


(0,_modules_components_base__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/modules/css/main.scss":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/modules/css/main.scss ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/background.webp */ "./src/assets/background.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Federant&family=Indie+Flower&family=Titan+One&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".md-48 {\n  font-size: 48px;\n}\n\n.block {\n  display: block;\n}\n\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nbody {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 100vh;\n}\n\nheader {\n  box-sizing: border-box;\n  width: 100%;\n  height: 10vh;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  background: #f1f5f9;\n  background: -webkit-linear-gradient(left, #f1f5f9, #000);\n  background: linear-gradient(to right, #f1f5f9, #000);\n  font-family: \"Titan One\", cursive;\n  font-weight: 500;\n  font-size: 2rem;\n}\nheader img {\n  box-sizing: border-box;\n  width: 4rem;\n  height: 4rem;\n}\n\nnav {\n  box-sizing: border-box;\n  width: 100%;\n  height: 8vh;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: flex-end;\n  background: #f1f5f9;\n  background: -webkit-linear-gradient(left, #f1f5f9, #000);\n  background: linear-gradient(to right, #f1f5f9, #000);\n  border-bottom: 0.3rem double #f1f5f9;\n}\nnav button {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  height: 100%;\n  width: 12rem;\n  font-family: \"Federant\", cursive;\n  font-size: 0.8rem;\n  position: relative;\n  transition: all 0.3s ease;\n  color: #f1f5f9;\n  background-color: transparent;\n  border: none;\n}\nnav button::after, nav button::before {\n  content: \"\";\n  box-sizing: border-box;\n  width: 0.75rem;\n  height: 0.75rem;\n  position: absolute;\n  transition: all 0.4s ease-in-out;\n  opacity: 0;\n}\nnav button::before {\n  content: \"\";\n  transform: translate(-100%, 50%);\n  border-top: 3px solid #0ff;\n  border-right: 3px solid #0ff;\n  right: 0;\n  top: 0;\n}\nnav button::after {\n  content: \"\";\n  transform: translate(-100%, 50%);\n  border-bottom: 3px solid #0ff;\n  border-left: 3px solid #0ff;\n  left: 0;\n  bottom: 0;\n}\nnav button:hover {\n  color: #0ff;\n}\nnav button.active {\n  background-color: #777;\n}\nnav button:hover::after, nav button:hover::before, nav button.active::after, nav button.active::before {\n  transform: translate(0, 0);\n  opacity: 1;\n}\n\nmain {\n  box-sizing: content-box;\n  width: calc(100% - 4rem);\n  padding: 2rem;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-color: linear-gradient(to bottom, rgba(241, 245, 249, 0.6), rgba(0, 0, 0, 0.3));\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\nfooter {\n  box-sizing: border-box;\n  width: 100%;\n  height: 10vh;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  background: #f1f5f9;\n  background: -webkit-linear-gradient(left, #f1f5f9, #000);\n  background: linear-gradient(to right, #f1f5f9, #000);\n  border-top: 0.3rem double #f1f5f9;\n}\nfooter div {\n  font-family: \"Federant\", cursive;\n  font-size: 1rem;\n}\nfooter a {\n  display: block;\n  border-radius: 100%;\n}\nfooter a img {\n  box-sizing: border-box;\n  width: 2rem;\n  height: 2rem;\n  transition: transform 0.5s ease-in-out;\n}\nfooter a img:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n\n.wrapper {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  gap: 1.3rem;\n  padding: 2rem;\n  color: #f1f5f9;\n  background-color: rgba(0, 0, 0, 0.7);\n  border: 0.3rem solid #000;\n  border-radius: 3rem;\n}\n.wrapper .form-group {\n  position: relative;\n  width: 80%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 10px;\n  font-family: \"Titan One\", cursive;\n}\n.wrapper .form-group input {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 20px;\n  font-family: \"Indie Flower\", Helvetica, Arial, sans-serif;\n  font-weight: 800;\n  letter-spacing: 1px;\n  color: #09f;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #f1f5f9;\n}\n.wrapper .form-group input:focus {\n  outline: 0;\n  border-bottom: 2px solid #09f;\n}\n.wrapper .form-group input:focus ~ .bar::before, .wrapper .form-group input:focus ~ .bar::before {\n  width: 50%;\n}\n.wrapper .form-group input:focus ~ label, .wrapper .form-group input:not(:placeholder-shown) ~ label {\n  top: -10px;\n  color: #09f;\n}\n.wrapper .form-group label {\n  position: absolute;\n  top: 3px;\n  color: #f1f5f9;\n  pointer-events: none;\n  transition: 0.2s ease all;\n}\n\n.button {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  position: relative;\n  text-align: center;\n  padding: 0.5rem 0rem;\n  border: 0 solid #f1f5f9;\n  width: 10rem;\n  line-height: 1rem;\n  background-color: #0ff;\n  color: #000;\n  text-decoration: none;\n  font-family: \"Federant\", cursive;\n  cursor: pointer;\n  transform: rotate(-2deg);\n  user-select: none;\n}\n.button:focus {\n  outline: 0;\n}\n.button::after {\n  content: \"\";\n  position: absolute;\n  border: 1px solid #000;\n  bottom: 0.25rem;\n  left: 0.25rem;\n  width: calc(100% - 1px);\n  height: calc(100% - 1px);\n}\n.button:hover::after {\n  bottom: 0.125rem;\n  left: 0.125rem;\n}", "",{"version":3,"sources":["webpack://./src/modules/css/_mix.scss","webpack://./../../../My%20Repositories/jsIntermediate/Battleship/src/modules/css/main.scss","webpack://./src/modules/css/normalize.css","webpack://./src/modules/css/main.scss"],"names":[],"mappings":"AAaA;EACC,eAAA;ACXD;;ADcA;EACC,cAAA;ACXD;;ACPA,2EAAA;AAEA;+EAAA;AAGA;;;EAAA;AAKC;EACA,iBAAA;EAAmB,MAAA;EACnB,8BAAA;EAAgC,MAAA;ADSjC;;ACNE;4EAAA;AAGA;;EAAA;AAIA;EACD,SAAA;ADOD;;ACJE;;EAAA;AAIA;EACD,cAAA;ADMD;;ACHE;;;EAAA;AAKA;EACD,cAAA;EACA,gBAAA;ADKD;;ACFE;4EAAA;AAGA;;;EAAA;AAKA;EACD,uBAAA;EAAyB,MAAA;EACzB,SAAA;EAAW,MAAA;EACX,iBAAA;EAAmB,MAAA;ADMpB;;ACHE;;;EAAA;AAKA;EACD,iCAAA;EAAmC,MAAA;EACnC,cAAA;EAAgB,MAAA;ADOjB;;ACJE;4EAAA;AAGA;;EAAA;AAIA;EACD,6BAAA;ADKD;;ACFE;;;EAAA;AAKA;EACD,mBAAA;EAAqB,MAAA;EACrB,0BAAA;EAA4B,MAAA;EAC5B,iCAAA;EAAmC,MAAA;ADOpC;;ACJE;;EAAA;AAIA;;EAED,mBAAA;ADMD;;ACHE;;;EAAA;AAKA;;;EAGD,iCAAA;EAAmC,MAAA;EACnC,cAAA;EAAgB,MAAA;ADOjB;;ACJE;;EAAA;AAIA;EACD,cAAA;ADMD;;ACHE;;;EAAA;AAKA;;EAED,cAAA;EACA,cAAA;EACA,kBAAA;EACA,wBAAA;ADKD;;ACFE;EACD,eAAA;ADKD;;ACFE;EACD,WAAA;ADKD;;ACFE;4EAAA;AAGA;;EAAA;AAIA;EACD,kBAAA;ADGD;;ACAE;4EAAA;AAGA;;;EAAA;AAKA;;;;;EAKD,oBAAA;EAAsB,MAAA;EACtB,eAAA;EAAiB,MAAA;EACjB,iBAAA;EAAmB,MAAA;EACnB,SAAA;EAAW,MAAA;ADKZ;;ACFE;;;EAAA;AAKA;;EACQ,MAAA;EACT,iBAAA;ADKD;;ACFE;;;EAAA;AAKA;;EACS,MAAA;EACV,oBAAA;ADKD;;ACFE;;EAAA;AAIA;;;;EAID,0BAAA;ADID;;ACDE;;EAAA;AAIA;;;;EAID,kBAAA;EACA,UAAA;ADGD;;ACAE;;EAAA;AAIA;;;;EAID,8BAAA;ADED;;ACCE;;EAAA;AAIA;EACD,8BAAA;ADCD;;ACEE;;;;;EAAA;AAOA;EACD,sBAAA;EAAwB,MAAA;EACxB,cAAA;EAAgB,MAAA;EAChB,cAAA;EAAgB,MAAA;EAChB,eAAA;EAAiB,MAAA;EACjB,UAAA;EAAY,MAAA;EACZ,mBAAA;EAAqB,MAAA;ADMtB;;ACHE;;EAAA;AAIA;EACD,wBAAA;ADKD;;ACFE;;EAAA;AAIA;EACD,cAAA;ADID;;ACDE;;;EAAA;AAKA;;EAED,sBAAA;EAAwB,MAAA;EACxB,UAAA;EAAY,MAAA;ADKb;;ACFE;;EAAA;AAIA;;EAED,YAAA;ADID;;ACDE;;;EAAA;AAKA;EACD,6BAAA;EAA+B,MAAA;EAC/B,oBAAA;EAAsB,MAAA;ADKvB;;ACFE;;EAAA;AAIA;EACD,wBAAA;ADID;;ACDE;;;EAAA;AAKA;EACD,0BAAA;EAA4B,MAAA;EAC5B,aAAA;EAAe,MAAA;ADKhB;;ACFE;4EAAA;AAGA;;EAAA;AAIA;EACD,cAAA;ADGD;;ACAE;;EAAA;AAIA;EACD,kBAAA;ADED;;ACCE;4EAAA;AAGA;;EAAA;AAIA;EACD,aAAA;ADAD;;ACGE;;EAAA;AAIA;EACD,aAAA;ADDD;;AEvVA;EHmBC,aAAA;EACA,wBAAA;EACA,8BGpB0B;EHqB1B,mBAJmD;EGhBnD,iBAAA;AF6VD;;AE1VA;EHqBC,sBAAA;EACA,WGrBiB;EHsBjB,YGtBuB;EHavB,aAAA;EACA,qBAAA;EACA,uBAHkC;EAIlC,mBAJmD;EGVnD,SAAA;EHgCA,mBAzCO;EAoDN,wDAAA;EACA,oDAAA;EGzCD,iCHHO;EGIP,gBAAA;EACA,eAAA;AFmWD;AEjWC;EHWA,sBAAA;EACA,WGXkB;EHYlB,YGZkB;AFqWnB;;AEjWA;EHMC,sBAAA;EACA,WGNiB;EHOjB,WGPuB;EHFvB,aAAA;EACA,qBAAA;EACA,uBGCuB;EHAvB,qBAAA;EAkBA,mBAzCO;EAoDN,wDAAA;EACA,oDAAA;EG5BD,oCAAA;AF2WD;AEzWC;EHPA,aAAA;EACA,qBAAA;EACA,uBAHkC;EAIlC,mBAJmD;EGUlD,WAAA;EACA,YAAA;EACA,YAAA;EACA,gCHzBO;EG0BP,iBAAA;EAEA,kBAAA;EACA,yBAAA;EACA,cHrCM;EGsCN,6BAAA;EACA,YAAA;AF6WF;AE3WE;EACC,WAAA;EHfF,sBAAA;EACA,cGemB;EHdnB,eGcmB;EACjB,kBAAA;EACA,gCAAA;EACA,UAAA;AF+WH;AE5WE;EACC,WAAA;EACA,gCAAA;EAEA,0BAAA;EACA,4BAAA;EACA,QAAA;EACA,MAAA;AF6WH;AE1WE;EACC,WAAA;EACA,gCAAA;EAEA,6BAAA;EACA,2BAAA;EACA,OAAA;EACA,SAAA;AF2WH;AExWE;EACC,WHnEI;AC6aP;AEvWE;EACC,sBHxEM;ACibT;AEtWE;EAEC,0BAAA;EACA,UAAA;AFuWH;;AElWA;EACC,uBAAA;EACA,wBAAA;EACA,aAAA;EHpEA,aAAA;EACA,wBAAA;EACA,uBAHkC;EAIlC,mBAJmD;EGwEnD,SAAA;EAEA,yDAAA;EACA,0FAAA;EAGA,sBAAA;EACA,2BAAA;EACA,4BAAA;AFoWD;;AEjWA;EH3EC,sBAAA;EACA,WG2EiB;EH1EjB,YG0EuB;EHnFvB,aAAA;EACA,qBAAA;EACA,uBAHkC;EAIlC,mBAJmD;EGsFnD,WAAA;EHhEA,mBAzCO;EAoDN,wDAAA;EACA,oDAAA;EGsDD,iCAAA;AF2WD;AEzWC;EACC,gCHvGO;EGwGP,eAAA;AF2WF;AExWC;EACC,cAAA;EACA,mBAAA;AF0WF;AExWE;EH3FD,sBAAA;EACA,WG2FmB;EH1FnB,YG0FmB;EACjB,sCAAA;AF4WH;AE1WG;EACC,oCAAA;AF4WJ;;AEtWA;EH7GC,aAAA;EACA,wBAAA;EACA,uBAHkC;EAIlC,mBAJmD;EGgHnD,WAAA;EACA,aAAA;EAEA,cHtIO;EGuIP,oCAAA;EACA,yBAAA;EACA,mBAAA;AF2WD;AEzWC;EACC,kBAAA;EACA,UAAA;EHzHD,aAAA;EACA,wBAAA;EACA,2BGyH4B;EHxH5B,mBAJmD;EG6HlD,aAAA;EACA,iCHxIM;ACqfR;AE3WE;EACC,cAAA;EHzHF,sBAAA;EACA,WGyHmB;EHxHnB,YGwHyB;EAEvB,yDH/IM;EGgJN,gBAAA;EACA,mBAAA;EACA,WHtJM;EGwJN,6BAAA;EACA,YAAA;EACA,gCAAA;AF6WH;AE3WG;EACC,UAAA;EACA,6BAAA;AF6WJ;AE3WI;EACC,UAAA;AF6WL;AEzWG;EACC,UAAA;EACA,WHvKK;ACkhBT;AEvWE;EACC,kBAAA;EACA,QAAA;EAEA,cHnLK;EGoLL,oBAAA;EACA,yBAAA;AFwWH;;AEjWA;EHxKC,aAAA;EACA,qBAAA;EACA,uBAHkC;EAIlC,mBAJmD;EG2KnD,sBAAA;EACA,kBAAA;EACA,kBAAA;EAEA,oBAAA;EACA,uBAAA;EACA,YAAA;EACA,iBAAA;EAEA,sBHpMM;EGqMN,WHvMM;EGwMN,qBAAA;EACA,gCHnMQ;EGoMR,eAAA;EAEA,wBAAA;EACA,iBAAA;AFoWD;AElWC;EACC,UAAA;AFoWF;AEjWC;EACC,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,wBAAA;AFmWF;AEhWC;EACC,gBAAA;EACA,cAAA;AFkWF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Federant&family=Indie+Flower&family=Titan+One&display=swap');\n\n$light: #f1f5f9;\n$dark: #000;\n$l-dark: #777;\n$cyan: #0ff;\n$l-bloo: #09f;\n$bloo: #00f;\n\n$fedora: \"Federant\", cursive;\n$flower: \"Indie Flower\", Helvetica, Arial, sans-serif;\n$titan: \"Titan One\", cursive;\n\n.md-48 {\n\tfont-size: 48px;\n}\n\n.block {\n\tdisplay: block;\n}\n\n@mixin flex($dir: row, $just-cont: center, $alg-it: center, $wrp: nowrap) {\n\tdisplay: flex;\n\tflex-flow: $dir $wrp;\n\tjustify-content: $just-cont;\n\talign-items: $alg-it;\n}\n\n@mixin box($width, $height: $width) {\n\tbox-sizing: border-box;\n\twidth: $width;\n\theight: $height;\n}\n\n@mixin shadow($col: #fff) {\n\ttext-shadow: 1px 1px 0px $col,\n\t\t-1px 1px 0px $col,\n\t\t1px -1px 0px $col,\n\t\t-1px -1px 0px $col;\n}\n\n@mixin gradient($start-color, $end-color, $orientation) {\n\n\tbackground: $start-color;\n\n\t@if $orientation =='vertical' {\n\n\t\tbackground: -webkit-linear-gradient(top, $start-color, $end-color);\n\t\tbackground: linear-gradient(to bottom, $start-color, $end-color);\n\n\t}\n\n\t@else if $orientation =='horizontal' {\n\n\t\tbackground: -webkit-linear-gradient(left, $start-color, $end-color);\n\t\tbackground: linear-gradient(to right, $start-color, $end-color);\n\n\t}\n\n\t@else {\n\n\t\tbackground: -webkit-radial-gradient(center, ellipse cover, $start-color, $end-color);\n\t\tbackground: radial-gradient(ellipse at center, $start-color, $end-color);\n\n\t}\n}","@import url(\"https://fonts.googleapis.com/css2?family=Federant&family=Indie+Flower&family=Titan+One&display=swap\");\n.md-48 {\n  font-size: 48px;\n}\n\n.block {\n  display: block;\n}\n\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nbody {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 100vh;\n}\n\nheader {\n  box-sizing: border-box;\n  width: 100%;\n  height: 10vh;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  background: #f1f5f9;\n  background: -webkit-linear-gradient(left, #f1f5f9, #000);\n  background: linear-gradient(to right, #f1f5f9, #000);\n  font-family: \"Titan One\", cursive;\n  font-weight: 500;\n  font-size: 2rem;\n}\nheader img {\n  box-sizing: border-box;\n  width: 4rem;\n  height: 4rem;\n}\n\nnav {\n  box-sizing: border-box;\n  width: 100%;\n  height: 8vh;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: flex-end;\n  background: #f1f5f9;\n  background: -webkit-linear-gradient(left, #f1f5f9, #000);\n  background: linear-gradient(to right, #f1f5f9, #000);\n  border-bottom: 0.3rem double #f1f5f9;\n}\nnav button {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  height: 100%;\n  width: 12rem;\n  font-family: \"Federant\", cursive;\n  font-size: 0.8rem;\n  position: relative;\n  transition: all 0.3s ease;\n  color: #f1f5f9;\n  background-color: transparent;\n  border: none;\n}\nnav button::after, nav button::before {\n  content: \"\";\n  box-sizing: border-box;\n  width: 0.75rem;\n  height: 0.75rem;\n  position: absolute;\n  transition: all 0.4s ease-in-out;\n  opacity: 0;\n}\nnav button::before {\n  content: \"\";\n  transform: translate(-100%, 50%);\n  border-top: 3px solid #0ff;\n  border-right: 3px solid #0ff;\n  right: 0;\n  top: 0;\n}\nnav button::after {\n  content: \"\";\n  transform: translate(-100%, 50%);\n  border-bottom: 3px solid #0ff;\n  border-left: 3px solid #0ff;\n  left: 0;\n  bottom: 0;\n}\nnav button:hover {\n  color: #0ff;\n}\nnav button.active {\n  background-color: #777;\n}\nnav button:hover::after, nav button:hover::before, nav button.active::after, nav button.active::before {\n  transform: translate(0, 0);\n  opacity: 1;\n}\n\nmain {\n  box-sizing: content-box;\n  width: calc(100% - 4rem);\n  padding: 2rem;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  background-image: url(../../assets/background.webp);\n  background-color: linear-gradient(to bottom, rgba(241, 245, 249, 0.6), rgba(0, 0, 0, 0.3));\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\nfooter {\n  box-sizing: border-box;\n  width: 100%;\n  height: 10vh;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  background: #f1f5f9;\n  background: -webkit-linear-gradient(left, #f1f5f9, #000);\n  background: linear-gradient(to right, #f1f5f9, #000);\n  border-top: 0.3rem double #f1f5f9;\n}\nfooter div {\n  font-family: \"Federant\", cursive;\n  font-size: 1rem;\n}\nfooter a {\n  display: block;\n  border-radius: 100%;\n}\nfooter a img {\n  box-sizing: border-box;\n  width: 2rem;\n  height: 2rem;\n  transition: transform 0.5s ease-in-out;\n}\nfooter a img:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n\n.wrapper {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  gap: 1.3rem;\n  padding: 2rem;\n  color: #f1f5f9;\n  background-color: rgba(0, 0, 0, 0.7);\n  border: 0.3rem solid #000;\n  border-radius: 3rem;\n}\n.wrapper .form-group {\n  position: relative;\n  width: 80%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 10px;\n  font-family: \"Titan One\", cursive;\n}\n.wrapper .form-group input {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 20px;\n  font-family: \"Indie Flower\", Helvetica, Arial, sans-serif;\n  font-weight: 800;\n  letter-spacing: 1px;\n  color: #09f;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #f1f5f9;\n}\n.wrapper .form-group input:focus {\n  outline: 0;\n  border-bottom: 2px solid #09f;\n}\n.wrapper .form-group input:focus ~ .bar::before, .wrapper .form-group input:focus ~ .bar::before {\n  width: 50%;\n}\n.wrapper .form-group input:focus ~ label, .wrapper .form-group input:not(:placeholder-shown) ~ label {\n  top: -10px;\n  color: #09f;\n}\n.wrapper .form-group label {\n  position: absolute;\n  top: 3px;\n  color: #f1f5f9;\n  pointer-events: none;\n  transition: 0.2s ease all;\n}\n\n.button {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  position: relative;\n  text-align: center;\n  padding: 0.5rem 0rem;\n  border: 0 solid #f1f5f9;\n  width: 10rem;\n  line-height: 1rem;\n  background-color: #0ff;\n  color: #000;\n  text-decoration: none;\n  font-family: \"Federant\", cursive;\n  cursor: pointer;\n  transform: rotate(-2deg);\n  user-select: none;\n}\n.button:focus {\n  outline: 0;\n}\n.button::after {\n  content: \"\";\n  position: absolute;\n  border: 1px solid #000;\n  bottom: 0.25rem;\n  left: 0.25rem;\n  width: calc(100% - 1px);\n  height: calc(100% - 1px);\n}\n.button:hover::after {\n  bottom: 0.125rem;\n  left: 0.125rem;\n}","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n\t ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n\tmargin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n\tdisplay: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n\tfont-size: 2em;\n\tmargin: 0.67em 0;\n  }\n  \n  /* Grouping content\n\t ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n\tbox-sizing: content-box; /* 1 */\n\theight: 0; /* 1 */\n\toverflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n\tfont-family: monospace, monospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n\t ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n\tbackground-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n\tborder-bottom: none; /* 1 */\n\ttext-decoration: underline; /* 2 */\n\ttext-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n\tfont-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n\tfont-family: monospace, monospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n\tfont-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n  }\n  \n  sub {\n\tbottom: -0.25em;\n  }\n  \n  sup {\n\ttop: -0.5em;\n  }\n  \n  /* Embedded content\n\t ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n\tborder-style: none;\n  }\n  \n  /* Forms\n\t ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n\toverflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n\ttext-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n\t-webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n\tpadding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n\tbox-sizing: border-box; /* 1 */\n\tcolor: inherit; /* 2 */\n\tdisplay: table; /* 1 */\n\tmax-width: 100%; /* 1 */\n\tpadding: 0; /* 3 */\n\twhite-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n\tvertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n\toverflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n\tbox-sizing: border-box; /* 1 */\n\tpadding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n\theight: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type=\"search\"] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type=\"search\"]::-webkit-search-decoration {\n\t-webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n  }\n  \n  /* Interactive\n\t ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n\tdisplay: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n\tdisplay: list-item;\n  }\n  \n  /* Misc\n\t ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n\tdisplay: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n\tdisplay: none;\n  }","@use \"mix\";\n@use \"normalize\";\n\nbody {\n\t@include mix.flex(column, space-between);\n\tmin-height: 100vh;\n}\n\nheader {\n\t@include mix.box(100%, 10vh);\n\t@include mix.flex();\n\tgap: 1rem;\n\t@include mix.gradient(mix.$light, mix.$dark, horizontal);\n\n\tfont-family: mix.$titan;\n\tfont-weight: 500;\n\tfont-size: 2rem;\n\n\t& img {\n\t\t@include mix.box(4rem);\n\t}\n}\n\nnav {\n\t@include mix.box(100%, 8vh);\n\t@include mix.flex(row, center, flex-end);\n\t@include mix.gradient(mix.$light, mix.$dark, horizontal);\n\tborder-bottom: 0.3rem double mix.$light;\n\n\t& button {\n\t\t@include mix.flex();\n\t\tgap: 0.5rem;\n\t\theight: 100%;\n\t\twidth: 12rem;\n\t\tfont-family: mix.$fedora;\n\t\tfont-size: 0.8rem;\n\n\t\tposition: relative;\n\t\ttransition: all 0.3s ease;\n\t\tcolor: mix.$light;\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\n\t\t&::after, &::before {\n\t\t\tcontent: \"\";\n\t\t\t@include mix.box(0.75rem);\n\t\t\tposition: absolute;\n\t\t\ttransition: all 0.4s ease-in-out;\n\t\t\topacity: 0;\n\t\t}\n\n\t\t&::before {\n\t\t\tcontent: \"\";\n\t\t\ttransform: translate(-100%, 50%);\n\n\t\t\tborder-top: 3px solid mix.$cyan;\n\t\t\tborder-right: 3px solid mix.$cyan;\n\t\t\tright: 0;\n\t\t\ttop: 0;\n\t\t}\n\n\t\t&::after {\n\t\t\tcontent: \"\";\n\t\t\ttransform: translate(-100%, 50%);\n\n\t\t\tborder-bottom: 3px solid mix.$cyan;\n\t\t\tborder-left: 3px solid mix.$cyan;\n\t\t\tleft: 0;\n\t\t\tbottom: 0;\n\t\t}\n\n\t\t&:hover {\n\t\t\tcolor: mix.$cyan;\n\t\t}\n\n\t\t&.active {\n\t\t\tbackground-color: mix.$l-dark;\n\t\t}\n\n\t\t&:hover::after, &:hover::before,\n\t\t&.active::after, &.active::before {\n\t\t\ttransform: translate(0, 0);\n\t\t\topacity: 1;\n\t\t}\n\t}\n}\n\nmain {\n\tbox-sizing: content-box;\n\twidth: calc(100% - 4rem);\n\tpadding: 2rem;\n\n\t@include mix.flex(column);\n\tgap: 2rem;\n\t\n\tbackground-image: url(../../assets/background.webp);\n\tbackground-color: linear-gradient(to bottom,\n\t\t\trgba(mix.$light, 0.6),\n\t\t\trgba(mix.$dark, 0.3));\n\tbackground-size: cover;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n}\n\nfooter {\n\t@include mix.box(100%, 10vh);\n\t@include mix.flex();\n\tgap: 0.5rem;\n\t@include mix.gradient(mix.$light, mix.$dark, horizontal);\n\tborder-top: 0.3rem double mix.$light;\n\n\t& div {\n\t\tfont-family: mix.$fedora;\n\t\tfont-size: 1rem;\n\t}\n\n\t& a {\n\t\tdisplay: block;\n\t\tborder-radius: 100%;\n\n\t\t& img {\n\t\t\t@include mix.box(2rem);\n\t\t\ttransition: transform 0.5s ease-in-out;\n\n\t\t\t&:hover {\n\t\t\t\ttransform: rotate(360deg) scale(1.2);\n\t\t\t}\n\t\t}\n\t}\n}\n\n.wrapper {\n\t@include mix.flex(column);\n\tgap: 1.3rem;\n\tpadding: 2rem;\n\n\tcolor: mix.$light;\n\tbackground-color: rgba(mix.$dark, 0.7);\n\tborder: 0.3rem solid mix.$dark;\n\tborder-radius: 3rem;\n\n\t& .form-group {\n\t\tposition: relative;\n\t\twidth: 80%;\n\n\t\t@include mix.flex( column, flex-start );\n\t\tpadding: 10px;\n\t\tfont-family: mix.$titan;\n\n\t\t& input {\n\t\t\tdisplay: block;\n\t\t\t@include mix.box(100%, 20px);\n\n\t\t\tfont-family: mix.$flower;\n\t\t\tfont-weight: 800;\n\t\t\tletter-spacing: 1px;\n\t\t\tcolor: mix.$l-bloo;\n\n\t\t\tbackground-color: transparent;\n\t\t\tborder: none;\n\t\t\tborder-bottom:1px solid mix.$light;\n\n\t\t\t&:focus {\n\t\t\t\toutline: 0;\n\t\t\t\tborder-bottom: 2px solid mix.$l-bloo; \n\n\t\t\t\t& ~ .bar::before, & ~ .bar::before {\n\t\t\t\t\twidth: 50%;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&:focus ~ label, &:not(:placeholder-shown) ~ label {\n\t\t\t\ttop: -10px;\n\t\t\t\tcolor: mix.$l-bloo;\n\t\t\t}\n\t\t}\n\n\t\t& label {\n\t\t\tposition: absolute;\n\t\t\ttop: 3px;\n\n\t\t\tcolor: mix.$light;\n\t\t\tpointer-events: none;\n\t\t\ttransition: 0.2s ease all;\n\t\t}\n\t}\n}\n\n\n\n.button {\n\t@include mix.flex();\n\tbox-sizing: border-box;\n\tposition: relative;\n\ttext-align: center;\n\n\tpadding: .5rem 0rem;\n\tborder: 0 solid mix.$light;\n\twidth: 10rem;\n\tline-height: 1rem;\n\n\tbackground-color: mix.$cyan;\n\tcolor: mix.$dark;\n\ttext-decoration: none;\n\tfont-family: mix.$fedora;\n\tcursor: pointer;\n\n\ttransform: rotate(-2deg);\n\tuser-select: none;\n\n\t&:focus {\n\t\toutline: 0;\n\t}\n\n\t&::after {\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\tborder: 1px solid mix.$dark;\n\t\tbottom: 0.25rem;\n\t\tleft: 0.25rem;\n\t\twidth: calc(100% - 1px);\n\t\theight: calc(100% - 1px);\n\t}\n\n\t&:hover::after {\n\t\tbottom: 0.125rem;\n\t\tleft: 0.125rem;\n\t}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/modules/css/main.scss":
/*!***********************************!*\
  !*** ./src/modules/css/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/modules/css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/background.webp":
/*!************************************!*\
  !*** ./src/assets/background.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/background.webp";

/***/ }),

/***/ "./src/assets/discord.webp":
/*!*********************************!*\
  !*** ./src/assets/discord.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/discord.webp";

/***/ }),

/***/ "./src/assets/github.png":
/*!*******************************!*\
  !*** ./src/assets/github.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/github.png";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/logo.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxLQUFLLFdBQVcsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxPQUFPLEtBQUssS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sT0FBTyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sS0FBSyxNQUFNLE1BQU0sS0FBSyxLQUFLLFdBQVcsTUFBTSxPQUFPLEtBQUssS0FBSyxXQUFXLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLE9BQU8sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxPQUFPLEtBQUssU0FBUyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLFVBQVUsTUFBTSxPQUFPLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxPQUFPLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssUUFBUSxXQUFXLE1BQU0sTUFBTSxLQUFLLFFBQVEsV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFFBQVEsV0FBVyxNQUFNLE1BQU0sS0FBSyxLQUFLLFdBQVcsTUFBTSxTQUFTLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxLQUFLLFdBQVcsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sT0FBTyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxPQUFPLEtBQUssS0FBSyxXQUFXLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxLQUFLLEtBQUssV0FBVyxNQUFNLE9BQU8sS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxLQUFLLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxhQUFhLGNBQWMsYUFBYSxPQUFPLE1BQU0sWUFBWSxZQUFZLGNBQWMsV0FBVyxXQUFXLFlBQVksYUFBYSxXQUFXLGFBQWEsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxRQUFRLE1BQU0sV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksWUFBWSxhQUFhLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksY0FBYyxZQUFZLFdBQVcsWUFBWSxhQUFhLFlBQVksYUFBYSxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFB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OztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvbG9hZC1zdGFydC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9vbmUtcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3R3by1wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2ZhY3Rvcmllcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2ZhY3Rvcmllcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2ZhY3Rvcmllcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy91dGlsL2JvYXJkZ2VuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy91dGlsL2luaXQtYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3V0aWwvc2hpcC1pbmZvLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9jc3MvbWFpbi5zY3NzP2NjODkiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgb25lUGxheSBmcm9tIFwiLi9vbmUtcGxheWVyXCI7XG5pbXBvcnQgdHdvUGxheSBmcm9tIFwiLi90d28tcGxheWVyXCI7XG5cbmltcG9ydCBEaXNjb3JkTG9nbyBmcm9tIFwiLi4vLi4vYXNzZXRzL2Rpc2NvcmQud2VicFwiO1xuaW1wb3J0IEdpdGh1YkxvZ28gZnJvbSBcIi4uLy4uL2Fzc2V0cy9naXRodWIucG5nXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4uLy4uL2Fzc2V0cy9sb2dvLnBuZ1wiO1xuXG5mdW5jdGlvbiBtYWtlaGVhZGVyKCkge1xuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXHRjb25zdCBoZWFkZXJUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cdGNvbnN0IGhlYWRlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cblx0aGVhZGVyVHh0LnRleHRDb250ZW50ID0gXCJCYXR0bGVzaGlwIVwiO1xuXHRoZWFkZXJUeHQuY2xhc3NMaXN0LmFkZChcImhlYWRlci10eHRcIiwgXCJibG9ja1wiKTtcblx0aGVhZGVySW1nLnNyYyA9IEltYWdlO1xuXHRoZWFkZXJJbWcuYWx0ID0gXCJMb2dvIEltYWdlXCI7XG5cdGhlYWRlckltZy5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWltZ1wiLCBcImJsb2NrXCIpO1xuXG5cdFtoZWFkZXJUeHQsIGhlYWRlckltZ10uZm9yRWFjaChlbGUgPT4ge1xuXHRcdGhlYWRlci5hcHBlbmRDaGlsZChlbGUpO1xuXHR9KTtcblx0cmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gbWFrZU5hdigpIHtcblx0Y29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblx0Y29uc3QgdHdvUGxheWVyTW9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGNvbnN0IG9uZVBsYXllck1vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRjb25zdCBhY3RpdmF0ZUJ0biA9IGJ0biA9PiB7XG5cdFx0bmF2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikuZm9yRWFjaChidXR0b24gPT4ge1xuXHRcdFx0YnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0fSk7XG5cdFx0YnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdH07XG5cblx0dHdvUGxheWVyTW9kZS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+Z3JvdXA8L3NwYW4+PHNwYW4+UGxheWVyIHZzLiBQbGF5ZXI8L3NwYW4+YDtcblx0b25lUGxheWVyTW9kZS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+ZHZyPC9zcGFuPjxzcGFuPlBsYXllciB2cy4gQ29tcHV0ZXI8L3NwYW4+YDtcblx0dHdvUGxheWVyTW9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG5cdFx0aWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuXHRcdGFjdGl2YXRlQnRuKHR3b1BsYXllck1vZGUpO1xuXHRcdHR3b1BsYXkoKTtcblx0fSk7XG5cdG9uZVBsYXllck1vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuXHRcdGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcblx0XHRhY3RpdmF0ZUJ0bihvbmVQbGF5ZXJNb2RlKTtcblx0XHRvbmVQbGF5KCk7XG5cdH0pO1xuXG5cdFtvbmVQbGF5ZXJNb2RlLCB0d29QbGF5ZXJNb2RlXS5mb3JFYWNoKGVsZSA9PiB7XG5cdFx0bmF2LmFwcGVuZENoaWxkKGVsZSk7XG5cdH0pO1xuXHRyZXR1cm4geyBuYXYsIGFjdGl2YXRlQnRuIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VCb2R5KCkge1xuXHRjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5cdG1haW4uc3R5bGUuZmxleEdyb3cgPSBcIjFcIjtcblx0cmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIG1ha2VGb290ZXIoKSB7XG5cdGNvbnN0IGZvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXHRjb25zdCBkaXNjb3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGNvbnN0IGdpdGh1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRjb25zdCBmb290VHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgZm9vdEFyciA9IFtkaXNjb3JkLCBmb290VHh0LCBnaXRodWJdO1xuXG5cdGZvb3RUeHQudGV4dENvbnRlbnQgPSBgTWFkZSB3aXRoIOKZpSBieSBMb2Z0eSBCcmFtYmxlc2A7XG5cdGZvb3RBcnIuZm9yRWFjaCgoZWxlLCBpKSA9PiB7XG5cdFx0aWYgKGkgIT09IDEpIHtcblx0XHRcdGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0XHRcdGlmIChpID09PSAwKSB7XG5cdFx0XHRcdGVsZS5ocmVmID0gXCIgaHR0cHM6Ly9kaXNjb3JkLmNvbS91c2Vycy83NDAwOTQxNDMzNzk4MDAxNTZcIjtcblx0XHRcdFx0aW1hZ2Uuc3JjID0gRGlzY29yZExvZ287XG5cdFx0XHRcdGltYWdlLmFsdCA9IFwiZGlzY29yZFwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9Mb2Z0eS1CcmFtYmxlcy9yZXN0dWFyYW50LXBhZ2VcIjtcblx0XHRcdFx0aW1hZ2Uuc3JjID0gR2l0aHViTG9nbztcblx0XHRcdFx0aW1hZ2UuYWx0ID0gXCJnaXRodWJcIjtcblx0XHRcdH07XG5cdFx0XHRlbGUuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXHRcdH07XG5cdFx0Zm9vdC5hcHBlbmRDaGlsZChlbGUpO1xuXHR9KTtcblx0cmV0dXJuIGZvb3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRQYWdlKCkge1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1ha2VoZWFkZXIoKSk7XG5cdGNvbnN0IHsgbmF2IH0gPSBtYWtlTmF2KCk7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmF2KTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWtlQm9keSgpKTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWtlRm9vdGVyKCkpO1xuXG5cdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblx0bGluay5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xuXHRsaW5rLnNldEF0dHJpYnV0ZShcblx0XHRcImhyZWZcIixcblx0XHRcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDQ4LDQwMCwwLDBcIlxuXHQpO1xuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuXG5cdGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbChcIm5hdiA+IGJ1dHRvblwiKVswXS5jbGljaygpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFN0YXJ0TW9kYWwobW9kZSkge1xuXHRjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0d3JhcHBlci5jbGFzc0xpc3QuYWRkKFwid3JhcHBlclwiKTtcblxuXHRpZiAobW9kZSA9PT0gXCJzaW5nbGVcIikge1xuXHRcdGNvbnN0IGlucCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRpbnAuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCIgXCIpO1xuXHRcdGlucC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCB0cnVlKTtcblx0XHRjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0XHRsYWJlbC5pbm5lckhUTUwgPSBgTmFtZTxzcGFuIGNsYXNzPVwicmVkXCI+Kjwvc3Bhbj5gO1xuXG5cdFx0Y29uc3QgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGdyb3VwLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWdyb3VwXCIpO1xuXHRcdGdyb3VwLmFwcGVuZENoaWxkKGlucCk7XG5cdFx0Z3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG5cdFx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRidXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiLCBcInN0YXJ0LWJ0blwiKTtcblx0XHRidXR0b24udGV4dENvbnRlbnQgPSBcIlN0YXJ0IEdhbWUhXCI7XG5cdFx0W2dyb3VwLCBidXR0b25dLmZvckVhY2goZWxlID0+IHtcblx0XHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlKTtcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBncm91cDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGdyb3VwMS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1ncm91cFwiKTtcblx0XHRjb25zdCBncm91cDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGdyb3VwMi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1ncm91cFwiKTtcblxuXHRcdFtncm91cDEsIGdyb3VwMl0uZm9yRWFjaCgoZWxlLCBpKSA9PiB7XG5cdFx0XHRjb25zdCBpbnAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0XHRpbnAuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCIgXCIpO1xuXHRcdFx0aW5wLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIHRydWUpO1xuXHRcdFx0Y29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdFx0XHRsYWJlbC5pbm5lckhUTUwgPSBgTmFtZSAke2krMX08c3BhbiBjbGFzcz1cInJlZFwiPio8L3NwYW4+YDtcblxuXHRcdFx0ZWxlLmFwcGVuZENoaWxkKGlucCk7XG5cdFx0XHRlbGUuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdH0pO1xuXG5cdFx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRidXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiLCBcInN0YXJ0LWJ0blwiKTtcblx0XHRidXR0b24udGV4dENvbnRlbnQgPSBcIlN0YXJ0IEdhbWUhXCI7XG5cdFx0W2dyb3VwMSwgZ3JvdXAyLCBidXR0b25dLmZvckVhY2goZWxlID0+IHtcblx0XHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlKTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblx0bWFpbi5pbm5lckhUTUwgPSBudWxsO1xuXHRtYWluLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xufVxuIiwiaW1wb3J0IGluaXRCb2FyZFNldHVwIGZyb20gXCIuLi91dGlsL2luaXQtYm9hcmRcIjtcbmltcG9ydCBsb2FkU3RhcnRNb2RhbCBmcm9tIFwiLi9sb2FkLXN0YXJ0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uZVBsYXkoKSB7XG5cdGxvYWRTdGFydE1vZGFsKFwic2luZ2xlXCIpO1xuXG5cdGNvbnN0IG5hbWVWYWwgPSBbXTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuXHRcdGNvbnN0IG5hbWVzID0gZS50YXJnZXQucHJldmlvdXNTaWJsaW5nLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcblx0XHRuYW1lcy5mb3JFYWNoKGVsZSA9PiB7XG5cdFx0XHRuYW1lVmFsLnB1c2goZWxlLnZhbHVlKTtcblx0XHR9KTtcblx0fSk7XG5cdGluaXRCb2FyZFNldHVwKG5hbWVWYWwpO1xufSIsImltcG9ydCBpbml0Qm9hcmRTZXR1cCBmcm9tIFwiLi4vdXRpbC9pbml0LWJvYXJkXCI7XG5pbXBvcnQgbG9hZFN0YXJ0TW9kYWwgZnJvbSBcIi4vbG9hZC1zdGFydFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0d29QbGF5KCkge1xuXHRsb2FkU3RhcnRNb2RhbChcImR1YWxcIik7XG5cblx0Y29uc3QgbmFtZVZhbCA9IFtdO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG5cdFx0Y29uc3QgbmFtZXMgPSBlLnRhcmdldC5wcmV2aW91c1NpYmxpbmcucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xuXHRcdG5hbWVzLmZvckVhY2goZWxlID0+IHtcblx0XHRcdG5hbWVWYWwucHVzaChlbGUudmFsdWUpO1xuXHRcdH0pO1xuXHR9KTtcblx0aW5pdEJvYXJkU2V0dXAobmFtZVZhbCk7XG59IiwiaW1wb3J0IGdlbmVyYXRlQm9hcmQgZnJvbSBcIi4uL3V0aWwvYm9hcmRnZW5cIjtcblxuY29uc3QgdGVzdEluaXRCb2FyZCA9ICgpID0+IHt9O1xuY29uc3Qgc3BhY2VDaGVjayA9IChib2FyZCwgbGVuZ3RoLCBwb3NpdGlvbiwgZGlyZWN0aW9uKSA9PiB7XG5cdGlmIChkaXJlY3Rpb24gPT09IFwieFwiKSB7XG5cdFx0Zm9yIChsZXQgaSA9IHBvc2l0aW9uWzFdOyBpIDwgcG9zaXRpb25bMV0gKyBsZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGJvYXJkW3Bvc2l0aW9uWzBdXVtpXSA9PT0gXCJoaWRkZW4tc2hpcFwiIHx8IGkgPj0gNykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJTaGlwIGRvZXNuJ3QgZml0IGluIGJvYXJkLlwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInlcIikge1xuXHRcdGZvciAobGV0IGkgPSBwb3NpdGlvblswXTsgaSA8IHBvc2l0aW9uWzBdICsgbGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChib2FyZFtpXVtwb3NpdGlvblsxXV0gPT09IFwiaGlkZGVuLXNoaXBcIiB8fCBpID49IDcpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiU2hpcCBkb2Vzbid0IGZpdCBpbiBib2FyZC5cIik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuY29uc3QgcGFyc2VBcnJheSA9IChhcnJheSwgdGFyZ2V0KSA9PlxuXHRhcnJheS5maW5kSW5kZXgodmFsID0+IEpTT04uc3RyaW5naWZ5KHRhcmdldCkgPT09IEpTT04uc3RyaW5naWZ5KHZhbCkpO1xuXG5jbGFzcyBCb2FyZCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuYm9hcmQgPSBnZW5lcmF0ZUJvYXJkKCk7XG5cdFx0dGhpcy5zaGlwcyA9IFtdO1xuXHR9XG5cblx0cGxhY2VTaGlwKHNoaXApIHtcblx0XHRjb25zdCB7IGxlbmd0aCwgcG9zaXRpb24sIGF4aXMgfSA9IHNoaXA7XG5cdFx0c3BhY2VDaGVjayh0aGlzLmJvYXJkLCBsZW5ndGgsIHBvc2l0aW9uLCBheGlzKTtcblx0XHRpZiAoIXRoaXMuc2hpcHMuaW5jbHVkZXMoc2hpcCkpIHtcblx0XHRcdHRoaXMuc2hpcHMucHVzaChzaGlwKTtcblx0XHR9XG5cdFx0aWYgKGF4aXMgPT09IFwieFwiKSB7XG5cdFx0XHRmb3IgKFxuXHRcdFx0XHRsZXQgaW5kZXggPSBwb3NpdGlvblsxXTtcblx0XHRcdFx0aW5kZXggPCBwb3NpdGlvblsxXSArIGxlbmd0aDtcblx0XHRcdFx0aW5kZXgrK1xuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuYm9hcmRbcG9zaXRpb25bMF1dW2luZGV4XSA9IFwiaGlkZGVuLXNoaXBcIjtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGF4aXMgPT09IFwieVwiKSB7XG5cdFx0XHRmb3IgKFxuXHRcdFx0XHRsZXQgaW5kZXggPSBwb3NpdGlvblswXTtcblx0XHRcdFx0aW5kZXggPCBwb3NpdGlvblswXSArIGxlbmd0aDtcblx0XHRcdFx0aW5kZXgrK1xuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuYm9hcmRbaW5kZXhdW3Bvc2l0aW9uWzFdXSA9IFwiaGlkZGVuLXNoaXBcIjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZWNlaXZlQXR0YWNrKGEsIGIpIHtcblx0XHRpZiAoIU51bWJlci5pc0ludGVnZXIoYSkgfHwgYSA+PSA3IHx8IGEgPCAwKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHRcIlRoZSBhcmd1bWVudCBpcyBub3QgYSBwcm9wZXIgcG9zaXRpb24gY29vcmRpbmF0ZS5cIlxuXHRcdFx0KTtcblx0XHRpZiAoIU51bWJlci5pc0ludGVnZXIoYikgfHwgYiA+PSA3IHx8IGIgPCAwKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHRcIlRoZSBhcmd1bWVudCBpcyBub3QgYSBwcm9wZXIgcG9zaXRpb24gY29vcmRpbmF0ZS5cIlxuXHRcdFx0KTtcblxuXHRcdGlmIChcblx0XHRcdHRoaXMuYm9hcmRbYV1bYl0gPT09IFwiZm91bmQtc2hpcFwiIHx8XG5cdFx0XHR0aGlzLmJvYXJkW2FdW2JdID09PSBcIm1pc3NlZFwiXG5cdFx0KSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdFwiWW91IGNhbm5vdCBoaXQgYSBzcG90IHRoYXQgeW91IGhhZCBhbHJlYWR5IGhpdCBiZWZvcmUuXCJcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuYm9hcmRbYV1bYl0gPT09IFwiaGlkZGVuLXNoaXBcIikge1xuXHRcdFx0dGhpcy5ib2FyZFthXVtiXSA9IFwiZm91bmQtc2hpcFwiO1xuXHRcdFx0dGhpcy5zaGlwcy5mb3JFYWNoKHNoaXBQcmVzZW50ID0+IHtcblx0XHRcdFx0Y29uc3QgYXJyYXkgPSBzaGlwUHJlc2VudC5jb29yZFNldCgpO1xuXHRcdFx0XHRjb25zdCBpbmRleCA9IHBhcnNlQXJyYXkoYXJyYXksIFthLCBiXSk7XG5cdFx0XHRcdGlmIChpbmRleCAhPT0gLTEpIHNoaXBQcmVzZW50LmhpdHMoaW5kZXgpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuYm9hcmRbYV1bYl0gPT09IFwiZW1wdHlcIikge1xuXHRcdFx0dGhpcy5ib2FyZFthXVtiXSA9IFwibWlzc2VkXCI7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGFsbFN1bmsoKSB7XG5cdFx0Y29uc3Qgc3Vua0FyciA9IFtdO1xuXHRcdHRoaXMuc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcblx0XHRcdHN1bmtBcnIucHVzaChzaGlwLmlzU3VuaygpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gc3Vua0Fyci5pbmRleE9mKGZhbHNlKSA9PT0gLTE7XG5cdH1cblxuXHRmaW5kVGFrZW5Nb3ZlcygpIHtcblx0XHRjb25zdCBwb3NpdGlvbnMgPSBbXTtcblx0XHRmb3IoIGxldCBpID0gMDsgaSA8IDc7IGkrKyApIHtcblx0XHRcdGZvciggbGV0IGogPSAwOyBqIDwgNzsgaisrICkge1xuXHRcdFx0XHRpZiAodGhpcy5ib2FyZFtpXVtqXSA9PT0gXCJmb3VuZC1zaGlwXCIgfHwgdGhpcy5ib2FyZFtpXVtqXSA9PT0gXCJtaXNzZWRcIikge1xuXHRcdFx0XHRcdHBvc2l0aW9ucy5wdXNoKFtpLCBqXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHBvc2l0aW9ucztcblx0fVxufVxuXG5leHBvcnQgeyBCb2FyZCwgdGVzdEluaXRCb2FyZCB9O1xuIiwiaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcblx0Y29uc3RydWN0b3IobmFtZSwgdHVybiwgdHlwZSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWUgPz8gXCJVc2VyXCI7XG5cdFx0dGhpcy50dXJuID0gdHVybiA/PyBmYWxzZTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlID8/IFwiUGxheWVyXCI7XG5cdFx0dGhpcy5ib2FyZHNldCA9IG5ldyBCb2FyZDtcblx0fVxuXG5cdHRvZ2dsZVR1cm4oKSB7XG5cdFx0dGhpcy50dXJuID0gIXRoaXMudHVybjtcblx0fVxuXG5cdGF0dGFja1JlY2VpdmVkKGksIGopIHtcblx0XHRpZiAoIXRoaXMudHVybikgdGhyb3cgbmV3IEVycm9yKFwiV3JvbmcgcGxheWVyIHR1cm4uXCIpO1xuXHRcdGlmICh0aGlzLnR5cGUgIT09IFwiUGxheWVyXCIpIHRocm93IG5ldyBFcnJvcihcIk5vbiBodW1hbiBQbGF5ZXIuXCIpO1xuXHRcdGNvbnN0IG1hcmtlZCA9IHRoaXMuYm9hcmRzZXQucmVjZWl2ZUF0dGFjayhpLCBqKTtcblx0XHRyZXR1cm4gbWFya2VkO1xuXHR9XG59IiwiaW1wb3J0IHNoaXBkdGxzIGZyb20gXCIuLi91dGlsL3NoaXAtaW5mb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcblx0Y29uc3RydWN0b3Ioc2hpcFR5cGUsIHBvc2l0aW9uKSB7XG5cdFx0Y29uc3QgeyBuYW1lLCBsZW5ndGgsIGljb24gfSA9IHNoaXBkdGxzKClbc2hpcFR5cGVdO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5sZW5ndGggPSBsZW5ndGg7XG5cdFx0dGhpcy5pY29uID0gaWNvbjtcblxuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcblx0XHR0aGlzLmF4aXMgPSBcInhcIjtcblx0XHR0aGlzLmhpdEFyciA9IEFycmF5KGxlbmd0aCkuZmlsbChmYWxzZSk7XG5cdH1cblxuXHRjaGFuZ2VBeGlzID0gYXhpc0FyZyA9PiB7XG5cdFx0aWYgKGF4aXNBcmcpIHtcblx0XHRcdHRoaXMuYXhpcyA9IGF4aXNBcmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYXhpcyA9IHRoaXMuYXhpcyA9PT0gXCJ4XCIgPyBcInlcIiA6IFwieFwiO1xuXHRcdH1cblx0fTtcblxuXHRoaXRzID0gaW5kZXggPT4ge1xuXHRcdGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5sZW5ndGgpIHRoaXMuaGl0QXJyW2luZGV4XSA9IHRydWU7XG5cdH07XG5cblx0Y29vcmRTZXQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgYXJyYXkgPSBbXTtcblx0XHRjb25zdCB7IGF4aXMsIHBvc2l0aW9uLCBsZW5ndGggfSA9IHRoaXM7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0YXJyYXkucHVzaChcblx0XHRcdFx0YXhpcyA9PT0gXCJ4XCJcblx0XHRcdFx0XHQ/IFtwb3NpdGlvblswXSwgcG9zaXRpb25bMV0gKyBpXVxuXHRcdFx0XHRcdDogW3Bvc2l0aW9uWzBdICsgaSwgcG9zaXRpb25bMV1dXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gYXJyYXk7XG5cdH07XG5cblx0aXNTdW5rID0gKCkgPT4gdGhpcy5oaXRBcnIuaW5kZXhPZihmYWxzZSkgPT09IC0xO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVCb2FyZCgpIHtcblx0Y29uc3QgYXJyYXkgPSBbXTtcblx0Zm9yICggbGV0IGkgPSAwOyBpIDwgNzsgaSsrICkge1xuXHRcdGNvbnN0IG5ld0FyciA9IG5ldyBBcnJheSg3KS5maWxsKFwiZW1wdHlcIik7XG5cdFx0YXJyYXkucHVzaChuZXdBcnIpO1xuXHR9XG5cdHJldHVybiBhcnJheTtcbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuLi9mYWN0b3JpZXMvcGxheWVyXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi4vZmFjdG9yaWVzL3NoaXBcIjtcblxuZnVuY3Rpb24gc2hpcEluaXQoKSB7XG5cdHJldHVybiBbXG5cdFx0bmV3IFNoaXAoXCJDYXJyaWVyXCIsIFswLCAwXSksXG5cdFx0bmV3IFNoaXAoXCJTdWJtYXJpbmVcIiwgWzAsIDBdKSxcblx0XHRuZXcgU2hpcChcIkRlc3Ryb3llclwiLCBbMCwgMF0pLFxuXHRcdG5ldyBTaGlwKFwiRnJpZ2F0ZVwiLCBbMCwgMF0pXG5cdF07XG59XG5cbmZ1bmN0aW9uIGxvYWRCb2FyZCgpIHtcblx0Y29uc3QgYm9hcmRVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGJvYXJkVUkuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpO1xuXHRmb3IgKCBsZXQgaSA9IDA7IGkgPCA3OyBpKysgKSB7XG5cdFx0Zm9yICggbGV0IGogPSAwOyBqIDwgNzsgaisrICkge1xuXHRcdFx0Y29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuXHRcdFx0Y2VsbC5kYXRhc2V0LnggPSBpO1xuXHRcdFx0Y2VsbC5kYXRhc2V0LnkgPSBqO1xuXHRcdFx0Ym9hcmRVSS5hcHBlbmRDaGlsZChjZWxsKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGJvYXJkVUk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRCb2FyZFNldHVwKG5hbWVWYWwpIHtcblx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBwZXJcIik7XG5cblx0bmFtZVZhbC5mb3JFYWNoKGVsZSA9PiB7XG5cdFx0Y29uc3QgcGxheWVyID0gbmV3IFBsYXllcihlbGUsIHRydWUpO1xuXHRcdGNvbnN0IHBsYXllclRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0cGxheWVyVGFiLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItdGFiXCIpO1xuXHRcdHBsYXllclRhYi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBlbGUpO1xuXG5cdFx0Y29uc3QgaGVhZFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0aGVhZFRhZy50ZXh0Q29udGVudCA9IGBIZXkgJHtwbGF5ZXIubmFtZX0sIHRpbWUgdG8gcGxhY2UgeW9vdXIgc2hpcHMhYDtcblx0XHRoZWFkVGFnLmNsYXNzTGlzdC5hZGQoXCJoZWFkLXRhZ1wiKTtcblx0XHRcblx0XHRjb25zdCBib2FyZFVJID0gbG9hZEJvYXJkKCk7XG5cblx0XHRjb25zdCBzaGlwQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRzaGlwQmFyLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWJhclwiKTtcblx0XHRzaGlwSW5pdCgpLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0XHRjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdFx0XHRpbWFnZS5zcmMgPSBlbGVtZW50Lmljb247XG5cdFx0XHRpbWFnZS5hbHQgPSBlbGVtZW50Lm5hbWU7XG5cdFx0XHRpbWFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBlbGVtZW50Lm5hbWUpO1xuXHRcdFx0aW1hZ2UuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIpO1xuXHRcdFx0c2hpcEJhci5hcHBlbmRDaGlsZChpbWFnZSk7XG5cdFx0fSk7XG5cblx0XHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIsIFwic3RhcnQtYnRuXCIpO1xuXHRcdGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3RhcnQgR2FtZSFcIjtcblxuXHRcdFtoZWFkVGFnLCBib2FyZFVJLCBzaGlwQmFyLCBidXR0b25dLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0XHRwbGF5ZXJUYWIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdFx0fSk7XG5cdFx0d3JhcHBlci5hcHBlbmRDaGlsZChwbGF5ZXJUYWIpO1xuXHR9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGlwZHRscygpIHtcblx0cmV0dXJuIHtcblx0XHRDYXJyaWVyOiB7XG5cdFx0XHRuYW1lOiBcIkNhcnJpZXJcIixcblx0XHRcdGxlbmd0aDogNSxcblx0XHRcdGljb246IFwiXCJcblx0XHR9LFxuXHRcdFN1Ym1hcmluZToge1xuXHRcdFx0bmFtZTogXCJTdWJtYXJpbmVcIixcblx0XHRcdGxlbmd0aDogNCxcblx0XHRcdGljb246IFwiXCJcblx0XHR9LFxuXHRcdERlc3Ryb3llcjoge1xuXHRcdFx0bmFtZTogXCJEZXN0cm95ZXJcIixcblx0XHRcdGxlbmd0aDogMyxcblx0XHRcdGljb246IFwiXCJcblx0XHR9LFxuXHRcdEZyaWdhdGU6IHtcblx0XHRcdG5hbWU6IFwiRnJpZ2F0ZVwiLFxuXHRcdFx0bGVuZ3RoOiAyLFxuXHRcdFx0aWNvbjogXCJcIlxuXHRcdH1cblx0fTtcbn0iLCJpbXBvcnQgaW5pdFBhZ2UgZnJvbSBcIi4vbW9kdWxlcy9jb21wb25lbnRzL2Jhc2VcIjtcbmltcG9ydCBcIi4vbW9kdWxlcy9jc3MvbWFpbi5zY3NzXCI7XG5cbmluaXRQYWdlKCk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZlZGVyYW50JmZhbWlseT1JbmRpZStGbG93ZXImZmFtaWx5PVRpdGFuK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1kLTQ4IHtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuLmJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAvKiAxICovXFxuICBoZWlnaHQ6IDA7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7XFxuICAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIG1hcmdpbjogMDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5bdHlwZT1idXR0b25dLFxcblt0eXBlPXJlc2V0XSxcXG5bdHlwZT1zdWJtaXRdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1idXR0b25dOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1zdWJtaXRdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9YnV0dG9uXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1yZXNldF06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9c3VibWl0XTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7XFxuICAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuW3R5cGU9Y2hlY2tib3hdLFxcblt0eXBlPXJhZGlvXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblt0eXBlPXNlYXJjaF0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2YxZjVmOSwgIzAwMCk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmMWY1ZjksICMwMDApO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaXRhbiBPbmVcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuaGVhZGVyIGltZyB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbm5hdiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDh2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGJhY2tncm91bmQ6ICNmMWY1Zjk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZjFmNWY5LCAjMDAwKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2YxZjVmOSwgIzAwMCk7XFxuICBib3JkZXItYm90dG9tOiAwLjNyZW0gZG91YmxlICNmMWY1Zjk7XFxufVxcbm5hdiBidXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEycmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGZWRlcmFudFxcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICBjb2xvcjogI2YxZjVmOTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5uYXYgYnV0dG9uOjphZnRlciwgbmF2IGJ1dHRvbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAwLjc1cmVtO1xcbiAgaGVpZ2h0OiAwLjc1cmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5uYXYgYnV0dG9uOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgNTAlKTtcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMGZmO1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzBmZjtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbn1cXG5uYXYgYnV0dG9uOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCA1MCUpO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwZmY7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwZmY7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5uYXYgYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjMGZmO1xcbn1cXG5uYXYgYnV0dG9uLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xcbn1cXG5uYXYgYnV0dG9uOmhvdmVyOjphZnRlciwgbmF2IGJ1dHRvbjpob3Zlcjo6YmVmb3JlLCBuYXYgYnV0dG9uLmFjdGl2ZTo6YWZ0ZXIsIG5hdiBidXR0b24uYWN0aXZlOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5tYWluIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDRyZW0pO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNDEsIDI0NSwgMjQ5LCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbmZvb3RlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2YxZjVmOSwgIzAwMCk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmMWY1ZjksICMwMDApO1xcbiAgYm9yZGVyLXRvcDogMC4zcmVtIGRvdWJsZSAjZjFmNWY5O1xcbn1cXG5mb290ZXIgZGl2IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmVkZXJhbnRcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5mb290ZXIgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcbmZvb3RlciBhIGltZyB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXG59XFxuZm9vdGVyIGEgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS4zcmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGNvbG9yOiAjZjFmNWY5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgYm9yZGVyOiAwLjNyZW0gc29saWQgIzAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XFxufVxcbi53cmFwcGVyIC5mb3JtLWdyb3VwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LWZhbWlseTogXFxcIlRpdGFuIE9uZVxcXCIsIGN1cnNpdmU7XFxufVxcbi53cmFwcGVyIC5mb3JtLWdyb3VwIGlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbmRpZSBGbG93ZXJcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBjb2xvcjogIzA5ZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWY1Zjk7XFxufVxcbi53cmFwcGVyIC5mb3JtLWdyb3VwIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA5ZjtcXG59XFxuLndyYXBwZXIgLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMgfiAuYmFyOjpiZWZvcmUsIC53cmFwcGVyIC5mb3JtLWdyb3VwIGlucHV0OmZvY3VzIH4gLmJhcjo6YmVmb3JlIHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcbi53cmFwcGVyIC5mb3JtLWdyb3VwIGlucHV0OmZvY3VzIH4gbGFiZWwsIC53cmFwcGVyIC5mb3JtLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gbGFiZWwge1xcbiAgdG9wOiAtMTBweDtcXG4gIGNvbG9yOiAjMDlmO1xcbn1cXG4ud3JhcHBlciAuZm9ybS1ncm91cCBsYWJlbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDNweDtcXG4gIGNvbG9yOiAjZjFmNWY5O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtIDByZW07XFxuICBib3JkZXI6IDAgc29saWQgI2YxZjVmOTtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmZjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGZWRlcmFudFxcXCIsIGN1cnNpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uYnV0dG9uOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBib3R0b206IDAuMjVyZW07XFxuICBsZWZ0OiAwLjI1cmVtO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDFweCk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDFweCk7XFxufVxcbi5idXR0b246aG92ZXI6OmFmdGVyIHtcXG4gIGJvdHRvbTogMC4xMjVyZW07XFxuICBsZWZ0OiAwLjEyNXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvY3NzL19taXguc2Nzc1wiLFwid2VicGFjazovLy4vLi4vLi4vLi4vTXklMjBSZXBvc2l0b3JpZXMvanNJbnRlcm1lZGlhdGUvQmF0dGxlc2hpcC9zcmMvbW9kdWxlcy9jc3MvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9jc3Mvbm9ybWFsaXplLmNzc1wiLFwid2VicGFjazovLy4vc3JjL21vZHVsZXMvY3NzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFhQTtFQUNDLGVBQUE7QUNYRDs7QURjQTtFQUNDLGNBQUE7QUNYRDs7QUNQQSwyRUFBQTtBQUVBOytFQUFBO0FBR0E7OztFQUFBO0FBS0M7RUFDQSxpQkFBQTtFQUFtQixNQUFBO0VBQ25CLDhCQUFBO0VBQWdDLE1BQUE7QURTakM7O0FDTkU7NEVBQUE7QUFHQTs7RUFBQTtBQUlBO0VBQ0QsU0FBQTtBRE9EOztBQ0pFOztFQUFBO0FBSUE7RUFDRCxjQUFBO0FETUQ7O0FDSEU7OztFQUFBO0FBS0E7RUFDRCxjQUFBO0VBQ0EsZ0JBQUE7QURLRDs7QUNGRTs0RUFBQTtBQUdBOzs7RUFBQTtBQUtBO0VBQ0QsdUJBQUE7RUFBeUIsTUFBQTtFQUN6QixTQUFBO0VBQVcsTUFBQTtFQUNYLGlCQUFBO0VBQW1CLE1BQUE7QURNcEI7O0FDSEU7OztFQUFBO0FBS0E7RUFDRCxpQ0FBQTtFQUFtQyxNQUFBO0VBQ25DLGNBQUE7RUFBZ0IsTUFBQTtBRE9qQjs7QUNKRTs0RUFBQTtBQUdBOztFQUFBO0FBSUE7RUFDRCw2QkFBQTtBREtEOztBQ0ZFOzs7RUFBQTtBQUtBO0VBQ0QsbUJBQUE7RUFBcUIsTUFBQTtFQUNyQiwwQkFBQTtFQUE0QixNQUFBO0VBQzVCLGlDQUFBO0VBQW1DLE1BQUE7QURPcEM7O0FDSkU7O0VBQUE7QUFJQTs7RUFFRCxtQkFBQTtBRE1EOztBQ0hFOzs7RUFBQTtBQUtBOzs7RUFHRCxpQ0FBQTtFQUFtQyxNQUFBO0VBQ25DLGNBQUE7RUFBZ0IsTUFBQTtBRE9qQjs7QUNKRTs7RUFBQTtBQUlBO0VBQ0QsY0FBQTtBRE1EOztBQ0hFOzs7RUFBQTtBQUtBOztFQUVELGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBREtEOztBQ0ZFO0VBQ0QsZUFBQTtBREtEOztBQ0ZFO0VBQ0QsV0FBQTtBREtEOztBQ0ZFOzRFQUFB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QTtFQUNBLFdHeUhtQjtFSHhIbkIsWUd3SHlCO0VBRXZCLHlESC9JTTtFR2dKTixnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0h0Sk07RUd3Sk4sNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUY2V0g7QUUzV0c7RUFDQyxVQUFBO0VBQ0EsNkJBQUE7QUY2V0o7QUUzV0k7RUFDQyxVQUFBO0FGNldMO0FFeldHO0VBQ0MsVUFBQTtFQUNBLFdIdktLO0FDa2hCVDtBRXZXRTtFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUVBLGNIbkxLO0VHb0xMLG9CQUFBO0VBQ0EseUJBQUE7QUZ3V0g7O0FFaldBO0VIeEtDLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUhrQztFQUlsQyxtQkFKbUQ7RUcyS25ELHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkhwTU07RUdxTU4sV0h2TU07RUd3TU4scUJBQUE7RUFDQSxnQ0huTVE7RUdvTVIsZUFBQTtFQUVBLHdCQUFBO0VBQ0EsaUJBQUE7QUZvV0Q7QUVsV0M7RUFDQyxVQUFBO0FGb1dGO0FFaldDO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUZtV0Y7QUVoV0M7RUFDQyxnQkFBQTtFQUNBLGNBQUE7QUZrV0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmVkZXJhbnQmZmFtaWx5PUluZGllK0Zsb3dlciZmYW1pbHk9VGl0YW4rT25lJmRpc3BsYXk9c3dhcCcpO1xcblxcbiRsaWdodDogI2YxZjVmOTtcXG4kZGFyazogIzAwMDtcXG4kbC1kYXJrOiAjNzc3O1xcbiRjeWFuOiAjMGZmO1xcbiRsLWJsb286ICMwOWY7XFxuJGJsb286ICMwMGY7XFxuXFxuJGZlZG9yYTogXFxcIkZlZGVyYW50XFxcIiwgY3Vyc2l2ZTtcXG4kZmxvd2VyOiBcXFwiSW5kaWUgRmxvd2VyXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4kdGl0YW46IFxcXCJUaXRhbiBPbmVcXFwiLCBjdXJzaXZlO1xcblxcbi5tZC00OCB7XFxuXFx0Zm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4uYmxvY2sge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5AbWl4aW4gZmxleCgkZGlyOiByb3csICRqdXN0LWNvbnQ6IGNlbnRlciwgJGFsZy1pdDogY2VudGVyLCAkd3JwOiBub3dyYXApIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZmxvdzogJGRpciAkd3JwO1xcblxcdGp1c3RpZnktY29udGVudDogJGp1c3QtY29udDtcXG5cXHRhbGlnbi1pdGVtczogJGFsZy1pdDtcXG59XFxuXFxuQG1peGluIGJveCgkd2lkdGgsICRoZWlnaHQ6ICR3aWR0aCkge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0d2lkdGg6ICR3aWR0aDtcXG5cXHRoZWlnaHQ6ICRoZWlnaHQ7XFxufVxcblxcbkBtaXhpbiBzaGFkb3coJGNvbDogI2ZmZikge1xcblxcdHRleHQtc2hhZG93OiAxcHggMXB4IDBweCAkY29sLFxcblxcdFxcdC0xcHggMXB4IDBweCAkY29sLFxcblxcdFxcdDFweCAtMXB4IDBweCAkY29sLFxcblxcdFxcdC0xcHggLTFweCAwcHggJGNvbDtcXG59XFxuXFxuQG1peGluIGdyYWRpZW50KCRzdGFydC1jb2xvciwgJGVuZC1jb2xvciwgJG9yaWVudGF0aW9uKSB7XFxuXFxuXFx0YmFja2dyb3VuZDogJHN0YXJ0LWNvbG9yO1xcblxcblxcdEBpZiAkb3JpZW50YXRpb24gPT0ndmVydGljYWwnIHtcXG5cXG5cXHRcXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7XFxuXFx0XFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTtcXG5cXG5cXHR9XFxuXFxuXFx0QGVsc2UgaWYgJG9yaWVudGF0aW9uID09J2hvcml6b250YWwnIHtcXG5cXG5cXHRcXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnQtY29sb3IsICRlbmQtY29sb3IpO1xcblxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTtcXG5cXG5cXHR9XFxuXFxuXFx0QGVsc2Uge1xcblxcblxcdFxcdGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTtcXG5cXHRcXHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7XFxuXFxuXFx0fVxcbn1cIixcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZlZGVyYW50JmZhbWlseT1JbmRpZStGbG93ZXImZmFtaWx5PVRpdGFuK09uZSZkaXNwbGF5PXN3YXBcXFwiKTtcXG4ubWQtNDgge1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4uYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC8qIDEgKi9cXG4gIGhlaWdodDogMDtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07XFxuICAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcblt0eXBlPWJ1dHRvbl0sXFxuW3R5cGU9cmVzZXRdLFxcblt0eXBlPXN1Ym1pdF0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPXJlc2V0XTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1zdWJtaXRdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5bdHlwZT1jaGVja2JveF0sXFxuW3R5cGU9cmFkaW9dIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuW3R5cGU9c2VhcmNoXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuW3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICAvKiAxICovXFxuICBmb250OiBpbmhlcml0O1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGJhY2tncm91bmQ6ICNmMWY1Zjk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZjFmNWY5LCAjMDAwKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2YxZjVmOSwgIzAwMCk7XFxuICBmb250LWZhbWlseTogXFxcIlRpdGFuIE9uZVxcXCIsIGN1cnNpdmU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5oZWFkZXIgaW1nIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxubmF2IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogOHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgYmFja2dyb3VuZDogI2YxZjVmOTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNmMWY1ZjksICMwMDApO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjFmNWY5LCAjMDAwKTtcXG4gIGJvcmRlci1ib3R0b206IDAuM3JlbSBkb3VibGUgI2YxZjVmOTtcXG59XFxubmF2IGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTJyZW07XFxuICBmb250LWZhbWlseTogXFxcIkZlZGVyYW50XFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIGNvbG9yOiAjZjFmNWY5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbm5hdiBidXR0b246OmFmdGVyLCBuYXYgYnV0dG9uOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDAuNzVyZW07XFxuICBoZWlnaHQ6IDAuNzVyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbm5hdiBidXR0b246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCA1MCUpO1xcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMwZmY7XFxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjMGZmO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxufVxcbm5hdiBidXR0b246OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDUwJSk7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzBmZjtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzBmZjtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcbm5hdiBidXR0b246aG92ZXIge1xcbiAgY29sb3I6ICMwZmY7XFxufVxcbm5hdiBidXR0b24uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XFxufVxcbm5hdiBidXR0b246aG92ZXI6OmFmdGVyLCBuYXYgYnV0dG9uOmhvdmVyOjpiZWZvcmUsIG5hdiBidXR0b24uYWN0aXZlOjphZnRlciwgbmF2IGJ1dHRvbi5hY3RpdmU6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbm1haW4ge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gNHJlbSk7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvYmFja2dyb3VuZC53ZWJwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjQxLCAyNDUsIDI0OSwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjMpKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgYmFja2dyb3VuZDogI2YxZjVmOTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNmMWY1ZjksICMwMDApO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjFmNWY5LCAjMDAwKTtcXG4gIGJvcmRlci10b3A6IDAuM3JlbSBkb3VibGUgI2YxZjVmOTtcXG59XFxuZm9vdGVyIGRpdiB7XFxuICBmb250LWZhbWlseTogXFxcIkZlZGVyYW50XFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuZm9vdGVyIGEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG5mb290ZXIgYSBpbWcge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcbmZvb3RlciBhIGltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEuM3JlbTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBjb2xvcjogI2YxZjVmOTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGJvcmRlcjogMC4zcmVtIHNvbGlkICMwMDA7XFxuICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbn1cXG4ud3JhcHBlciAuZm9ybS1ncm91cCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaXRhbiBPbmVcXFwiLCBjdXJzaXZlO1xcbn1cXG4ud3JhcHBlciAuZm9ybS1ncm91cCBpbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW5kaWUgRmxvd2VyXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY29sb3I6ICMwOWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5O1xcbn1cXG4ud3JhcHBlciAuZm9ybS1ncm91cCBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwOWY7XFxufVxcbi53cmFwcGVyIC5mb3JtLWdyb3VwIGlucHV0OmZvY3VzIH4gLmJhcjo6YmVmb3JlLCAud3JhcHBlciAuZm9ybS1ncm91cCBpbnB1dDpmb2N1cyB+IC5iYXI6OmJlZm9yZSB7XFxuICB3aWR0aDogNTAlO1xcbn1cXG4ud3JhcHBlciAuZm9ybS1ncm91cCBpbnB1dDpmb2N1cyB+IGxhYmVsLCAud3JhcHBlciAuZm9ybS1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB+IGxhYmVsIHtcXG4gIHRvcDogLTEwcHg7XFxuICBjb2xvcjogIzA5ZjtcXG59XFxuLndyYXBwZXIgLmZvcm0tZ3JvdXAgbGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzcHg7XFxuICBjb2xvcjogI2YxZjVmOTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwcmVtO1xcbiAgYm9yZGVyOiAwIHNvbGlkICNmMWY1Zjk7XFxuICB3aWR0aDogMTByZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZmY7XFxuICBjb2xvcjogIzAwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmVkZXJhbnRcXFwiLCBjdXJzaXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmJ1dHRvbjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgYm90dG9tOiAwLjI1cmVtO1xcbiAgbGVmdDogMC4yNXJlbTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxcHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxcHgpO1xcbn1cXG4uYnV0dG9uOmhvdmVyOjphZnRlciB7XFxuICBib3R0b206IDAuMTI1cmVtO1xcbiAgbGVmdDogMC4xMjVyZW07XFxufVwiLFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuIGh0bWwge1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qIFNlY3Rpb25zXFxuXFx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIGJvZHkge1xcblxcdG1hcmdpbjogMDtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gICAqL1xcbiAgXFxuICBtYWluIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGgxIHtcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHRtYXJnaW46IDAuNjdlbSAwO1xcbiAgfVxcbiAgXFxuICAvKiBHcm91cGluZyBjb250ZW50XFxuXFx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAgICovXFxuICBcXG4gIGhyIHtcXG5cXHRib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcblxcdGhlaWdodDogMDsgLyogMSAqL1xcblxcdG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBwcmUge1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuXFx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuICBcXG4gIGEge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGFiYnJbdGl0bGVdIHtcXG5cXHRib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGIsXFxuICBzdHJvbmcge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBjb2RlLFxcbiAga2JkLFxcbiAgc2FtcCB7XFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuXFx0Zm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBzbWFsbCB7XFxuXFx0Zm9udC1zaXplOiA4MCU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICAgKiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgc3ViLFxcbiAgc3VwIHtcXG5cXHRmb250LXNpemU6IDc1JTtcXG5cXHRsaW5lLWhlaWdodDogMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgfVxcbiAgXFxuICBzdWIge1xcblxcdGJvdHRvbTogLTAuMjVlbTtcXG4gIH1cXG4gIFxcbiAgc3VwIHtcXG5cXHR0b3A6IC0wLjVlbTtcXG4gIH1cXG4gIFxcbiAgLyogRW1iZWRkZWQgY29udGVudFxcblxcdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgaW1nIHtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qIEZvcm1zXFxuXFx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uLFxcbiAgaW5wdXQsXFxuICBvcHRncm91cCxcXG4gIHNlbGVjdCxcXG4gIHRleHRhcmVhIHtcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0bWFyZ2luOiAwOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIGlucHV0IHsgLyogMSAqL1xcblxcdG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIHNlbGVjdCB7IC8qIDEgKi9cXG5cXHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIFt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG4gIFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcbiAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG4gIFt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG4gIFt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcbiAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcbiAgW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcbiAgW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuICBbdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcblxcdG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG4gIFxcbiAgZmllbGRzZXQge1xcblxcdHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgbGVnZW5kIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuXFx0Y29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG5cXHRkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcblxcdG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcblxcdHBhZGRpbmc6IDA7IC8qIDMgKi9cXG5cXHR3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gICAqL1xcbiAgXFxuICBwcm9ncmVzcyB7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAgICovXFxuICBcXG4gIHRleHRhcmVhIHtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gICAqL1xcbiAgXFxuICBbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG4gIFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuXFx0cGFkZGluZzogMDsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gICAqL1xcbiAgXFxuICBbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuICBbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcblxcdGhlaWdodDogYXV0bztcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG5cXHRvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gICAqL1xcbiAgXFxuICBbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIDo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuXFx0Zm9udDogaW5oZXJpdDsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKiBJbnRlcmFjdGl2ZVxcblxcdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gICAqL1xcbiAgXFxuICBkZXRhaWxzIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFxcbiAgLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBzdW1tYXJ5IHtcXG5cXHRkaXNwbGF5OiBsaXN0LWl0ZW07XFxuICB9XFxuICBcXG4gIC8qIE1pc2NcXG5cXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICAgKi9cXG4gIFxcbiAgdGVtcGxhdGUge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgW2hpZGRlbl0ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuICB9XCIsXCJAdXNlIFxcXCJtaXhcXFwiO1xcbkB1c2UgXFxcIm5vcm1hbGl6ZVxcXCI7XFxuXFxuYm9keSB7XFxuXFx0QGluY2x1ZGUgbWl4LmZsZXgoY29sdW1uLCBzcGFjZS1iZXR3ZWVuKTtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVyIHtcXG5cXHRAaW5jbHVkZSBtaXguYm94KDEwMCUsIDEwdmgpO1xcblxcdEBpbmNsdWRlIG1peC5mbGV4KCk7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdEBpbmNsdWRlIG1peC5ncmFkaWVudChtaXguJGxpZ2h0LCBtaXguJGRhcmssIGhvcml6b250YWwpO1xcblxcblxcdGZvbnQtZmFtaWx5OiBtaXguJHRpdGFuO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcblxcdCYgaW1nIHtcXG5cXHRcXHRAaW5jbHVkZSBtaXguYm94KDRyZW0pO1xcblxcdH1cXG59XFxuXFxubmF2IHtcXG5cXHRAaW5jbHVkZSBtaXguYm94KDEwMCUsIDh2aCk7XFxuXFx0QGluY2x1ZGUgbWl4LmZsZXgocm93LCBjZW50ZXIsIGZsZXgtZW5kKTtcXG5cXHRAaW5jbHVkZSBtaXguZ3JhZGllbnQobWl4LiRsaWdodCwgbWl4LiRkYXJrLCBob3Jpem9udGFsKTtcXG5cXHRib3JkZXItYm90dG9tOiAwLjNyZW0gZG91YmxlIG1peC4kbGlnaHQ7XFxuXFxuXFx0JiBidXR0b24ge1xcblxcdFxcdEBpbmNsdWRlIG1peC5mbGV4KCk7XFxuXFx0XFx0Z2FwOiAwLjVyZW07XFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdFxcdHdpZHRoOiAxMnJlbTtcXG5cXHRcXHRmb250LWZhbWlseTogbWl4LiRmZWRvcmE7XFxuXFx0XFx0Zm9udC1zaXplOiAwLjhyZW07XFxuXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuXFx0XFx0Y29sb3I6IG1peC4kbGlnaHQ7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0XFx0Ym9yZGVyOiBub25lO1xcblxcblxcdFxcdCY6OmFmdGVyLCAmOjpiZWZvcmUge1xcblxcdFxcdFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdFxcdFxcdEBpbmNsdWRlIG1peC5ib3goMC43NXJlbSk7XFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdFxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0XFx0fVxcblxcblxcdFxcdCY6OmJlZm9yZSB7XFxuXFx0XFx0XFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDUwJSk7XFxuXFxuXFx0XFx0XFx0Ym9yZGVyLXRvcDogM3B4IHNvbGlkIG1peC4kY3lhbjtcXG5cXHRcXHRcXHRib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBtaXguJGN5YW47XFxuXFx0XFx0XFx0cmlnaHQ6IDA7XFxuXFx0XFx0XFx0dG9wOiAwO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmOjphZnRlciB7XFxuXFx0XFx0XFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDUwJSk7XFxuXFxuXFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIG1peC4kY3lhbjtcXG5cXHRcXHRcXHRib3JkZXItbGVmdDogM3B4IHNvbGlkIG1peC4kY3lhbjtcXG5cXHRcXHRcXHRsZWZ0OiAwO1xcblxcdFxcdFxcdGJvdHRvbTogMDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Jjpob3ZlciB7XFxuXFx0XFx0XFx0Y29sb3I6IG1peC4kY3lhbjtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Ji5hY3RpdmUge1xcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IG1peC4kbC1kYXJrO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmOmhvdmVyOjphZnRlciwgJjpob3Zlcjo6YmVmb3JlLFxcblxcdFxcdCYuYWN0aXZlOjphZnRlciwgJi5hY3RpdmU6OmJlZm9yZSB7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuXFx0XFx0XFx0b3BhY2l0eTogMTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5tYWluIHtcXG5cXHRib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG5cXHR3aWR0aDogY2FsYygxMDAlIC0gNHJlbSk7XFxuXFx0cGFkZGluZzogMnJlbTtcXG5cXG5cXHRAaW5jbHVkZSBtaXguZmxleChjb2x1bW4pO1xcblxcdGdhcDogMnJlbTtcXG5cXHRcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2JhY2tncm91bmQud2VicCk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxcXG5cXHRcXHRcXHRyZ2JhKG1peC4kbGlnaHQsIDAuNiksXFxuXFx0XFx0XFx0cmdiYShtaXguJGRhcmssIDAuMykpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbmZvb3RlciB7XFxuXFx0QGluY2x1ZGUgbWl4LmJveCgxMDAlLCAxMHZoKTtcXG5cXHRAaW5jbHVkZSBtaXguZmxleCgpO1xcblxcdGdhcDogMC41cmVtO1xcblxcdEBpbmNsdWRlIG1peC5ncmFkaWVudChtaXguJGxpZ2h0LCBtaXguJGRhcmssIGhvcml6b250YWwpO1xcblxcdGJvcmRlci10b3A6IDAuM3JlbSBkb3VibGUgbWl4LiRsaWdodDtcXG5cXG5cXHQmIGRpdiB7XFxuXFx0XFx0Zm9udC1mYW1pbHk6IG1peC4kZmVkb3JhO1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR9XFxuXFxuXFx0JiBhIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAxMDAlO1xcblxcblxcdFxcdCYgaW1nIHtcXG5cXHRcXHRcXHRAaW5jbHVkZSBtaXguYm94KDJyZW0pO1xcblxcdFxcdFxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcblxcblxcdFxcdFxcdCY6aG92ZXIge1xcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuLndyYXBwZXIge1xcblxcdEBpbmNsdWRlIG1peC5mbGV4KGNvbHVtbik7XFxuXFx0Z2FwOiAxLjNyZW07XFxuXFx0cGFkZGluZzogMnJlbTtcXG5cXG5cXHRjb2xvcjogbWl4LiRsaWdodDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKG1peC4kZGFyaywgMC43KTtcXG5cXHRib3JkZXI6IDAuM3JlbSBzb2xpZCBtaXguJGRhcms7XFxuXFx0Ym9yZGVyLXJhZGl1czogM3JlbTtcXG5cXG5cXHQmIC5mb3JtLWdyb3VwIHtcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0d2lkdGg6IDgwJTtcXG5cXG5cXHRcXHRAaW5jbHVkZSBtaXguZmxleCggY29sdW1uLCBmbGV4LXN0YXJ0ICk7XFxuXFx0XFx0cGFkZGluZzogMTBweDtcXG5cXHRcXHRmb250LWZhbWlseTogbWl4LiR0aXRhbjtcXG5cXG5cXHRcXHQmIGlucHV0IHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRcXHRAaW5jbHVkZSBtaXguYm94KDEwMCUsIDIwcHgpO1xcblxcblxcdFxcdFxcdGZvbnQtZmFtaWx5OiBtaXguJGZsb3dlcjtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogODAwO1xcblxcdFxcdFxcdGxldHRlci1zcGFjaW5nOiAxcHg7XFxuXFx0XFx0XFx0Y29sb3I6IG1peC4kbC1ibG9vO1xcblxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcdFxcdFxcdGJvcmRlcjogbm9uZTtcXG5cXHRcXHRcXHRib3JkZXItYm90dG9tOjFweCBzb2xpZCBtaXguJGxpZ2h0O1xcblxcblxcdFxcdFxcdCY6Zm9jdXMge1xcblxcdFxcdFxcdFxcdG91dGxpbmU6IDA7XFxuXFx0XFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIG1peC4kbC1ibG9vOyBcXG5cXG5cXHRcXHRcXHRcXHQmIH4gLmJhcjo6YmVmb3JlLCAmIH4gLmJhcjo6YmVmb3JlIHtcXG5cXHRcXHRcXHRcXHRcXHR3aWR0aDogNTAlO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0Jjpmb2N1cyB+IGxhYmVsLCAmOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gbGFiZWwge1xcblxcdFxcdFxcdFxcdHRvcDogLTEwcHg7XFxuXFx0XFx0XFx0XFx0Y29sb3I6IG1peC4kbC1ibG9vO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0JiBsYWJlbCB7XFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdFxcdHRvcDogM3B4O1xcblxcblxcdFxcdFxcdGNvbG9yOiBtaXguJGxpZ2h0O1xcblxcdFxcdFxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcdFxcdFxcdHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuXFxuXFxuLmJ1dHRvbiB7XFxuXFx0QGluY2x1ZGUgbWl4LmZsZXgoKTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuXFx0cGFkZGluZzogLjVyZW0gMHJlbTtcXG5cXHRib3JkZXI6IDAgc29saWQgbWl4LiRsaWdodDtcXG5cXHR3aWR0aDogMTByZW07XFxuXFx0bGluZS1oZWlnaHQ6IDFyZW07XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogbWl4LiRjeWFuO1xcblxcdGNvbG9yOiBtaXguJGRhcms7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGZvbnQtZmFtaWx5OiBtaXguJGZlZG9yYTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcblxcdCY6Zm9jdXMge1xcblxcdFxcdG91dGxpbmU6IDA7XFxuXFx0fVxcblxcblxcdCY6OmFmdGVyIHtcXG5cXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0Ym9yZGVyOiAxcHggc29saWQgbWl4LiRkYXJrO1xcblxcdFxcdGJvdHRvbTogMC4yNXJlbTtcXG5cXHRcXHRsZWZ0OiAwLjI1cmVtO1xcblxcdFxcdHdpZHRoOiBjYWxjKDEwMCUgLSAxcHgpO1xcblxcdFxcdGhlaWdodDogY2FsYygxMDAlIC0gMXB4KTtcXG5cXHR9XFxuXFxuXFx0Jjpob3Zlcjo6YWZ0ZXIge1xcblxcdFxcdGJvdHRvbTogMC4xMjVyZW07XFxuXFx0XFx0bGVmdDogMC4xMjVyZW07XFxuXFx0fVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVszXSEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVszXSEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7Il0sIm5hbWVzIjpbIm9uZVBsYXkiLCJ0d29QbGF5IiwiRGlzY29yZExvZ28iLCJHaXRodWJMb2dvIiwiSW1hZ2UiLCJtYWtlaGVhZGVyIiwiaGVhZGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaGVhZGVyVHh0IiwiaGVhZGVySW1nIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzcmMiLCJhbHQiLCJmb3JFYWNoIiwiZWxlIiwiYXBwZW5kQ2hpbGQiLCJtYWtlTmF2IiwibmF2IiwidHdvUGxheWVyTW9kZSIsIm9uZVBsYXllck1vZGUiLCJhY3RpdmF0ZUJ0biIsImJ0biIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidXR0b24iLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImNvbnRhaW5zIiwibWFrZUJvZHkiLCJtYWluIiwic3R5bGUiLCJmbGV4R3JvdyIsIm1ha2VGb290ZXIiLCJmb290IiwiZGlzY29yZCIsImdpdGh1YiIsImZvb3RUeHQiLCJmb290QXJyIiwiaSIsImltYWdlIiwiaHJlZiIsImluaXRQYWdlIiwiYm9keSIsImxpbmsiLCJzZXRBdHRyaWJ1dGUiLCJoZWFkIiwiY2xpY2siLCJsb2FkU3RhcnRNb2RhbCIsIm1vZGUiLCJ3cmFwcGVyIiwiaW5wIiwibGFiZWwiLCJncm91cCIsImdyb3VwMSIsImdyb3VwMiIsInF1ZXJ5U2VsZWN0b3IiLCJpbml0Qm9hcmRTZXR1cCIsIm5hbWVWYWwiLCJuYW1lcyIsInByZXZpb3VzU2libGluZyIsInB1c2giLCJ2YWx1ZSIsImdlbmVyYXRlQm9hcmQiLCJ0ZXN0SW5pdEJvYXJkIiwic3BhY2VDaGVjayIsImJvYXJkIiwibGVuZ3RoIiwicG9zaXRpb24iLCJkaXJlY3Rpb24iLCJFcnJvciIsInBhcnNlQXJyYXkiLCJhcnJheSIsImZpbmRJbmRleCIsInZhbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJCb2FyZCIsInNoaXBzIiwic2hpcCIsImF4aXMiLCJpbmNsdWRlcyIsImluZGV4IiwiYSIsImIiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJzaGlwUHJlc2VudCIsImNvb3JkU2V0IiwiaGl0cyIsInN1bmtBcnIiLCJpc1N1bmsiLCJpbmRleE9mIiwicG9zaXRpb25zIiwiaiIsIlBsYXllciIsIm5hbWUiLCJ0dXJuIiwidHlwZSIsImJvYXJkc2V0IiwibWFya2VkIiwicmVjZWl2ZUF0dGFjayIsInNoaXBkdGxzIiwiU2hpcCIsInNoaXBUeXBlIiwiYXhpc0FyZyIsImhpdEFyciIsImljb24iLCJBcnJheSIsImZpbGwiLCJuZXdBcnIiLCJzaGlwSW5pdCIsImxvYWRCb2FyZCIsImJvYXJkVUkiLCJjZWxsIiwiZGF0YXNldCIsIngiLCJ5IiwicGxheWVyIiwicGxheWVyVGFiIiwiaGVhZFRhZyIsInNoaXBCYXIiLCJlbGVtZW50IiwiQ2FycmllciIsIlN1Ym1hcmluZSIsIkRlc3Ryb3llciIsIkZyaWdhdGUiXSwic291cmNlUm9vdCI6IiJ9