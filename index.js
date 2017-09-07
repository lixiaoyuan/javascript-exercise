// function Person() {

// }
// Person.prototype.friends = ['Anjo', 'Kanma'];

// var p1 = new Person();
// var p2 = new Person();

// console.log(p1.friends);
// p1.friends.push('Pao');
// console.log(p2.friends);

//稳妥构造模式
// function Person(name, age, jon) {
//     var obj = new Object();
//     var t = 'hello ';
//     obj.sayName = function () {
//         alert(t + name);
//     };
//     return obj;
// }

// var p = new Person('zhangs', 22, 'Take');
// p.name = 'xxx';
// p.sayName2 = function () {
//     alert(p.name);
// }
// console.log(p);

//原型链
// function SuperType() {
//     this.property = 'SuperType Data';
//     console.log('ctor SuperType');
// }
// SuperType.prototype.getSuperValue = function () {
//     return this.property;
// };

// function SubType() {
//     console.log('ctor SubType');
//     this.subproperty = 'SubType Data';
// }
// SubType.prototype = new SuperType();
// SubType.prototype.GetSubValue = function () {
//     return this.subproperty;
// };
// SubType.prototype.getSuperValue=function(){
//     return 'overview new data';
// }
// console.log('----------------------');
// console.log('-----instance is SubType-----');
// console.log('-----instance2 is SuperType-----');
// var instance = new SubType();
// console.log('Instance SubType SuperData:  '+instance.getSuperValue());
// var instance2 = new SuperType();
// console.log('Instance2 SuperType SuperData:  '+instance2.getSuperValue());

// console.log(instance instanceof SubType);
// console.log(instance2 instanceof SubType);

// console.log('-----Begin isPrototypeOf-------');
// console.log("Object isPrototypeOf instance:  "+Object.prototype.isPrototypeOf(instance));
// console.log("SuperType isPrototypeOf instance:  "+SuperType.prototype.isPrototypeOf(instance));
// console.log("SubType isPrototypeOf instance:  "+SubType.prototype.isPrototypeOf(instance));
// console.log('=======');
// console.log("Object isPrototypeOf instance2:  "+Object.prototype.isPrototypeOf(instance2));
// console.log("SuperType isPrototypeOf instance2:  "+SuperType.prototype.isPrototypeOf(instance2));
// console.log("SubType isPrototypeOf instance2:  "+SubType.prototype.isPrototypeOf(instance2));
// console.log('-----End isPrototypeOf-------');