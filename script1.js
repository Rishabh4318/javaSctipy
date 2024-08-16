
// Closure chain
function fun1(){
    var a;
    function fun2(num){
        a=5;
        console.log(a,num);
    }
    return fun2;
}

fun = fun1();
fun(3);

//Outter scope and inner scope
let count =0;
(function printCount(){
    if(count ===0){
        let count =1; // shadowing
        console.log(count);
    }
    console.log(count);
})();

// question 1 : adding the digits

function createBase(num1){
    let base = num1;            // on initialization we are add the value in outter scope 
    function addSix(number){
        base = number + base; // after that taking the value from outtter loop and add the base.
        console.log(base);
    }
    return addSix;
}

var addSix = createBase(6);
addSix(10);
addSix(21);

//question 3: Time Optimization in js
function findTheIndex(index){
    let a = [];
    for(let i =0;i<100000000;i++){
        a[i] = i * i;
    } 
    function optimizedIndexingChange(ind){
        console.log(a[ind]);
    }
    return optimizedIndexingChange;
    
}

find = findTheIndex(99000);
console.time('6');
find(10000);
console.timeEnd('6');
console.time('12');
find(53000);
console.timeEnd('12');
 
// Closure
// Blocked scope and setTimeout


// for (var i = 0; i < 3; i++) {
//     function inner(i) {
//         setTimeout(function log() {
//             console.log(i);
//         }, i * 1000);
//     }
// }
// inner(i);

//counter using scope and closure
function counter(){
    var counter = 0;
    function add(increment){
        counter = counter + increment
    }
    function retrive(){
        return counter;
    }
    return {
        add, retrive
    };
}

c = counter();
c.add(5);
c.add(6);
console.log(c.retrive());

//make this run only once

function callItOnce(){
    let called = 0;
    function checkingCalled(){
        if(called>0){
            console.log(called);
        }else{
            console.log("Rishabh Jain learing");
            called++;
        }
    }
    return checkingCalled;
}

checkingCalled = callItOnce();
checkingCalled();
checkingCalled();


//prototype in JS which is inheritence.











 









