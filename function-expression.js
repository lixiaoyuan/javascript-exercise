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
    function createMain() {
        var data = { name: 'abcd' };
        return function () {
            return data;
        }
    }
    var tfun = createMain();
    var t2fun = createMain();
    console.log(tfun() == t2fun());//false
    //结论:
    //Scope 局部变量深克隆，参数浅克隆
})();
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