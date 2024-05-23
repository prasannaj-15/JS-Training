
 const container =  document.getElementById("container")

// access all div whose class name is div-class

const allDiv  = document.querySelectorAll(".div-class");

console.log(allDiv);

// allDiv.style.backgroundColor = "teal";

// for(let i=0;i<allDiv.length;i++){
//     // allDiv[i].style.backgroundColor = "teal";
//     allDiv[i].classList.add("round-div");
// allDiv[1].setAttribute("class","para1"); //adding a class to html element
// }

// const head = document.createElement("h1");
// head.innerText = "I'm a new heading";

// container.appendChild(head);



 function catchValue() {
    // console.log(input);
    const input = document.getElementById("input-text").value;
    // document.getElementById("heading").innerText = input;
    // alert(input);
    const head = document.createElement("h1");
    head.innerText = input;
    container.appendChild(head);
}




