// @ts-ignore
import { invokeHandler } from "../pages/hello-command/command-light";
import {
  Light,
  LightOffCommand,
  LightOnCommand,
  RedLight,
  RedLightOnCommand,
  RemoteController,
} from "../patterns/command/lightCommand";

describe("Light Command Test", () => {
  test("Light On Command", () => {
    let expectation = new RemoteController(new LightOnCommand(new Light()));
    let reality = invokeHandler("lightOn");
    expect(reality).toEqual(expectation.execute());
  });
  test("Light Off Command", () => {
    let expectation = new RemoteController(new LightOffCommand(new Light()));
    let reality = invokeHandler("lightOff");
    expect(reality).toEqual(expectation.execute());
  });
});

describe("Red Light Command Test", () => {
  test("Red Light On Command", () => {
    let expectation = new RemoteController(
      new RedLightOnCommand(new RedLight())
    );
    let reality = invokeHandler("redLightOn");
    expect(reality).toEqual(expectation.execute());
  });
  test("Red Light Increase Luminosity Command", () => {
    let expectation = "red1";
    let reality = invokeHandler("increaseLuminosity");
    expect(reality).toEqual(expectation);
  });
  test("Red Light decrease Luminosity Command", () => {
    let expectation = "red0";
    let reality = invokeHandler("decreaseLuminosity");
    expect(reality).toEqual(expectation);
  });
});
