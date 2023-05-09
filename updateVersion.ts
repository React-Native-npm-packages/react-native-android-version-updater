import * as fs from "fs";

export const updateVersionCodeAndName = (): void => {
  const buildGradlePath = "android/app/build.gradle";

  const buildGradleContents = fs.readFileSync(buildGradlePath, "utf8");

  const versionCodeRegex = /versionCode (\d+)/;
  const versionNameRegex = /versionName "([\d.]+)"/;

  const newVersionCode = getUpdatedVersionCode(buildGradleContents);
  const newVersionName = getUpdatedVersionName(buildGradleContents);

  const updatedBuildGradleContents = buildGradleContents
    .replace(versionCodeRegex, `versionCode ${newVersionCode}`)
    .replace(versionNameRegex, `versionName "${newVersionName}"`);

  fs.writeFileSync(buildGradlePath, updatedBuildGradleContents);

  console.log("Updated versionCode and versionName in build.gradle file.");
};

export const updateVersionCodeOnly = (): void => {
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

const getUpdatedVersionCode = (buildGradleContents: string): number => {
  const versionCodeRegex = /versionCode (\d+)/;
  const matchVersionCode = buildGradleContents.match(versionCodeRegex);
  const currentVersionCode = matchVersionCode
    ? parseInt(matchVersionCode[1])
    : 0;
  const newVersionCode = currentVersionCode + 1;
  return newVersionCode;
};

const getUpdatedVersionName = (buildGradleContents: string): string => {
  const versionNameRegex = /versionName "([\d.]+)"/;
  const matchVersionName = buildGradleContents.match(versionNameRegex);
  const currentVersionName = matchVersionName ? matchVersionName[1] : "0.0";
  const versionNumbers = currentVersionName.split(".");
  const lastVersionNumber = parseInt(versionNumbers[versionNumbers.length - 1]);
  versionNumbers[versionNumbers.length - 1] = (
    lastVersionNumber + 1
  ).toString();
  const newVersionName = versionNumbers.join(".");
  return newVersionName;
};
