var oInp = document.getElementsByClassName('inp');
var timer;
// 绑定事件
oInp.oninput = event;
// 执行函数
function event() {
    var self = this;
    clearTimeout(timer);
    timer = setTimeout(function () {
        console.log(self.value);
    },1000);
}

// 防抖功能函数 debounce(,)
function debounce(handle,delay){
    var timer;
    return function () {
        var self = this;
        var arg = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            handle.apply(self,arg);
        },delay);
    }
}

function event() {
    console.log(this.value);
}

oInp.oninput = debounce(event,1000);


