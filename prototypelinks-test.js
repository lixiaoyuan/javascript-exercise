//  原型链的问题
(function () {
    function SuperType() {
        this.colors = ['red', 'blue', 'green'];//这里只执行一次
    }
    function SubType() {

    }
    SubType.prototype = new SuperType();//这里执行SuperType()

    var instance1 = new SubType();
    instance1.colors.push('black');
    console.log(instance1.colors);

    var instance2 = new SubType();
    console.log(instance2.colors);
})();

//      借用构造函数

(function () {
    function SuperType() {
        this.colors = ['red', 'blue', 'green'];//这里只执行一次
        for (var item in arguments) {
            this.colors.push(arguments[item]);
        }
    }
    function SubType() {
        SuperType.call(this, 'yello', 'write');
    }
    SubType.prototype = new SuperType();//这里执行SuperType()

    var instance1 = new SubType();
    instance1.colors.push('black');
    console.log(instance1.colors);

    var instance2 = new SubType();
    console.log(instance2.colors);
})();

//      组合继承(原型链和借用构造函数组合)
(function () {
    function SuperType(name) {
        this.name = name;
        this.colors = ['red', 'blue', 'green'];
    }
    SuperType.prototype.sayName = function () {
        console.log(this.name);
    };
    function SubType(name, age) {
        SuperType.call(this, name);
        this.age = age;
    }

    SubType.prototype = new SuperType();
    SubType.prototype.constructor = SubType;
    SubType.prototype.sayAge = function () {
        console.log(this.age);
    };

    var instance1 = new SubType('Nicholas', 29);
    instance1.colors.push('black');
    console.log(instance1.colors);

    var instance2 = new SubType('Greg', 22);
    console.log(instance2.colors);
    //扩展
    console.log(instance2.constructor == Object);
    console.log(instance2.constructor == SubType);
})();