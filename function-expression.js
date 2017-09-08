//递归
(function () {
    function factorial(num) {
        if (num <= 1) {
            return 1;
        } else {
            return num * arguments.callee(num - 1);
        }
    }

    console.log(factorial(6));
})();

//闭包和Scope
//闭包就是能够读取其他函数内部变量的函数。
(function () {
    console.clear();
    function createMain(pname) {
        var data = { name: 'defaultName' };
        var ref = function (propertyName) {
            var ref2 = function (obj1, obj2) {
                var v1 = obj1[pname];
                var v2 = obj2[propertyName];
                if (v1 < v2) {
                    return -1;
                } else if (v1 > v2) {
                    return 1;
                } else {
                    return 0;
                }
                var lajiFun = function () {
                    console.log(data);
                };
            };
            return ref2;
        };
        return ref;
    }

    var comparFun = createMain('age')('Age');
    var comparFun2 = createMain('age')('Age');
    console.log(comparFun({ name: 'zs', age: 20 }, { name: 'ls', age: 24 }));
    console.log(comparFun2({ name: 'zs', age: 20 }, { name: 'ls', age: 24 }));
})();
//闭包2
(function () {
    console.clear();
    var data = { name: 'abcd' };
    function createMain() {
        return function () {
            return data;
        }
    }
    var tfun = createMain();
    var t2fun = createMain();
    console.log(tfun() == t2fun());//false
})();
//,闭包会携带包含它的函数的作用域，因此回比其他函数占用更多的内存。
//闭包问题
(function () {
    var result = new Array();
    for (var i = 0; i < 10; i++) {
        result[i] = function () {
            return i;
        };
    }
    return result;
})();



//关于this 变量
console.clear();
var name = 'Then Function';
var obj = {
    name: 'my object',
    getNameFunc: function () {
        return function () {
            return this.name;
        };
    }
};
var obj2 = {
    name: 'my object2',
    getname: obj.getNameFunc()
}
console.log(obj.getNameFunc()())//Then Function
console.log(obj2.getname());//my object2
console.log(obj.getNameFunc().call({ name: 'Then Call' }));//Then Call

//闭包测试2
console.clear();
　function f1() {
    var n = 999;
    nAdd = function () { n += 1 }
    function f2() {
        console.log(n);
    }
    return f2;
}
var result = f1();
result(); // 999
nAdd();
result(); // 1000

//ie 内存泄露
(
    function () {
        //assignHandler
        var ele = document.getElementById('testp');
        //解决
        //var id=ele.id
        ele.onclick = function () { 
            alert(ele.id);
            //alert(id);
        };
        //ele=null
    }
)();