var oInp = document.getElementById('inp');
var oUl = document.getElementById('list');
oInp.oninput = function () {
    var value = this.value;
    var oScript = document.createElement('script');
    oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+ value +'&cb=addDom';
    document.body.appendChild(oScript);
}

function addDom(data) {
    console.log(data.s);
    var str = '';
    if(data.s.length > 0){
        data.s.forEach(function(ele,index){
            str += '<li><a href = "https://www.baidu.com/s?wd='+ ele +'">'+ ele +'</a></li>';
        });
        oUl.innerHTML = str;
        oUl.style.display = 'block';
    }else{
        oUl.style.display = 'none';
    }
    
}