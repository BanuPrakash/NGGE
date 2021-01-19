function forEach(elems, action) {
    for (var i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}
var data = [662, 2, 72, 77];
var names = ["George", "jack", "Larry"];
forEach(data, console.log);
forEach(names, console.log);
