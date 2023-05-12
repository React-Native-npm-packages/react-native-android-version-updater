"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateVersionCode = exports.updateMajor = exports.updateBoth = void 0;
var fs = _interopRequireWildcard(require("fs"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var updateVersionCode = function updateVersionCode() {
  var buildGradlePath = "android/app/build.gradle";
  var buildGradleContents = fs.readFileSync(buildGradlePath, "utf8");
  var versionCodeRegex = /versionCode (\d+)/;
  var newVersionCode = getUpdatedVersionCode(buildGradleContents);
  var updatedBuildGradleContents = buildGradleContents.replace(versionCodeRegex, "versionCode ".concat(newVersionCode));
  fs.writeFileSync(buildGradlePath, updatedBuildGradleContents);
  console.log("Updated versionCode in build.gradle file.");
};
exports.updateVersionCode = updateVersionCode;
var updateBoth = function updateBoth() {
  var buildGradlePath = "android/app/build.gradle";
  var buildGradleContents = fs.readFileSync(buildGradlePath, "utf8");
  var versionCodeRegex = /versionCode (\d+)/;
  var versionNameRegex = /versionName "(\d+)\.(\d+)"/;
  var newVersionCode = getUpdatedVersionCode(buildGradleContents);
  var newVersionName = getUpdatedVersionName(buildGradleContents, 1, 1);
  var updatedBuildGradleContents = buildGradleContents.replace(versionCodeRegex, "versionCode ".concat(newVersionCode)).replace(versionNameRegex, "versionName \"".concat(newVersionName, "\""));
  fs.writeFileSync(buildGradlePath, updatedBuildGradleContents);
  console.log("Updated versionCode and second number of versionName in build.gradle file.");
};
exports.updateBoth = updateBoth;
var updateMajor = function updateMajor() {
  var buildGradlePath = "android/app/build.gradle";
  var buildGradleContents = fs.readFileSync(buildGradlePath, "utf8");
  var versionCodeRegex = /versionCode (\d+)/;
  var versionNameRegex = /versionName "(\d+)\.(\d+)"/;
  var newVersionCode = getUpdatedVersionCode(buildGradleContents);
  var newVersionName = getUpdatedVersionName(buildGradleContents, 2, 0);
  var updatedBuildGradleContents = buildGradleContents.replace(versionCodeRegex, "versionCode ".concat(newVersionCode)).replace(versionNameRegex, "versionName \"".concat(newVersionName, "\""));
  fs.writeFileSync(buildGradlePath, updatedBuildGradleContents);
  console.log("Updated versionCode and first number of versionName in build.gradle file.");
};
exports.updateMajor = updateMajor;
var getUpdatedVersionCode = function getUpdatedVersionCode(buildGradleContents) {
  var versionCodeRegex = /versionCode (\d+)/;
  var matchVersionCode = buildGradleContents.match(versionCodeRegex);
  var currentVersionCode = matchVersionCode ? parseInt(matchVersionCode[1]) : 0;
  var newVersionCode = currentVersionCode + 1;
  return newVersionCode;
};
var getUpdatedVersionName = function getUpdatedVersionName(buildGradleContents, increment1, increment2) {
  var versionNameRegex = /versionName "(\d+)\.(\d+)"/;
  var matchVersionName = buildGradleContents.match(versionNameRegex);
  var currentVersionName = matchVersionName ? matchVersionName[0] : "0.0";
  var versionNumbers = currentVersionName.split(".");
  var majorVersionNumber = parseInt(versionNumbers[0]) || 0;
  var minorVersionNumber = parseInt(versionNumbers[1]) || 0;
  versionNumbers[0] = (majorVersionNumber + increment1).toString();
  versionNumbers[1] = (minorVersionNumber + increment2).toString();
  var newVersionName = versionNumbers.join(".");
  return newVersionName;
};
