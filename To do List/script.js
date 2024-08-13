//append attach a new element
//ano yung events dito
//syntax creating an event

//document.getElementsById("addTask")---pwede ito pwede din queryselector
//call function is a function pass an argument
//funtion na no name called anonymous function
// # id
// arrow function is a shorter way to write a function
//function () can be () => { }

//1.  "addTask" dapat naclick using eventlistener --always check using alert
//2.  "taskInput"--once na makapag type then clicked button maappear dapat yung tnype mo
//3.   append all the text you type on "taskArea" by using back tick ` and div you created + $text
//4.

document.querySelector("#addTask").addEventListener("click", () => {
  if (document.querySelector("#taskInput").value != "") {
    document.querySelector("#taskArea").innerHTML += `<div> 
  <button class="btn btn-light markButton">✅</button>
        <span>${document.querySelector("#taskInput").value}</span>
    </div> <hr>`;
    document.querySelector("#taskInput").value = "";
  } else {
    alert("Field are empty");
  }

  //nothing events pa dito
  const markButtons = document.querySelectorAll(".markButton");
  markButtons.forEach((markButton) => {
    //here is the event
    markButton.addEventListener("click", (event) => {
      event.target.parentElement.lastElementChild.style =
        "text-decoration: line-through; font-weight: 900";
      event.target.remove();
    });

    //paano madetermine anong line and pinindot
    //target event property-- use para makuha nya element kung saan nanagyare yung event
  });
});
