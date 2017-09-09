(function () {
    var ele = document.getElementById('testp');
    ele.onclick = function () {
        ele.insertBefore(ele.lastChild.cloneNode(true),null);
        console.log(ele.attributes.getNamedItem('Cap').nodeValue);
    };
})();