import * as fs from "fs";

export const updateVersionCode = (): void => {
  const buildGradlePath = "android/app/build.gradle";

  const buildGradleContents = fs.readFileSync(buildGradlePath, "utf8");

  const versionCodeRegex = /versionCode (\d+)/;

  const newVersionCode = getUpdatedVersionCode(buildGradleContents);

  const updatedBuildGradleContents = buildGradleContents.replace(
    versionCodeRegex,
    `versionCode ${newVersionCode}`
  );

  fs.writeFileSync(buildGradlePath, updatedBuildGradleContents);

  console.log("Updated versionCode in build.gradle file.");
};

export const updateBoth = (): void => {
  const buildGradlePath = "android/app/build.gradle";

  const buildGradleContents = fs.readFileSync(buildGradlePath, "utf8");

  const versionCodeRegex = /versionCode (\d+)/;
  const versionNameRegex = /versionName "(\d+)\.(\d+)"/;

  const newVersionCode = getUpdatedVersionCode(buildGradleContents);
  const newVersionName = getUpdatedVersionName(buildGradleContents, 1, 1);

  const updatedBuildGradleContents = buildGradleContents
    .replace(versionCodeRegex, `versionCode ${newVersionCode}`)
    .replace(versionNameRegex, `versionName "${newVersionName}"`);

  fs.writeFileSync(buildGradlePath, updatedBuildGradleContents);

  console.log(
    "Updated versionCode and second number of versionName in build.gradle file."
  );
};

export const updateMajor = (): void => {
  const buildGradlePath = "android/app/build.gradle";

  const buildGradleContents = fs.readFileSync(buildGradlePath, "utf8");

  const versionCodeRegex = /versionCode (\d+)/;
  const versionNameRegex = /versionName "(\d+)\.(\d+)"/;

  const newVersionCode = getUpdatedVersionCode(buildGradleContents);
  const newVersionName = getUpdatedVersionName(buildGradleContents, 2, 0);

  const updatedBuildGradleContents = buildGradleContents
    .replace(versionCodeRegex, `versionCode ${newVersionCode}`)
    .replace(versionNameRegex, `versionName "${newVersionName}"`);

  fs.writeFileSync(buildGradlePath, updatedBuildGradleContents);

  console.log(
    "Updated versionCode and first number of versionName in build.gradle file."
  );
};

const getUpdatedVersionCode = (buildGradleContents: string): number => {
  const versionCodeRegex = /versionCode (\d+)/;
  const matchVersionCode = buildGradleContents.match(versionCodeRegex);
  const currentVersionCode = matchVersionCode
    ? parseInt(matchVersionCode[1])
    : 0;
  const newVersionCode = currentVersionCode + 1;
  return newVersionCode;
};

const getUpdatedVersionName = (
  buildGradleContents: string,
  increment1: number,
  increment2: number
): string => {
  const versionNameRegex = /versionName "(\d+)\.(\d+)"/;
  const matchVersionName = buildGradleContents.match(versionNameRegex);
  const currentVersionName = matchVersionName ? matchVersionName[0] : "0.0";
  const versionNumbers = currentVersionName.split(".");

  const majorVersionNumber = parseInt(versionNumbers[0]) || 0;
  const minorVersionNumber = parseInt(versionNumbers[1]) || 0;

  versionNumbers[0] = (majorVersionNumber + increment1).toString();
  versionNumbers[1] = (minorVersionNumber + increment2).toString();

  const newVersionName = versionNumbers.join(".");
  return newVersionName;
};
