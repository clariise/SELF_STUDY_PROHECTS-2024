//append attach a new element
//ano yung events dito
//syntax creating an event

//document.getElementsById("addTask")---pwede ito pwede din queryselector
//call function is a function pass an argument
//funtion na no name called anonymous function
// # id
// arrow function is a shorter way to write a function
//function () can be () => { }

document.querySelector("#addTask").addEventListener("click", () => {
  if (document.querySelector("#taskInput").value != "") {
    document.querySelector("#taskArea").innerHTML += `<div> 
  <button class="btn btn-light">✅</button>
        <span>${document.querySelector("#taskInput").value}</span>
    </div> <hr>`;
    document.querySelector("#taskInput").value = "";
  } else {
    alert("Field are empty");
  }
});
