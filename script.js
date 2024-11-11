function greet(name)
{
    console.log(`Hello ${name}`);

    //document.getElementById("greet").innerHTML=`Hello ${name}`;
    document.querySelector(".greet").innerHTML=`Hello ${name}`;
}

function callAPI(){
    const todo1 = fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));
}

greet("Clyde"); //Hello Clyde

/*
function greet(name)
{
    return `Hello ${name}`;
}s

console.log(greet("Clyde")); //Hello Clyde
*/