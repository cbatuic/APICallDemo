function greet(name)
{
    console.log(`Hello ${name}`);

    //document.getElementById("greet").innerHTML=`Hello ${name}`;
    document.querySelector(".greet").innerHTML=`Hello ${name}`;
}

function callAPI(){
    fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        document.querySelector("#todo1_id").innerHTML = json.id;
        document.querySelector("#todo1_title").innerHTML = json.title;
        document.querySelector("#todo1_completed").innerHTML = json.completed;
      });
}

greet("Clyde"); //Hello Clyde
callAPI();

/*
function greet(name)
{
    return `Hello ${name}`;
}s

console.log(greet("Clyde")); //Hello Clyde
*/
