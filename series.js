s1 = s1 = () => (5);
s2 = s2 = () => (10);
s3 = s3 = () => (15);
s4 = s4 = () => ('FuncEnd');

function series() {
    let i = 1;
    let res = [];
    let param = arguments[0];
    let len = arguments.length - 1;
    while (i < len) {
        i++; //console.log('i ',i); console.log('param ',arguments[i-1]()); 
        if (arguments[i - 1]() < param) {
            arguments[i - 1]();
            res.push(arguments[i - 1]());
        } else {
            arguments[len]();
            res.push(arguments[len]());
            return res;
        }
    }
    res.push(arguments[len]());
    return res;
};

exports.series = series;
exports.s1 = s1;
exports.s2 = s2;
exports.s3 = s3;
exports.s4 = s4;

//console.log('result ', series(1, s1, s2, s3, s4));