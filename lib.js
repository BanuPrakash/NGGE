// High Order Function
// action is a function
function forEach(elems, action) {
    for(var i = 0 ; i < elems.length; i++) {
        action(elems[i]);
    }
}

function filter(elems, predicate) {
    var data = [];
    forEach(elems, function(elem) {
        if(predicate(elem)) {
            data.push(elem);
        }
    });
    return data;
}

