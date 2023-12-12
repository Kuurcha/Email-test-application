export class SharedClass {
  constructor(public message: string) {}

  printMessage(): void {
    console.log(this.message);
  }
}
