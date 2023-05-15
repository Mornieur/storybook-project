test("should pass", () => {
  expect(1 + 1).toBe(2);
});

import path from "path";
import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";
import { puppeteerTest } from "@storybook/addon-storyshots-puppeteer";

const getMatchOptions = ({ context: { fileName } }: any) => {
  const snapshotPath = path.join(
    path.dirname(fileName),
    "your-custom-directory"
  );
  return { customSnapshotsDir: snapshotPath };
};

initStoryshots({
  suite: "Puppeteer storyshots",
  // test: imageSnapshot({
  //   getMatchOptions,
  //   storybookUrl: "http://localhost:6006",
  // }),
  test: puppeteerTest(),
});

initStoryshots({
  suite: "Puppeteer storyshots",
  test: puppeteerTest({ storybookUrl: "http://localhost:6006" }),
});