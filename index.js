//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'




//resolve // QUESTION 1 here
const aOne = document.getElementById("a-1");
const newDiv = document.createElement("DIV");
newDiv.setAttribute("class","square");
newDiv.textContent = "x";
aOne.appendChild(newDiv);
newDiv.addEventListener("click", function(){
  if (newDiv.textContent === "x") {
    newDiv.textContent = "o";
  } else {
    newDiv.textContent = "x";
  }
});




//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];
const aTwo = document.getElementById("a-2");
const newSelect = document.createElement("SELECT");
for (let i = 0; i < colors.length; i++) {
  selectItem = document.createElement("OPTION");
  selectItem.setAttribute("value",colors[i]);
  selectItem.textContent=colors[i];
  newSelect.appendChild(selectItem);
}
const removeButton = document.createElement("BUTTON");
removeButton.textContent="Remove";
aTwo.appendChild(newSelect);
aTwo.appendChild(removeButton);
removeButton.addEventListener("click", function(){
  let opts = newSelect.childNodes;
  for (let i = 0; i < opts.length; i++) {
    if (newSelect.value == opts[i].value) {
      opts[i].remove();
      break;
    }
  }
});



//resolve // QUESTION 2 here






//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)
const radius = document.getElementById("radius");
const volume = document.getElementById("volume");
const area = document.getElementById("area");

const calculate_sphere = () =>{
  // console.log(radius.value);
  const rNum = parseFloat(radius.value);
  // console.log(rNum);
  if (!isNaN(rNum)) {
    const vNum = (4.0/3.0) * Math.PI * ( rNum ** 3);
    const aNum = 4.0 * Math.PI * ( rNum ** 2);
  // console.log(rNum, vNum, aNum);
    volume.value = vNum.toFixed(4);
    area.value = aNum.toFixed(4);
  }
  return false;
}

window.onload = document.getElementById('MyForm').onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked




//------------------------Question 4 ---------------------------
//Now in this Exercise we want you to create 3 buttons wich clicks actions are going to hide the respective question above with their aswer and if they are hidden then the click option should be display the question with their respective aswer
// append the 3 buttons to the element with the 'id = a-4' as childrens
const aFour = document.getElementById("a-4");
const questions = document.getElementsByClassName('question-item');
const toggleObjs = [];
for (let i=0;i<3;i++){
  toggleObjs[i]= {button: document.createElement("BUTTON"), question: questions[i]};
  toggleObjs[i].button.textContent = `Hide Question ${i+1}`;
  aFour.appendChild(toggleObjs[i].button)
}
aFour.addEventListener('click', (e) => {
  for (let i=0;i<3;i++) {
    if (e.target === toggleObjs[i].button) {
      if (toggleObjs[i].question.style.visibility != 'hidden') {
        toggleObjs[i].question.style.visibility = 'hidden';
        toggleObjs[i].button.textContent = `Show Question ${i+1}`;
      } else {
        toggleObjs[i].question.style.visibility = 'visible';
        toggleObjs[i].button.textContent = `Hide Question ${i+1}`;
      }
      break;
    }
  }
});


//resolve // QUESTION 4 here
