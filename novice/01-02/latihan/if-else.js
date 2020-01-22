var greeting;
var time = new Date().getHours();
if (time < 10)
{
    greeting = "Good Morning";
}
else if(time < 20)
{
    greeting = "Good day";
}
else
{
    greeting = "Good Evening";
}