var msg = 'enter android name and version';

var a = prompt(msg);


for (var i = 0; i < a.length - 1; i++) {
    a[i] += " ";
}
console.log("android name is :"+a.split(), "version is:"+a.split())
