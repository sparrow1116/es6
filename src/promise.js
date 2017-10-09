/**
 * Created by zhangyj on 2017/9/26.
 */
var promise = new Promise(function(resolve, reject) {
    /*if (/!* 异步操作成功 *!/){
        resolve(value);
    } else {
        reject(error);
    }*/
    setTimeout(function(){
        let a = Math.random()
        if(a >= 0.5){
            resolve('aaa');
        }else{
            reject('bbb')
        }
    },1000);
});
promise.then(function(value) {
    // success
    console.log('>>>>>>>>>>');
    console.log(value);
}/*, function(value) {
// failure
    console.log('<<<<<<<<<<<<');
    console.log(value);
}*/).catch(function(e){
    console.log('#############');
    console.log(e);
});