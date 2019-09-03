// 组合继承
{
  function Parent(value) {
    this.value = value
  }

  Parent.prototype.getValue = function () {
    console.log(this.value)
  }

  function Child(value) {
    Parent.call(this, value)
  }

  Child.prototype = new Parent()

  const child = new Child(1)
  child.getValue()

  console.log(child instanceof Parent)
}

// 组合寄生继承
{
  function Parent(value) {
    this.value = value
  }

  Parent.prototype.getValue = function () {
    console.log(this.value)
  }

  function Child(value) {
    Parent.call(this, value)
  }

  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child

  const child = new Child(1)
  child.getValue()

  console.log(child instanceof Parent)
}
