function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
escapeRegExp('aris abdul ajis')

var myRe = /d(b+)d/g;
var myArray = myRe.exec('cdbbdbsbz');
console.log('The value of lastIndex is ' + myRe.lastIndex);

var myArray = /d(b+)d/g.exec('cdbbdbsbz');
console.log('The value of lastIndex is ' + /d(b+)d/g.lastIndex);

var re = /(\w+)\s(\w+)/;
var str = 'Ajis Aris';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);

var re = /\w+\s/g;
var str = 'fee fi fo fum';
var myArray = str.match(re);
console.log(myArray);

var xArray; while(xArray = re.exec(str)) console.log(xArray);