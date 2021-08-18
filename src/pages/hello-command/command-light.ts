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

export const actionHandler = (command: Command) => {
  const remoteController = new RemoteController(command);
  return remoteController.execute();
};

var isRedLightOn: boolean = false;

export const invokeHandler = (command: string) => {
  switch (command) {
    case "lightOn":
      if (isRedLightOn) isRedLightOn = false;
      return actionHandler(new LightOnCommand(new Light()));
      break;
    case "lightOff":
      isRedLightOn = false;
      return actionHandler(new LightOffCommand(new Light()));
      break;
    case "redLightOn":
      isRedLightOn = true;
      return actionHandler(new RedLightOnCommand(new RedLight()));
      break;
    case "increaseLuminosity":
      if (isRedLightOn)
        return actionHandler(
          new RedLightIncreaseLuminosityCommand(new RedLight())
        );
      break;
    case "decreaseLuminosity":
      if (isRedLightOn)
        return actionHandler(
          new RedLightDecreaseLuminosityCommand(new RedLight())
        );
      break;

    default:
      return actionHandler(new LightOnCommand(new Light()));
      break;
  }
};
