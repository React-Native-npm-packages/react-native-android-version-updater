"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateVersionCodeOnly = exports.updateVersionCodeAndName = void 0;
var fs = _interopRequireWildcard(require("fs"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var updateVersionCodeAndName = function updateVersionCodeAndName() {
  var buildGradlePath = "android/app/build.gradle";
  var buildGradleContents = fs.readFileSync(buildGradlePath, "utf8");
  var versionCodeRegex = /versionCode (\d+)/;
  var versionNameRegex = /versionName "([\d.]+)"/;
  var newVersionCode = getUpdatedVersionCode(buildGradleContents);
  var newVersionName = getUpdatedVersionName(buildGradleContents);
  var updatedBuildGradleContents = buildGradleContents.replace(versionCodeRegex, "versionCode ".concat(newVersionCode)).replace(versionNameRegex, "versionName \"".concat(newVersionName, "\""));
  fs.writeFileSync(buildGradlePath, updatedBuildGradleContents);
  console.log("Updated versionCode and versionName in build.gradle file.");
};
exports.updateVersionCodeAndName = updateVersionCodeAndName;
var updateVersionCodeOnly = function updateVersionCodeOnly() {
  var buildGradlePath = "android/app/build.gradle";
  var buildGradleContents = fs.readFileSync(buildGradlePath, "utf8");
  var versionCodeRegex = /versionCode (\d+)/;
  var newVersionCode = getUpdatedVersionCode(buildGradleContents);
  var updatedBuildGradleContents = buildGradleContents.replace(versionCodeRegex, "versionCode ".concat(newVersionCode));
  fs.writeFileSync(buildGradlePath, updatedBuildGradleContents);
  console.log("Updated versionCode in build.gradle file.");
};
exports.updateVersionCodeOnly = updateVersionCodeOnly;
var getUpdatedVersionCode = function getUpdatedVersionCode(buildGradleContents) {
  var versionCodeRegex = /versionCode (\d+)/;
  var matchVersionCode = buildGradleContents.match(versionCodeRegex);
  var currentVersionCode = matchVersionCode ? parseInt(matchVersionCode[1]) : 0;
  var newVersionCode = currentVersionCode + 1;
  return newVersionCode;
};
var getUpdatedVersionName = function getUpdatedVersionName(buildGradleContents) {
  var versionNameRegex = /versionName "([\d.]+)"/;
  var matchVersionName = buildGradleContents.match(versionNameRegex);
  var currentVersionName = matchVersionName ? matchVersionName[1] : "0.0";
  var versionNumbers = currentVersionName.split(".");
  var lastVersionNumber = parseInt(versionNumbers[versionNumbers.length - 1]);
  versionNumbers[versionNumbers.length - 1] = (lastVersionNumber + 1).toString();
  var newVersionName = versionNumbers.join(".");
  return newVersionName;
};
