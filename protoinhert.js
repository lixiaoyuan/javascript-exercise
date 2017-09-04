{
    var funs = new Array();
    funs[funs.length] = function () {
        var person = {
            name: 'Nicholas',
            friends: ['Shelby', 'Court', 'Vans']
        };

        var anotherPerson = Object.create(person);
        anotherPerson.name = 'Greg';
        anotherPerson.friends.push('Rob');

        var yetAnotherPerson = Object.create(person);
        yetAnotherPerson.name = 'Linda';
        yetAnotherPerson.friends.push('Barbie');

        console.log(person.friends);

    };

    funs.forEach(function(fun) {
        fun.call(this);
    }, this);
}