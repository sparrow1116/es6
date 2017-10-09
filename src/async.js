/**
 * Created by zhangyj on 2017/10/9.
 */
let sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let a = Math.random()
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

let start = async function () {
    try{
        console.log('>>>>>>>start:');
        let result = await sleep(3000);
        console.log(result); // 收到 ‘ok’
    }catch(e){
        console.log('################e');
        console.log(e);
    }

};
start();