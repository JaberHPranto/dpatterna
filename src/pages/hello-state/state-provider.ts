export function getState(message: string) {
  switch (message) {
    case "enter":
      return;

    case "payOk":
      return;

    case "payFailed":
      return;
    default:
      return;
  }
}

// State Pattern
interface GateState {
  enter(): string;
  payOk(): string;
  payFailed(): string;
}

// Context
class Gate {
  state: GateState;
  constructor(state: GateState) {
    this.state = state;
  }

  changeState(state: GateState) {
    this.state = state;
  }

  enter(): void {
    this.state.enter();
  }

  payOk(): void {
    this.state.payOk();
  }
  payFailed(): void {
    this.state.payFailed();
  }
}

// Concrete class
class OpenGate implements GateState {
  gate: Gate;
  constructor(gate: Gate) {
    this.gate = gate;
  }
  enter(): string {
    this.gate.changeState(new CloseGate(this.gate));
    return "close";
  }
  payOk(): string {
    this.gate.changeState(new OpenGate(this.gate));
    return "open";
  }
  payFailed(): string {
    this.gate.changeState(new OpenGate(this.gate));
    return "open";
  }
}
class CloseGate implements GateState {
  gate: Gate;
  constructor(gate: Gate) {
    this.gate = gate;
  }
  enter(): string {
    this.gate.changeState(new CloseGate(this.gate));
    return "close";
  }
  payOk(): string {
    this.gate.changeState(new OpenGate(this.gate));
    return "open";
  }
  payFailed(): string {
    this.gate.changeState(new CloseGate(this.gate));
    return "open";
  }
}
