# React Native Version Updater 🚀 😂

React Native Version Updater is a utility package that simplifies the process of updating version codes and version names in your React Native app's Android build.gradle file. It provides functions that can be used to automatically increment the versionCode and versionName values, making it easier to manage versioning for your Android releases. 📦

## Installation

🔧 You can install React Native Version Updater using npm:

```shell
npm install --save-dev react-native-android-version-updater
```

## Usage 📝

To use the React Native Version Updater package, follow these steps:

1️⃣ Create three script files in your project's directory:

- To update only the `versionCode`, create a script file named `update-version-code.js` with the following content:

**update-version-code.js**

```js
const { updateVersionCode } = require("react-native-android-version-updater");
updateVersionCode();
```

- To update both the `versionCode` and `versionName`, create a script file named `update-both.js` with the following content:

**update-both.js**

```js
const { updateBoth } = require("react-native-android-version-updater");
updateBoth();
```

- To update both the `versionCode` and `versionName` - **major**, create a script file named `update-major.js` with the following content:

**update-major.js**

```js
const { updateMajor } = require("react-native-android-version-updater");
updateMajor();
```

2️⃣ Open your `package.json` file and add the following scripts:

```js
"scripts": {
  "updateVersion": "node update-version-code.js",
  "updateBoth": "node update-both.js",
  "updateMajor": "node update-major.js"
},

```

3️⃣ How to use the scripts:

- To update only the versionCode, run: `npm run updateVersion`
- To update both the `versionCode` and `versionName`, run:`npm run updateBoth`
- To update both the `versionCode` and `versionName` - **major**, run:`npm run updateMajor`

By running the respective scripts, the `build.gradle` file located at `android/app/build.gradle` will be automatically updated.

## License

This package is licensed under the MIT License.

## Contributing

Contributions are welcome! If you have any bug reports, feature requests, or suggestions, please open an issue or submit a pull request.

## Acknowledgements 🙌 🎉

This package was inspired by the need for a convenient version updater for React Native apps.

## Contact 📧

For any inquiries or questions, feel free to reach out to us at footios76@gmail.com.

Feel free to modify and customize the content to suit your package and add any additional information that you find relevant.
