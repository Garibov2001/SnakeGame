
console.log(window.innerWidth)


var left_value = 0; //Default value
var top_value = 0; //Default value
var interval_id = 0 //Default value
var interval_time = 100 //0.1 second


document.addEventListener("keydown", event => {
    if (event.keyCode === 37) 
    {
        LeftDirection()
    }
    else if (event.keyCode === 38) 
    {
        TopDirection()
    }
    else if (event.keyCode === 39) 
    {
        RightDirection()
    }
    else if (event.keyCode === 40) 
    {
        DownDirection()
    }
  });

function LeftDirection()
{
    clearInterval(interval_id);
    interval_id = setInterval(function(){
        left_value = parseInt($('#snake-box').css("left").split('px')[0])
        left_value -= 30 
        $('#snake-box').css("left", `${left_value}px`);
    }, interval_time); // 0.2 sec
}

function TopDirection()
{
    clearInterval(interval_id);
    interval_id = setInterval(function(){
        top_value = parseInt($('#snake-box').css("top").split('px')[0])
        top_value -= 30 
        $('#snake-box').css("top", `${top_value}px`); 
    }, interval_time); // 0.2 sec
}

function RightDirection()
{
    clearInterval(interval_id);
    interval_id = setInterval(function(){
        left_value = parseInt($('#snake-box').css("left").split('px')[0])
        left_value += 30 
        $('#snake-box').css("left", `${left_value}px`); 
    }, interval_time); // 0.2 sec

}

function DownDirection()
{
    clearInterval(interval_id);
    interval_id = setInterval(function(){
        top_value = parseInt($('#snake-box').css("top").split('px')[0])
        top_value += 30 
        $('#snake-box').css("top", `${top_value}px`); 
    }, interval_time); // 0.2 sec
}