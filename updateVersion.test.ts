import * as fs from "fs";
import {
  updateVersionCodeAndName,
  updateVersionCodeOnly,
} from "./updateVersion";

const buildGradlePath = "android/app/build.gradle";

const mockBuildGradleContents = `
  versionCode 10
  versionName "1.2"
`;

const createMockBuildGradleFile = () => {
  fs.writeFileSync(buildGradlePath, mockBuildGradleContents);
};

const deleteMockBuildGradleFile = () => {
  fs.unlinkSync(buildGradlePath);
};

describe("updateVersionCodeAndName", () => {
  beforeEach(() => {
    createMockBuildGradleFile();
  });

  afterEach(() => {
    deleteMockBuildGradleFile();
  });

  it("should update versionCode and versionName in build.gradle file", () => {
    updateVersionCodeAndName();

    const updatedBuildGradleContents = fs.readFileSync(buildGradlePath, "utf8");
    expect(updatedBuildGradleContents).toContain("versionCode 11");
    expect(updatedBuildGradleContents).toContain('versionName "1.3"');
  });
});

describe("updateVersionCodeOnly", () => {
  beforeEach(() => {
    createMockBuildGradleFile();
  });

  afterEach(() => {
    deleteMockBuildGradleFile();
  });

  it("should update versionCode in build.gradle file", () => {
    updateVersionCodeOnly();

    const updatedBuildGradleContents = fs.readFileSync(buildGradlePath, "utf8");
    expect(updatedBuildGradleContents).toContain("versionCode 11");
    expect(updatedBuildGradleContents).toContain('versionName "1.2"');
  });
});
