const userInput = prompt('Enter your name');
if(userInput.length > 4)
{
    alert('It\'s more than 4!');
}
else if(userInput.length < 4)
{
    alert('It\'s less than 4!');
}
else if(userInput.length==4)
{
    alert('your name is just right.');
}
