import { cleanup } from "@testing-library/react";

const tempMock = 20;
const pressMock = 1015;
const updatedAtMock = "08:55:09 PM";
const humMock = 89;
const cityMock = "São Paulo";

beforeEach(() => {
  jest.restoreAllMocks();
});

afterEach(() => {
  cleanup();
  const tk = require("timekeeper");
  tk.reset();
});

const helpers = require("src/helpers/functions");

describe("helpers functions", () => {
  describe("testing the `displayTime` function", () => {
    test("returns formated time AM", () => {
      const tk = require("timekeeper");
      const time = "Sun Jan 30 2022 10:07:13 GMT-0300";

      tk.freeze(time);

      const displayTimeMock = jest.spyOn(helpers, "displayTime");
      const result = displayTimeMock();

      expect(result).toBe("10:07:13 AM");
    });
    test("returns formated time PM", () => {
      const tk = require("timekeeper");
      const time = "Sun Jan 30 2022 20:25:50 GMT-0300";

      tk.freeze(time);

      const displayTimeMock = jest.spyOn(helpers, "displayTime");
      const result = displayTimeMock();

      expect(result).toBe("08:25:50 PM");
    });
  });
  describe("testing the `saveLocalStorage` function", () => {
    test("set data in local storage", () => {
      const saveLocalStorageMock = jest.spyOn(helpers, "saveLocalStorage");
      saveLocalStorageMock(
        tempMock,
        pressMock,
        updatedAtMock,
        humMock,
        cityMock
      );

      expect(saveLocalStorageMock).toHaveBeenCalled();
    });
  });
});
