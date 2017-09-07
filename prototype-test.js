//原形对象的问题
(function () {
    function Person() {

    }
    Person.prototype = {
        constructor: Person,
        name: 'Nicholas',
        age: 25,
        job: 'Software Engineer',
        friends: ['Shelby', 'Court'],
        sayName: function () {
            console.log(this.name);
        }
    };
    var person1 = new Person();
    var person2 = new Person();
    console.log(person1.friends);
    console.log(person2.friends);
    console.log(person1.friends == person2.friends);
})();
//    组合使用构造函数模式和原型模式
//这种构造函数与原型混成的模式，是目前在ECMAScript中使用最广泛、
//认同度最高的一种创建自定义的方法。
(function () {
    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.friends = ['Shelby', 'Court'];
    }
    Person.prototype = {
        constructor: Person,
        sayName: function () {
            console.log(this.name);
        }
    }
    var person1 = new Person('Nicholas', 29, 'Software Engineer');
    var person2 = new Person('Greg', 27, 'Doctor');
    person1.friends.push('Van');
    console.log(person1.friends);
    console.log(person2.friends);
    console.log(person1.friends == person2.friends);
    console.log(person1.sayName == person2.sayName);
})();
//   动态原型模式
(function () {
    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        if (typeof this.sayName != 'function') {
            Person.prototype.sayName = function () {
                console.log(this.name);
                console.log(eval('this.job'));
            };
        }
    }
    var friend = new Person('Nicholas', 25, 'Software Engineer');
    friend.sayName();
})();
//      寄生构造函数模式
(function () {
    function Person(name, age, job) {
        var o = new Object();
        o.name = name;
        o.age = age;
        o.job = job;
        o.sayName = function () {
            console.log(this.name);
        };
        return o;
    }
    var friend = new Person('Nicholas', 22, 'Software Engineer');
    friend.sayName();
})();
//      稳妥构造模式
(function () {
    function Person(name, age, job) {
        var o = new Object();
        o.sayName = function () {
            console.log(name);//只能在Person类里面调用Name
        };
        return o;
    }
    var friend = new Person('Nicholas', 22, 'Software Engineer');
    friend.sayName();
})();