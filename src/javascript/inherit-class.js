class Parent {
  constructor(value) {
    this.val = value
  }

  getValue() {
    console.log(this.val)
  }
}

export class Child extends Parent {
  // eslint-disable-next-line no-useless-constructor
  constructor(value) {
    super(value)
  }
}
