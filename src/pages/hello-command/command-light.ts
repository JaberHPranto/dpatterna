// @ts-ignore
import {
  Command,
  Light,
  LightOffCommand,
  LightOnCommand,
  RedLight,
  RedLightDecreaseLuminosityCommand,
  RedLightIncreaseLuminosityCommand,
  RedLightOnCommand,
  RemoteController,
} from "../../patterns/command/lightCommand";

// execute corresponding receiver
const actionHandler = (command: Command) => {
  const remoteController = new RemoteController(command);
  return remoteController.execute();
};

// state for normal and red light
var isRedLightOn: boolean = false;
var isLightOn: boolean = false;

// Handling different events invoked by a invoker (here Remote)
export const invokeHandler = (command: string) => {
  var tempResult;
  switch (command) {
    case "lightOn":
      if (isRedLightOn) isRedLightOn = false;
      isLightOn = true;
      return actionHandler(new LightOnCommand(new Light()));
      break;
    case "lightOff":
      isRedLightOn = false;
      isLightOn = false;
      return actionHandler(new LightOffCommand(new Light()));
      break;
    case "redLightOn":
      isRedLightOn = true;
      return actionHandler(new RedLightOnCommand(new RedLight()));
      break;
    case "increaseLuminosity":
      if (isRedLightOn) {
        return actionHandler(
          new RedLightIncreaseLuminosityCommand(new RedLight())
        );
      } else {
        tempResult = isLightOn
          ? actionHandler(new LightOnCommand(new Light()))
          : actionHandler(new LightOffCommand(new Light()));
        return tempResult;
      }
      break;
    case "decreaseLuminosity":
      if (isRedLightOn) {
        return actionHandler(
          new RedLightDecreaseLuminosityCommand(new RedLight())
        );
      } else {
        tempResult = isLightOn
          ? actionHandler(new LightOnCommand(new Light()))
          : actionHandler(new LightOffCommand(new Light()));
        return tempResult;
      }
      break;

    default:
      return actionHandler(new LightOnCommand(new Light()));
      break;
  }
};
