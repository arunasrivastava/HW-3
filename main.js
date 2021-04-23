// function createList(){
//     //Access information inputted by user 
//     let lname = document.getElementById("name").value;
//     let city  = document.getElementById("city").value;
//     let payment = document.getElementById("payment").value;
//     //variable assigned to the bulleted list that will be made 
//     let myList = document.getElementById("list");
//     myList.innerHTML="";
//     //Create li child needed to make a list
//     let listLI = document.createElement("li");
//     //Fill up the list content
//     listLI.innerHTML = lname + " " + city + " " + payment + "<br>"

//     //have the list point to list content (listLI)
//     myList.appendChild(listLI);
//     //list stated in html --> listLI
// }


let person = [];

document.getElementById("submit").addEventListener("click", function AddPerson()
{

  let myUL = document.getElementById("list");
  myUL.innerHTML = "";

  person.push(document.getElementById("name").value + " " + document.getElementById("city").value + " " + document.getElementById("payment").value);
  
  for (let i = 0; i < person.length ; i++)
  {
    let ul = document.createElement('ul');
    let li = document.createElement('li');

    document.getElementById("list").appendChild(ul);
 
    ul.appendChild(li);
    li.innerHTML = person[i]; 
  };

});
