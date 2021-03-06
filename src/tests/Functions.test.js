const tempMock = 20;
const pressMock = 1015;
const updatedAtMock = "08:55:09 PM";
const humMock = 89;
const cityMock = "São Paulo";

describe("helpers functions", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    const tk = require("timekeeper");
    tk.reset();
  });

  const helpers = require("src/helpers/functions");

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
  describe("testing the `colorChange` function", () => {
    test("set the temperature color", () => {
      document.body.innerHTML = `
      <p id="São Paulo" data-testid="temperature">
      29°
      </p>
      `;

      const colorChangeMock = jest.spyOn(helpers, "colorChange");
      colorChangeMock(cityMock);

      expect(colorChangeMock).toHaveBeenCalled();
    });
  });
});
