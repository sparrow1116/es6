/**
 * Created by zhangyj on 2017/10/9.
 */
let co = require("co");

let sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let a = Math.random();
            if(a >= 0.5){
                console.log('>>>>>ok');
                resolve('ok');
            }else {
                console.log('>>>>>error');
                reject('error');
            }
        }, time);
    })
};


co(function* (){
    let aa;
    try{
        console.log('>>>>>>>>>>>>start:');
        aa = yield sleep(1000);
        console.log(aa);
    }catch(e){
        console.log('#########e:');
        console.log(e);
    }
});

/*var gen = function* (){
    for(var  i = 0; true; i++){
        var reset = yield {a:'aa',b:'bb'};
        if(reset){
            i = -1;
        }
    }
    yield  'a';
}

let g = gen();

let a = g.next();
console.log(a);

let b = g.next();
console.log(b);

let bb = g.next();
console.log(bb);

let c = g.next(true);
console.log(c);*/
