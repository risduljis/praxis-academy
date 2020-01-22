// nested
function add() {
    var counter = 0;
    function plus() {counter += 1;}
    plus();    
    return counter; 
}
add();

// closure

var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();