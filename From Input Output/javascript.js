let saveBtn = document.getElementById('save-btn');

let output = document.querySelector('tbody');

let sId = document.getElementById('s_id');
let sName = document.getElementById('sname');
let sEmail = document.getElementById('semail');
let sDepartment = document.getElementById('sdepartment');
let sDistrict = document.getElementById('sdistrict');

let profiles = [];
let x = new Array();





saveBtn.onclick = function(){
  const person ={
    id: sId.value,
    name: sName.value,
    email: sEmail.value,
    department: sDepartment.value,
    district: sDistrict.value
  };

  profiles.push(person);
  localStorage.setItem("p",JSON.stringify(profiles));
  showdata();

};

function showdata(){
output.innerHTML = '';

x = JSON.parse(localStorage.getItem("p"));
x.forEach(data => {

  output.innerHTML += `
  <tr>
   <td>${data.id}</td>
   <td>${data.name}</td>
   <td>${data.email}</td>
   <td>${data.department}</td>
   <td>${data.district}</td>
 </tr>`;
});
}



$(".add-btn").click(function(){

  $(".display-show").show();

});

$(".corner-close").click(function(){

  $(".display-show").hide();

});

$("#cancel-btn").click(function(){

  $(".display-show").hide();

});






























/*
function editRow(){
  table.rows[rIndex].cells[1].innerHTML = name.value;
  table.rows[rIndex].cells[2].innerHTML = id.value;
}

function eidttableDisplay(){

}


function listAdding(){

    let newRow = table.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = name.value;
    cell2.innerHTML = id.value;
    row++;

} */
