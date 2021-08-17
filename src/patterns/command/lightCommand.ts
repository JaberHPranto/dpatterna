// @ts-ignore

// Receiver
export class Light {
  public lightOn(): string {
    return "on";
  }

  public lightOff(): string {
    return "off";
  }
}

var luminosityLevel = 0;
export class RedLight {
  public redLightOn(): string {
    luminosityLevel = 0;
    return "red0";
  }

  public increaseLuminosity(): string {
    luminosityLevel++;
    if (luminosityLevel > 3) {
      luminosityLevel = 3;
    }
    return `red${luminosityLevel}`;
  }

  public decreaseLuminosity(): string {
    luminosityLevel--;
    if (luminosityLevel < 0) {
      luminosityLevel = 0;
    }
    return `red${luminosityLevel}`;
  }
}

// Command Interface
export interface Command {
  execute(): string;
}

// Command Concrete Classes
export class lightOnCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): string {
    return this.light.lightOn();
  }
}

export class lightOffCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): string {
    return this.light.lightOff();
  }
}

export class RedLightOnCommand implements Command {
  redLight: RedLight;

  constructor(redLight: RedLight) {
    this.redLight = redLight;
  }

  execute(): string {
    return this.redLight.redLightOn();
  }
}

export class RedLightIncreaseLuminosityCommand implements Command {
  redLight: RedLight;

  constructor(redLight: RedLight) {
    this.redLight = redLight;
  }

  execute(): string {
    return this.redLight.increaseLuminosity();
  }
}

export class RedLightDecreaseLuminosityCommand implements Command {
  redLight: RedLight;

  constructor(redLight: RedLight) {
    this.redLight = redLight;
  }

  execute(): string {
    return this.redLight.decreaseLuminosity();
  }
}

// Invoker
export class RemoteController {
  command: Command;

  constructor(command: Command) {
    this.command = command;
  }

  execute(): string {
    return this.command.execute();
  }
}
