"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/engine.io-parser";
exports.ids = ["vendor-chunks/engine.io-parser"];
exports.modules = {

/***/ "(ssr)/./node_modules/engine.io-parser/build/esm/commons.js":
/*!************************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/commons.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ERROR_PACKET: () => (/* binding */ ERROR_PACKET),\n/* harmony export */   PACKET_TYPES: () => (/* binding */ PACKET_TYPES),\n/* harmony export */   PACKET_TYPES_REVERSE: () => (/* binding */ PACKET_TYPES_REVERSE)\n/* harmony export */ });\nconst PACKET_TYPES = Object.create(null); // no Map = no polyfill\nPACKET_TYPES[\"open\"] = \"0\";\nPACKET_TYPES[\"close\"] = \"1\";\nPACKET_TYPES[\"ping\"] = \"2\";\nPACKET_TYPES[\"pong\"] = \"3\";\nPACKET_TYPES[\"message\"] = \"4\";\nPACKET_TYPES[\"upgrade\"] = \"5\";\nPACKET_TYPES[\"noop\"] = \"6\";\nconst PACKET_TYPES_REVERSE = Object.create(null);\nObject.keys(PACKET_TYPES).forEach((key) => {\n    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;\n});\nconst ERROR_PACKET = { type: \"error\", data: \"parser error\" };\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vY29tbW9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsdUJBQXVCO0FBQ3FDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vY29tbW9ucy5qcz9mMGI3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBBQ0tFVF9UWVBFUyA9IE9iamVjdC5jcmVhdGUobnVsbCk7IC8vIG5vIE1hcCA9IG5vIHBvbHlmaWxsXG5QQUNLRVRfVFlQRVNbXCJvcGVuXCJdID0gXCIwXCI7XG5QQUNLRVRfVFlQRVNbXCJjbG9zZVwiXSA9IFwiMVwiO1xuUEFDS0VUX1RZUEVTW1wicGluZ1wiXSA9IFwiMlwiO1xuUEFDS0VUX1RZUEVTW1wicG9uZ1wiXSA9IFwiM1wiO1xuUEFDS0VUX1RZUEVTW1wibWVzc2FnZVwiXSA9IFwiNFwiO1xuUEFDS0VUX1RZUEVTW1widXBncmFkZVwiXSA9IFwiNVwiO1xuUEFDS0VUX1RZUEVTW1wibm9vcFwiXSA9IFwiNlwiO1xuY29uc3QgUEFDS0VUX1RZUEVTX1JFVkVSU0UgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuT2JqZWN0LmtleXMoUEFDS0VUX1RZUEVTKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBQQUNLRVRfVFlQRVNfUkVWRVJTRVtQQUNLRVRfVFlQRVNba2V5XV0gPSBrZXk7XG59KTtcbmNvbnN0IEVSUk9SX1BBQ0tFVCA9IHsgdHlwZTogXCJlcnJvclwiLCBkYXRhOiBcInBhcnNlciBlcnJvclwiIH07XG5leHBvcnQgeyBQQUNLRVRfVFlQRVMsIFBBQ0tFVF9UWVBFU19SRVZFUlNFLCBFUlJPUl9QQUNLRVQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/engine.io-parser/build/esm/commons.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/engine.io-parser/build/esm/decodePacket.js":
/*!*****************************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/decodePacket.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decodePacket: () => (/* binding */ decodePacket)\n/* harmony export */ });\n/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commons.js */ \"(ssr)/./node_modules/engine.io-parser/build/esm/commons.js\");\n\nconst decodePacket = (encodedPacket, binaryType) => {\n    if (typeof encodedPacket !== \"string\") {\n        return {\n            type: \"message\",\n            data: mapBinary(encodedPacket, binaryType),\n        };\n    }\n    const type = encodedPacket.charAt(0);\n    if (type === \"b\") {\n        const buffer = Buffer.from(encodedPacket.substring(1), \"base64\");\n        return {\n            type: \"message\",\n            data: mapBinary(buffer, binaryType),\n        };\n    }\n    if (!_commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES_REVERSE[type]) {\n        return _commons_js__WEBPACK_IMPORTED_MODULE_0__.ERROR_PACKET;\n    }\n    return encodedPacket.length > 1\n        ? {\n            type: _commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES_REVERSE[type],\n            data: encodedPacket.substring(1),\n        }\n        : {\n            type: _commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES_REVERSE[type],\n        };\n};\nconst mapBinary = (data, binaryType) => {\n    switch (binaryType) {\n        case \"arraybuffer\":\n            if (data instanceof ArrayBuffer) {\n                // from WebSocket & binaryType \"arraybuffer\"\n                return data;\n            }\n            else if (Buffer.isBuffer(data)) {\n                // from HTTP long-polling\n                return data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);\n            }\n            else {\n                // from WebTransport (Uint8Array)\n                return data.buffer;\n            }\n        case \"nodebuffer\":\n        default:\n            if (Buffer.isBuffer(data)) {\n                // from HTTP long-polling or WebSocket & binaryType \"nodebuffer\" (default)\n                return data;\n            }\n            else {\n                // from WebTransport (Uint8Array)\n                return Buffer.from(data);\n            }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vZGVjb2RlUGFja2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1FO0FBQzVEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNkRBQW9CO0FBQzdCLGVBQWUscURBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZEQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkRBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2J1aWxkL2VzbS9kZWNvZGVQYWNrZXQuanM/NTc4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFUlJPUl9QQUNLRVQsIFBBQ0tFVF9UWVBFU19SRVZFUlNFLCB9IGZyb20gXCIuL2NvbW1vbnMuanNcIjtcbmV4cG9ydCBjb25zdCBkZWNvZGVQYWNrZXQgPSAoZW5jb2RlZFBhY2tldCwgYmluYXJ5VHlwZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgZW5jb2RlZFBhY2tldCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICBkYXRhOiBtYXBCaW5hcnkoZW5jb2RlZFBhY2tldCwgYmluYXJ5VHlwZSksXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHR5cGUgPSBlbmNvZGVkUGFja2V0LmNoYXJBdCgwKTtcbiAgICBpZiAodHlwZSA9PT0gXCJiXCIpIHtcbiAgICAgICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oZW5jb2RlZFBhY2tldC5zdWJzdHJpbmcoMSksIFwiYmFzZTY0XCIpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICBkYXRhOiBtYXBCaW5hcnkoYnVmZmVyLCBiaW5hcnlUeXBlKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCFQQUNLRVRfVFlQRVNfUkVWRVJTRVt0eXBlXSkge1xuICAgICAgICByZXR1cm4gRVJST1JfUEFDS0VUO1xuICAgIH1cbiAgICByZXR1cm4gZW5jb2RlZFBhY2tldC5sZW5ndGggPiAxXG4gICAgICAgID8ge1xuICAgICAgICAgICAgdHlwZTogUEFDS0VUX1RZUEVTX1JFVkVSU0VbdHlwZV0sXG4gICAgICAgICAgICBkYXRhOiBlbmNvZGVkUGFja2V0LnN1YnN0cmluZygxKSxcbiAgICAgICAgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIHR5cGU6IFBBQ0tFVF9UWVBFU19SRVZFUlNFW3R5cGVdLFxuICAgICAgICB9O1xufTtcbmNvbnN0IG1hcEJpbmFyeSA9IChkYXRhLCBiaW5hcnlUeXBlKSA9PiB7XG4gICAgc3dpdGNoIChiaW5hcnlUeXBlKSB7XG4gICAgICAgIGNhc2UgXCJhcnJheWJ1ZmZlclwiOlxuICAgICAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIC8vIGZyb20gV2ViU29ja2V0ICYgYmluYXJ5VHlwZSBcImFycmF5YnVmZmVyXCJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEJ1ZmZlci5pc0J1ZmZlcihkYXRhKSkge1xuICAgICAgICAgICAgICAgIC8vIGZyb20gSFRUUCBsb25nLXBvbGxpbmdcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5idWZmZXIuc2xpY2UoZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmJ5dGVPZmZzZXQgKyBkYXRhLmJ5dGVMZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZnJvbSBXZWJUcmFuc3BvcnQgKFVpbnQ4QXJyYXkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIFwibm9kZWJ1ZmZlclwiOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihkYXRhKSkge1xuICAgICAgICAgICAgICAgIC8vIGZyb20gSFRUUCBsb25nLXBvbGxpbmcgb3IgV2ViU29ja2V0ICYgYmluYXJ5VHlwZSBcIm5vZGVidWZmZXJcIiAoZGVmYXVsdClcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGZyb20gV2ViVHJhbnNwb3J0IChVaW50OEFycmF5KVxuICAgICAgICAgICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/engine.io-parser/build/esm/decodePacket.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/engine.io-parser/build/esm/encodePacket.js":
/*!*****************************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/encodePacket.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   encodePacket: () => (/* binding */ encodePacket),\n/* harmony export */   encodePacketToBinary: () => (/* binding */ encodePacketToBinary)\n/* harmony export */ });\n/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commons.js */ \"(ssr)/./node_modules/engine.io-parser/build/esm/commons.js\");\n\nconst encodePacket = ({ type, data }, supportsBinary, callback) => {\n    if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {\n        return callback(supportsBinary ? data : \"b\" + toBuffer(data, true).toString(\"base64\"));\n    }\n    // plain string\n    return callback(_commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES[type] + (data || \"\"));\n};\nconst toBuffer = (data, forceBufferConversion) => {\n    if (Buffer.isBuffer(data) ||\n        (data instanceof Uint8Array && !forceBufferConversion)) {\n        return data;\n    }\n    else if (data instanceof ArrayBuffer) {\n        return Buffer.from(data);\n    }\n    else {\n        return Buffer.from(data.buffer, data.byteOffset, data.byteLength);\n    }\n};\nlet TEXT_ENCODER;\nfunction encodePacketToBinary(packet, callback) {\n    if (packet.data instanceof ArrayBuffer || ArrayBuffer.isView(packet.data)) {\n        return callback(toBuffer(packet.data, false));\n    }\n    encodePacket(packet, true, (encoded) => {\n        if (!TEXT_ENCODER) {\n            // lazily created for compatibility with Node.js 10\n            TEXT_ENCODER = new TextEncoder();\n        }\n        callback(TEXT_ENCODER.encode(encoded));\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vZW5jb2RlUGFja2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QztBQUNyQyx3QkFBd0IsWUFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxREFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2J1aWxkL2VzbS9lbmNvZGVQYWNrZXQuanM/MWNiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQQUNLRVRfVFlQRVMgfSBmcm9tIFwiLi9jb21tb25zLmpzXCI7XG5leHBvcnQgY29uc3QgZW5jb2RlUGFja2V0ID0gKHsgdHlwZSwgZGF0YSB9LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spID0+IHtcbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soc3VwcG9ydHNCaW5hcnkgPyBkYXRhIDogXCJiXCIgKyB0b0J1ZmZlcihkYXRhLCB0cnVlKS50b1N0cmluZyhcImJhc2U2NFwiKSk7XG4gICAgfVxuICAgIC8vIHBsYWluIHN0cmluZ1xuICAgIHJldHVybiBjYWxsYmFjayhQQUNLRVRfVFlQRVNbdHlwZV0gKyAoZGF0YSB8fCBcIlwiKSk7XG59O1xuY29uc3QgdG9CdWZmZXIgPSAoZGF0YSwgZm9yY2VCdWZmZXJDb252ZXJzaW9uKSA9PiB7XG4gICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgICAoZGF0YSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgJiYgIWZvcmNlQnVmZmVyQ29udmVyc2lvbikpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20oZGF0YSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20oZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoKTtcbiAgICB9XG59O1xubGV0IFRFWFRfRU5DT0RFUjtcbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVQYWNrZXRUb0JpbmFyeShwYWNrZXQsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHBhY2tldC5kYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgfHwgQXJyYXlCdWZmZXIuaXNWaWV3KHBhY2tldC5kYXRhKSkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sodG9CdWZmZXIocGFja2V0LmRhdGEsIGZhbHNlKSk7XG4gICAgfVxuICAgIGVuY29kZVBhY2tldChwYWNrZXQsIHRydWUsIChlbmNvZGVkKSA9PiB7XG4gICAgICAgIGlmICghVEVYVF9FTkNPREVSKSB7XG4gICAgICAgICAgICAvLyBsYXppbHkgY3JlYXRlZCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIE5vZGUuanMgMTBcbiAgICAgICAgICAgIFRFWFRfRU5DT0RFUiA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrKFRFWFRfRU5DT0RFUi5lbmNvZGUoZW5jb2RlZCkpO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/engine.io-parser/build/esm/encodePacket.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/engine.io-parser/build/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createPacketDecoderStream: () => (/* binding */ createPacketDecoderStream),\n/* harmony export */   createPacketEncoderStream: () => (/* binding */ createPacketEncoderStream),\n/* harmony export */   decodePacket: () => (/* reexport safe */ _decodePacket_js__WEBPACK_IMPORTED_MODULE_1__.decodePacket),\n/* harmony export */   decodePayload: () => (/* binding */ decodePayload),\n/* harmony export */   encodePacket: () => (/* reexport safe */ _encodePacket_js__WEBPACK_IMPORTED_MODULE_0__.encodePacket),\n/* harmony export */   encodePayload: () => (/* binding */ encodePayload),\n/* harmony export */   protocol: () => (/* binding */ protocol)\n/* harmony export */ });\n/* harmony import */ var _encodePacket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encodePacket.js */ \"(ssr)/./node_modules/engine.io-parser/build/esm/encodePacket.js\");\n/* harmony import */ var _decodePacket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decodePacket.js */ \"(ssr)/./node_modules/engine.io-parser/build/esm/decodePacket.js\");\n/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commons.js */ \"(ssr)/./node_modules/engine.io-parser/build/esm/commons.js\");\n\n\n\nconst SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text\nconst encodePayload = (packets, callback) => {\n    // some packets may be added to the array while encoding, so the initial length must be saved\n    const length = packets.length;\n    const encodedPackets = new Array(length);\n    let count = 0;\n    packets.forEach((packet, i) => {\n        // force base64 encoding for binary packets\n        (0,_encodePacket_js__WEBPACK_IMPORTED_MODULE_0__.encodePacket)(packet, false, (encodedPacket) => {\n            encodedPackets[i] = encodedPacket;\n            if (++count === length) {\n                callback(encodedPackets.join(SEPARATOR));\n            }\n        });\n    });\n};\nconst decodePayload = (encodedPayload, binaryType) => {\n    const encodedPackets = encodedPayload.split(SEPARATOR);\n    const packets = [];\n    for (let i = 0; i < encodedPackets.length; i++) {\n        const decodedPacket = (0,_decodePacket_js__WEBPACK_IMPORTED_MODULE_1__.decodePacket)(encodedPackets[i], binaryType);\n        packets.push(decodedPacket);\n        if (decodedPacket.type === \"error\") {\n            break;\n        }\n    }\n    return packets;\n};\nfunction createPacketEncoderStream() {\n    return new TransformStream({\n        transform(packet, controller) {\n            (0,_encodePacket_js__WEBPACK_IMPORTED_MODULE_0__.encodePacketToBinary)(packet, (encodedPacket) => {\n                const payloadLength = encodedPacket.length;\n                let header;\n                // inspired by the WebSocket format: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#decoding_payload_length\n                if (payloadLength < 126) {\n                    header = new Uint8Array(1);\n                    new DataView(header.buffer).setUint8(0, payloadLength);\n                }\n                else if (payloadLength < 65536) {\n                    header = new Uint8Array(3);\n                    const view = new DataView(header.buffer);\n                    view.setUint8(0, 126);\n                    view.setUint16(1, payloadLength);\n                }\n                else {\n                    header = new Uint8Array(9);\n                    const view = new DataView(header.buffer);\n                    view.setUint8(0, 127);\n                    view.setBigUint64(1, BigInt(payloadLength));\n                }\n                // first bit indicates whether the payload is plain text (0) or binary (1)\n                if (packet.data && typeof packet.data !== \"string\") {\n                    header[0] |= 0x80;\n                }\n                controller.enqueue(header);\n                controller.enqueue(encodedPacket);\n            });\n        },\n    });\n}\nlet TEXT_DECODER;\nfunction totalLength(chunks) {\n    return chunks.reduce((acc, chunk) => acc + chunk.length, 0);\n}\nfunction concatChunks(chunks, size) {\n    if (chunks[0].length === size) {\n        return chunks.shift();\n    }\n    const buffer = new Uint8Array(size);\n    let j = 0;\n    for (let i = 0; i < size; i++) {\n        buffer[i] = chunks[0][j++];\n        if (j === chunks[0].length) {\n            chunks.shift();\n            j = 0;\n        }\n    }\n    if (chunks.length && j < chunks[0].length) {\n        chunks[0] = chunks[0].slice(j);\n    }\n    return buffer;\n}\nfunction createPacketDecoderStream(maxPayload, binaryType) {\n    if (!TEXT_DECODER) {\n        TEXT_DECODER = new TextDecoder();\n    }\n    const chunks = [];\n    let state = 0 /* State.READ_HEADER */;\n    let expectedLength = -1;\n    let isBinary = false;\n    return new TransformStream({\n        transform(chunk, controller) {\n            chunks.push(chunk);\n            while (true) {\n                if (state === 0 /* State.READ_HEADER */) {\n                    if (totalLength(chunks) < 1) {\n                        break;\n                    }\n                    const header = concatChunks(chunks, 1);\n                    isBinary = (header[0] & 0x80) === 0x80;\n                    expectedLength = header[0] & 0x7f;\n                    if (expectedLength < 126) {\n                        state = 3 /* State.READ_PAYLOAD */;\n                    }\n                    else if (expectedLength === 126) {\n                        state = 1 /* State.READ_EXTENDED_LENGTH_16 */;\n                    }\n                    else {\n                        state = 2 /* State.READ_EXTENDED_LENGTH_64 */;\n                    }\n                }\n                else if (state === 1 /* State.READ_EXTENDED_LENGTH_16 */) {\n                    if (totalLength(chunks) < 2) {\n                        break;\n                    }\n                    const headerArray = concatChunks(chunks, 2);\n                    expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);\n                    state = 3 /* State.READ_PAYLOAD */;\n                }\n                else if (state === 2 /* State.READ_EXTENDED_LENGTH_64 */) {\n                    if (totalLength(chunks) < 8) {\n                        break;\n                    }\n                    const headerArray = concatChunks(chunks, 8);\n                    const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);\n                    const n = view.getUint32(0);\n                    if (n > Math.pow(2, 53 - 32) - 1) {\n                        // the maximum safe integer in JavaScript is 2^53 - 1\n                        controller.enqueue(_commons_js__WEBPACK_IMPORTED_MODULE_2__.ERROR_PACKET);\n                        break;\n                    }\n                    expectedLength = n * Math.pow(2, 32) + view.getUint32(4);\n                    state = 3 /* State.READ_PAYLOAD */;\n                }\n                else {\n                    if (totalLength(chunks) < expectedLength) {\n                        break;\n                    }\n                    const data = concatChunks(chunks, expectedLength);\n                    controller.enqueue((0,_decodePacket_js__WEBPACK_IMPORTED_MODULE_1__.decodePacket)(isBinary ? data : TEXT_DECODER.decode(data), binaryType));\n                    state = 0 /* State.READ_HEADER */;\n                }\n                if (expectedLength === 0 || expectedLength > maxPayload) {\n                    controller.enqueue(_commons_js__WEBPACK_IMPORTED_MODULE_2__.ERROR_PACKET);\n                    break;\n                }\n            }\n        },\n    });\n}\nconst protocol = 4;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF1RTtBQUN0QjtBQUNKO0FBQzdDLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQyw4QkFBOEIsOERBQVk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxZQUFZLHNFQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMscURBQVk7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsOERBQVk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFEQUFZO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDTztBQUM4RCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvYnVpbGQvZXNtL2luZGV4LmpzP2ZlYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZW5jb2RlUGFja2V0LCBlbmNvZGVQYWNrZXRUb0JpbmFyeSB9IGZyb20gXCIuL2VuY29kZVBhY2tldC5qc1wiO1xuaW1wb3J0IHsgZGVjb2RlUGFja2V0IH0gZnJvbSBcIi4vZGVjb2RlUGFja2V0LmpzXCI7XG5pbXBvcnQgeyBFUlJPUl9QQUNLRVQsIH0gZnJvbSBcIi4vY29tbW9ucy5qc1wiO1xuY29uc3QgU0VQQVJBVE9SID0gU3RyaW5nLmZyb21DaGFyQ29kZSgzMCk7IC8vIHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9EZWxpbWl0ZXIjQVNDSUlfZGVsaW1pdGVkX3RleHRcbmNvbnN0IGVuY29kZVBheWxvYWQgPSAocGFja2V0cywgY2FsbGJhY2spID0+IHtcbiAgICAvLyBzb21lIHBhY2tldHMgbWF5IGJlIGFkZGVkIHRvIHRoZSBhcnJheSB3aGlsZSBlbmNvZGluZywgc28gdGhlIGluaXRpYWwgbGVuZ3RoIG11c3QgYmUgc2F2ZWRcbiAgICBjb25zdCBsZW5ndGggPSBwYWNrZXRzLmxlbmd0aDtcbiAgICBjb25zdCBlbmNvZGVkUGFja2V0cyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgcGFja2V0cy5mb3JFYWNoKChwYWNrZXQsIGkpID0+IHtcbiAgICAgICAgLy8gZm9yY2UgYmFzZTY0IGVuY29kaW5nIGZvciBiaW5hcnkgcGFja2V0c1xuICAgICAgICBlbmNvZGVQYWNrZXQocGFja2V0LCBmYWxzZSwgKGVuY29kZWRQYWNrZXQpID0+IHtcbiAgICAgICAgICAgIGVuY29kZWRQYWNrZXRzW2ldID0gZW5jb2RlZFBhY2tldDtcbiAgICAgICAgICAgIGlmICgrK2NvdW50ID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlbmNvZGVkUGFja2V0cy5qb2luKFNFUEFSQVRPUikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5jb25zdCBkZWNvZGVQYXlsb2FkID0gKGVuY29kZWRQYXlsb2FkLCBiaW5hcnlUeXBlKSA9PiB7XG4gICAgY29uc3QgZW5jb2RlZFBhY2tldHMgPSBlbmNvZGVkUGF5bG9hZC5zcGxpdChTRVBBUkFUT1IpO1xuICAgIGNvbnN0IHBhY2tldHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY29kZWRQYWNrZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRlY29kZWRQYWNrZXQgPSBkZWNvZGVQYWNrZXQoZW5jb2RlZFBhY2tldHNbaV0sIGJpbmFyeVR5cGUpO1xuICAgICAgICBwYWNrZXRzLnB1c2goZGVjb2RlZFBhY2tldCk7XG4gICAgICAgIGlmIChkZWNvZGVkUGFja2V0LnR5cGUgPT09IFwiZXJyb3JcIikge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhY2tldHM7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhY2tldEVuY29kZXJTdHJlYW0oKSB7XG4gICAgcmV0dXJuIG5ldyBUcmFuc2Zvcm1TdHJlYW0oe1xuICAgICAgICB0cmFuc2Zvcm0ocGFja2V0LCBjb250cm9sbGVyKSB7XG4gICAgICAgICAgICBlbmNvZGVQYWNrZXRUb0JpbmFyeShwYWNrZXQsIChlbmNvZGVkUGFja2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGF5bG9hZExlbmd0aCA9IGVuY29kZWRQYWNrZXQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGxldCBoZWFkZXI7XG4gICAgICAgICAgICAgICAgLy8gaW5zcGlyZWQgYnkgdGhlIFdlYlNvY2tldCBmb3JtYXQ6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XZWJTb2NrZXRzX0FQSS9Xcml0aW5nX1dlYlNvY2tldF9zZXJ2ZXJzI2RlY29kaW5nX3BheWxvYWRfbGVuZ3RoXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWRMZW5ndGggPCAxMjYpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyID0gbmV3IFVpbnQ4QXJyYXkoMSk7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBEYXRhVmlldyhoZWFkZXIuYnVmZmVyKS5zZXRVaW50OCgwLCBwYXlsb2FkTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGF5bG9hZExlbmd0aCA8IDY1NTM2KSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciA9IG5ldyBVaW50OEFycmF5KDMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KGhlYWRlci5idWZmZXIpO1xuICAgICAgICAgICAgICAgICAgICB2aWV3LnNldFVpbnQ4KDAsIDEyNik7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcuc2V0VWludDE2KDEsIHBheWxvYWRMZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyID0gbmV3IFVpbnQ4QXJyYXkoOSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgRGF0YVZpZXcoaGVhZGVyLmJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcuc2V0VWludDgoMCwgMTI3KTtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5zZXRCaWdVaW50NjQoMSwgQmlnSW50KHBheWxvYWRMZW5ndGgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZmlyc3QgYml0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIHBsYWluIHRleHQgKDApIG9yIGJpbmFyeSAoMSlcbiAgICAgICAgICAgICAgICBpZiAocGFja2V0LmRhdGEgJiYgdHlwZW9mIHBhY2tldC5kYXRhICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlclswXSB8PSAweDgwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVucXVldWUoaGVhZGVyKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVucXVldWUoZW5jb2RlZFBhY2tldCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cbmxldCBURVhUX0RFQ09ERVI7XG5mdW5jdGlvbiB0b3RhbExlbmd0aChjaHVua3MpIHtcbiAgICByZXR1cm4gY2h1bmtzLnJlZHVjZSgoYWNjLCBjaHVuaykgPT4gYWNjICsgY2h1bmsubGVuZ3RoLCAwKTtcbn1cbmZ1bmN0aW9uIGNvbmNhdENodW5rcyhjaHVua3MsIHNpemUpIHtcbiAgICBpZiAoY2h1bmtzWzBdLmxlbmd0aCA9PT0gc2l6ZSkge1xuICAgICAgICByZXR1cm4gY2h1bmtzLnNoaWZ0KCk7XG4gICAgfVxuICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KHNpemUpO1xuICAgIGxldCBqID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBidWZmZXJbaV0gPSBjaHVua3NbMF1baisrXTtcbiAgICAgICAgaWYgKGogPT09IGNodW5rc1swXS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNodW5rcy5zaGlmdCgpO1xuICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNodW5rcy5sZW5ndGggJiYgaiA8IGNodW5rc1swXS5sZW5ndGgpIHtcbiAgICAgICAgY2h1bmtzWzBdID0gY2h1bmtzWzBdLnNsaWNlKGopO1xuICAgIH1cbiAgICByZXR1cm4gYnVmZmVyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhY2tldERlY29kZXJTdHJlYW0obWF4UGF5bG9hZCwgYmluYXJ5VHlwZSkge1xuICAgIGlmICghVEVYVF9ERUNPREVSKSB7XG4gICAgICAgIFRFWFRfREVDT0RFUiA9IG5ldyBUZXh0RGVjb2RlcigpO1xuICAgIH1cbiAgICBjb25zdCBjaHVua3MgPSBbXTtcbiAgICBsZXQgc3RhdGUgPSAwIC8qIFN0YXRlLlJFQURfSEVBREVSICovO1xuICAgIGxldCBleHBlY3RlZExlbmd0aCA9IC0xO1xuICAgIGxldCBpc0JpbmFyeSA9IGZhbHNlO1xuICAgIHJldHVybiBuZXcgVHJhbnNmb3JtU3RyZWFtKHtcbiAgICAgICAgdHJhbnNmb3JtKGNodW5rLCBjb250cm9sbGVyKSB7XG4gICAgICAgICAgICBjaHVua3MucHVzaChjaHVuayk7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gMCAvKiBTdGF0ZS5SRUFEX0hFQURFUiAqLykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG90YWxMZW5ndGgoY2h1bmtzKSA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGNvbmNhdENodW5rcyhjaHVua3MsIDEpO1xuICAgICAgICAgICAgICAgICAgICBpc0JpbmFyeSA9IChoZWFkZXJbMF0gJiAweDgwKSA9PT0gMHg4MDtcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRMZW5ndGggPSBoZWFkZXJbMF0gJiAweDdmO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhwZWN0ZWRMZW5ndGggPCAxMjYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gMyAvKiBTdGF0ZS5SRUFEX1BBWUxPQUQgKi87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZXhwZWN0ZWRMZW5ndGggPT09IDEyNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAxIC8qIFN0YXRlLlJFQURfRVhURU5ERURfTEVOR1RIXzE2ICovO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAyIC8qIFN0YXRlLlJFQURfRVhURU5ERURfTEVOR1RIXzY0ICovO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlID09PSAxIC8qIFN0YXRlLlJFQURfRVhURU5ERURfTEVOR1RIXzE2ICovKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3RhbExlbmd0aChjaHVua3MpIDwgMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVhZGVyQXJyYXkgPSBjb25jYXRDaHVua3MoY2h1bmtzLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRMZW5ndGggPSBuZXcgRGF0YVZpZXcoaGVhZGVyQXJyYXkuYnVmZmVyLCBoZWFkZXJBcnJheS5ieXRlT2Zmc2V0LCBoZWFkZXJBcnJheS5sZW5ndGgpLmdldFVpbnQxNigwKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAzIC8qIFN0YXRlLlJFQURfUEFZTE9BRCAqLztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT09IDIgLyogU3RhdGUuUkVBRF9FWFRFTkRFRF9MRU5HVEhfNjQgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdGFsTGVuZ3RoKGNodW5rcykgPCA4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJBcnJheSA9IGNvbmNhdENodW5rcyhjaHVua3MsIDgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KGhlYWRlckFycmF5LmJ1ZmZlciwgaGVhZGVyQXJyYXkuYnl0ZU9mZnNldCwgaGVhZGVyQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbiA9IHZpZXcuZ2V0VWludDMyKDApO1xuICAgICAgICAgICAgICAgICAgICBpZiAobiA+IE1hdGgucG93KDIsIDUzIC0gMzIpIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG1heGltdW0gc2FmZSBpbnRlZ2VyIGluIEphdmFTY3JpcHQgaXMgMl41MyAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW5xdWV1ZShFUlJPUl9QQUNLRVQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRMZW5ndGggPSBuICogTWF0aC5wb3coMiwgMzIpICsgdmlldy5nZXRVaW50MzIoNCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gMyAvKiBTdGF0ZS5SRUFEX1BBWUxPQUQgKi87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG90YWxMZW5ndGgoY2h1bmtzKSA8IGV4cGVjdGVkTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gY29uY2F0Q2h1bmtzKGNodW5rcywgZXhwZWN0ZWRMZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVucXVldWUoZGVjb2RlUGFja2V0KGlzQmluYXJ5ID8gZGF0YSA6IFRFWFRfREVDT0RFUi5kZWNvZGUoZGF0YSksIGJpbmFyeVR5cGUpKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAwIC8qIFN0YXRlLlJFQURfSEVBREVSICovO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXhwZWN0ZWRMZW5ndGggPT09IDAgfHwgZXhwZWN0ZWRMZW5ndGggPiBtYXhQYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW5xdWV1ZShFUlJPUl9QQUNLRVQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5leHBvcnQgY29uc3QgcHJvdG9jb2wgPSA0O1xuZXhwb3J0IHsgZW5jb2RlUGFja2V0LCBlbmNvZGVQYXlsb2FkLCBkZWNvZGVQYWNrZXQsIGRlY29kZVBheWxvYWQsIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/engine.io-parser/build/esm/index.js\n");

/***/ })

};
;