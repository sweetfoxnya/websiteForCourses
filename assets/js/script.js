// let
// const

var a = 5;
var b,c,d;
const v= 4;

// string
const name = 'Вика';
const surname = 'Mel';
const fullname = surname + name;
const fullname2 = surname + '' + name;
const fullname3 =`My fullName is ${surname} ${name}`;
console.log(name)
console.log(a)

// number
const age = 20;
const price = 20.4;
console.log('Mu log',age,price)

//BigInt
const num = 99999n;

// boolean
const flog = true;
const flog2 = false;

//null, undefined
var isAlive;
console.log(isAlive)
isAlive = null;
isAlive = true;
isAlive = undefined;

// Object

const user =  {
    name: 'Dbrf',
    age: 20 + 2,
    isAlive: true

}
console.log(user)

var var1 = 45
var varRes = var1 + 5;
console.log(varRes)

var1 = '45'
var varRes2 = var1 + 5;
console.log(varRes2)
var nul = null

//typeof
console.log(typeof name)
console.log(typeof age)
console.log(typeof flog)
console.log(typeof nul)

//Math
const x = 10;
var y = x + 1;
w = x + 1;
y = x * w;

// comparing
// == сравнивает значения
// === сравнивает значения и тип
// !=
// !== сранивание значение и тип
// >
// <
// >=
// <=
// &&
// ||

if (a > 100) {

}

if (a > 100) {
    console.log()
} else if (a === 100) {

} else {
    console.log()
}
// if (undefined) false
// if (null) false
// if (boolean) boolean
// if (number) true num > 0 false num < 0
// if (string) true - строка не пустая, false строка пустая
// ша (Object) true