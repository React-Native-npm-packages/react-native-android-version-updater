# React Native Version Updater

React Native Version Updater is a utility package that simplifies the process of updating version codes and version names in your React Native app's Android build.gradle file. It provides functions that can be used to automatically increment the versionCode and versionName values, making it easier to manage versioning for your Android releases.

## Installation

You can install React Native Version Updater using npm:

```shell
npm install react-native-android-version-updater
```

## Usage

To use the React Native Version Updater package, follow these steps:

1. Create two script files in your project's directory:

To update both the `versionCode` and `versionName`, create a script file named `update-version-both.js` with the following content:

```js
const {
  updateVersionCodeAndName,
} = require("react-native-android-version-updater");
updateVersionCodeAndName();
```

To update only the `versionCode`, create a script file named `update-version-code.js` with the following content:

```js
const {
  updateVersionCodeOnly,
} = require("react-native-android-version-updater");
updateVersionCodeOnly();
```

2. Open your `package.json` file and add the following scripts:

```js
"scripts": {
    "updateVersion": "node update-version-code.js",
    "updateBoth": "node update-version-both.js"
}
```

3. To update only the versionCode, run the following command:

   - `npm run updateVersion`

4. To update both the `versionCode` and `versionName`, run the following command:

   - `npm run updateBoth`

By running the respective script, the `versionCode` or `versionName` in the `build.gradle` file located at `android/app/build.gradle` will be automatically updated.

## License

This package is licensed under the MIT License.
Contributing

Contributions are welcome! If you have any bug reports, feature requests, or suggestions, please open an issue or submit a pull request.

## Acknowledgements

This package was inspired by the need for a convenient version updater for React Native apps.

## Contact

For any inquiries or questions, feel free to reach out to us at footios76@gmail.com.

Feel free to modify and customize the content to suit your package and add any additional information that you find relevant.
