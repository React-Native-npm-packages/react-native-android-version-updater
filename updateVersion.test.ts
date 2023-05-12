import * as fs from "fs";
import {
  updateVersionCode,
  updateBoth,
  updateMajor,
} from "./updateVersion.cjs";

// Mock the fs module functions
jest.mock("fs");

describe("updateVersionCode", () => {
  test("should update the versionCode in build.gradle", () => {
    const readFileSyncMock = jest.spyOn(fs, "readFileSync");
    const writeFileSyncMock = jest.spyOn(fs, "writeFileSync");
    const consoleLogMock = jest.spyOn(console, "log");

    const buildGradleContents = `versionCode 1
versionName "1.0"`;
    const updatedBuildGradleContents = `versionCode 2
versionName "1.0"`;

    readFileSyncMock.mockReturnValueOnce(buildGradleContents);

    updateVersionCode();

    expect(readFileSyncMock).toHaveBeenCalledWith(
      "android/app/build.gradle",
      "utf8"
    );
    expect(writeFileSyncMock).toHaveBeenCalledWith(
      "android/app/build.gradle",
      updatedBuildGradleContents
    );
    expect(consoleLogMock).toHaveBeenCalledWith(
      "Updated versionCode in build.gradle file."
    );

    // Restore the mock functions
    readFileSyncMock.mockRestore();
    writeFileSyncMock.mockRestore();
    consoleLogMock.mockRestore();
  });
});

describe("updateBoth", () => {
  test("should update the versionCode and second number of versionName in build.gradle", () => {
    const readFileSyncMock = jest.spyOn(fs, "readFileSync");
    const writeFileSyncMock = jest.spyOn(fs, "writeFileSync");
    const consoleLogMock = jest.spyOn(console, "log");

    const buildGradleContents = `versionCode 1
versionName "1.0"`;
    const updatedBuildGradleContents = `versionCode 2
versionName "1.1"`;

    readFileSyncMock.mockReturnValueOnce(buildGradleContents);

    updateBoth();

    expect(readFileSyncMock).toHaveBeenCalledWith(
      "android/app/build.gradle",
      "utf8"
    );
    expect(writeFileSyncMock).toHaveBeenCalledWith(
      "android/app/build.gradle",
      updatedBuildGradleContents
    );
    expect(consoleLogMock).toHaveBeenCalledWith(
      "Updated versionCode and second number of versionName in build.gradle file."
    );

    // Restore the mock functions
    readFileSyncMock.mockRestore();
    writeFileSyncMock.mockRestore();
    consoleLogMock.mockRestore();
  });
});

describe("updateMajor", () => {
  test("should update the versionCode and first number of versionName in build.gradle", () => {
    const readFileSyncMock = jest.spyOn(fs, "readFileSync");
    const writeFileSyncMock = jest.spyOn(fs, "writeFileSync");
    const consoleLogMock = jest.spyOn(console, "log");

    const buildGradleContents = `versionCode 1
versionName "1.0"`;
    const updatedBuildGradleContents = `versionCode 2
versionName "2.0"`;

    readFileSyncMock.mockReturnValueOnce(buildGradleContents);

    updateMajor();

    expect(readFileSyncMock).toHaveBeenCalledWith(
      "android/app/build.gradle",
      "utf8"
    );
    expect(writeFileSyncMock).toHaveBeenCalledWith(
      "android/app/build.gradle",
      updatedBuildGradleContents
    );
    expect(consoleLogMock).toHaveBeenCalledWith(
      "Updated versionCode and first number of versionName in build.gradle file."
    );

    // Restore the mock functions
    readFileSyncMock.mockRestore();
    writeFileSyncMock.mockRestore();
    consoleLogMock.mockRestore;
  });
});
