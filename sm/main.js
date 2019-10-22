function sayHello(name) {
  console.log(qq);
  throw new Error('error ~~~');
}

function a() {
  console.log(`fn a is called~`);
  b();
}

function b() {
  console.log(`fn b is called~`);
  sayHello('jack');
}

a();