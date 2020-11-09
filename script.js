

var left_value = 30; //Default value
var top_value = 30; //Default value
var interval_id = 0 //Default value
var interval_time = 100 //0.1 second
var check_interval_id = 0
var score = 0

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


// Check current position
function CheckCurrentPosition()
{
    if (top_value < 30 || top_value > 540 || left_value < 30 || left_value > 1290 )
    {  
        RestartGame()
    }
    else if(IsBoxOnTarget())
    {
        score += 1
        $('#score').html(score)
    }
} 


function IsBoxOnTarget()
{
    if (top_value == parseInt($('#target-box').css("top").split('px')[0]) &&
    left_value == parseInt($('#target-box').css("left").split('px')[0]))
    {
        return true
    } 
    return false
}

function RestartGame()
{
    clearInterval(interval_id);
    left_value = 30; //Default value
    top_value = 30; //Default value
    score = 0
    $('#score').html(score)
    $('#snake-box').css("left", `${left_value}px`);  
    $('#snake-box').css("top", `${top_value}px`);  
    alert("You losed the game..")
}




function LeftDirection()
{
    clearInterval(interval_id);
    interval_id = setInterval(function(){
        left_value = parseInt($('#snake-box').css("left").split('px')[0])
        left_value -= 30 
        $('#snake-box').css("left", `${left_value}px`);
        CheckCurrentPosition()
    }, interval_time); // 0.2 sec
    
}

function TopDirection()
{
    clearInterval(interval_id);
    interval_id = setInterval(function(){
        top_value = parseInt($('#snake-box').css("top").split('px')[0])
        top_value -= 30 
        $('#snake-box').css("top", `${top_value}px`); 
        CheckCurrentPosition()
    }, interval_time); // 0.2 sec
}

function RightDirection()
{
    clearInterval(interval_id);
    interval_id = setInterval(function(){
        left_value = parseInt($('#snake-box').css("left").split('px')[0])
        left_value += 30 
        $('#snake-box').css("left", `${left_value}px`); 
        CheckCurrentPosition()
    }, interval_time); // 0.2 sec

}

function DownDirection()
{
    clearInterval(interval_id);
    interval_id = setInterval(function(){
        top_value = parseInt($('#snake-box').css("top").split('px')[0])
        top_value += 30 
        $('#snake-box').css("top", `${top_value}px`);         
        CheckCurrentPosition()
    }, interval_time); // 0.2 sec
}

