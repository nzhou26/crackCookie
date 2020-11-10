var express = require('express');
var app = express();
var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));


app.get('/', function(req, res){
    res.render("home");
});

/*num = Math.floor(Math.random() * 5);
if(num == 1 ){
    thing = "搓澡";
}else if (num == 2 ){
    thing = "挖鼻屎";
}else {
    thing = "other";
};
*/
var ranNum =Math.sqrt(d.getDate() * d.getMonth());
var strNum = ranNum.toString();
var lastDigit = parseInt(strNum[strNum.length -1]);
//var doSomething =["搓澡", "挖鼻屎", "吃棒棒糖", "玩动森", "画裸男"];
//var things;
if(lastDigit == 1 ){
    things = "搓澡";
}else if(lastDigit == 2){
    things = "唱歌";
}else if(lastDigit == 3){
    things = "掏耳朵";
}else if (lastDigit == 4){
    things = "挖鼻屎";
}else if(lastDigit == 5){
    things = "看云彩";
}else if(lastDigit == 6){
    things = "吃棒棒糖";
}else if(lastDigit == 7){
    things = "使劲跳三下";
}else if(lastDigit == 8){
    things = "玩动森";
}else if(lastDigit == 9){
    things = "看纪录片";
}else if(lastDigit == 0){
    things = "画裸男";
};

app.get('/result', function(req, res){
    res.render("result",{
        month:d.getMonth(),
        date:d.getDate(),
        thing:things

    })
});

app.get('*',function(req, res){
    res.send("wrong url")
});

app.listen(3000);
