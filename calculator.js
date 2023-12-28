let store='';
function cal(val){
    store = store + val;
//console.log(val)
document.getElementById('show').innerHTML = store
}

function out(){
console.log(eval(store))
document.getElementById('show').innerHTML = eval(store)
}

function AC(){
store =''
document.getElementById('show').innerHTML=store
}

function del(){
store = store.slice(0,store.length-1);
document.getElementById('show').innerHTML = store
}

function sqr(){
store = store*store
document.getElementById('show').innerHTML = store
}