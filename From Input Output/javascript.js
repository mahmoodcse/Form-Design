//add row
let rwIndex,table = document.getElementById('info-table');
let sId = document.getElementById('sid'),
name = document.getElementById('name'),
department = document.getElementById('department'),
email = document.getElementById('email');

function addHtmlTableRow(){
  let newRow = table.insertRow(table.length),
  cell1 = newRow.insertCell(0),
  cell2 = newRow.insertCell(1),
  cell3 = newRow.insertCell(2),
  cell4 = newRow.insertCell(3);


  cell1.innerHTML = sId.value;
  cell2.innerHTML = name.value;
  cell3.innerHTML = department.value;
  cell4.innerHTML = email.value;
selectedRowInput();


}


//display sellected row data into input
function selectedRowInput(){

  for(let i=1;i < table.rows.length;i++){
    table.rows[i].onclick = function(){
      rwIndex = this.rowIndex;
      if(rwIndex){
      table.rows[rwIndex].bgColor = "green";}
      console.log(rwIndex);
      sId.value = this.cells[0].innerHTML;
      name.value = this.cells[1].innerHTML;
      department.value = this.cells[2].innerHTML;
      email.value = this.cells[3].innerHTML;
    };
  }
}

selectedRowInput();

function editSelectedRow(){
  table.rows[rwIndex].cells[0].innerHTML = sId.value;
  table.rows[rwIndex].cells[1].innerHTML = name.value;
  table.rows[rwIndex].cells[2].innerHTML = department.value;
  table.rows[rwIndex].cells[3].innerHTML = email.value;
}



function removeSelectedRow(){
  if(rwIndex > 0){
  table.deleteRow(rwIndex);
  rwIndex = null;
}
  else{
    alert("Please select a row!");
  }
}


//jquery block

$("document").ready(function(){
  $("#showAddform").click(function(){
    $(".display-show").show();
    $("#save-btn").show();
    $("#update-btn").hide();
  });

  $("#close-btn").click(function(){
    $(".display-show").hide();
  });

  $(".corner-close").click(function(){
    $(".display-show").hide();
  });

  $("#showEditform").click(function(){
    $(".display-show").show();
    $("#update-btn").show();
    $("#save-btn").hide();
  });



});
/*
let rwIndex,
table = document.getElementById('table'),
sId = document.getElementById('sid').value,
name = document.getElementById('name').value,
department = document.getElementById('department').value,
email = document.getElementById('email').value;

function addHtmlTableRow(){
  var newRow = table.insertRow(table.length),
  cell1 = newRow.insertCell(0),
  cell2 = newRow.insertCell(1),
  cell3 = newRow.insertCell(2),
  cell4 = newRow.insertCell(3);

  cell1.innerHTML = sId;
  cell2.innerHTML = name;
  cell3.innerHTML = department;
  cell4.innerHTML = email;

  selectedRowInput();
}


//display sellected row data into input
function selectedRowInput(){

  for(var i=0;i < table.rows.length;i++){
    table.rows[i].onclick = function(){
      rwIndex = this.rowIndex;
      console.log(rwIndex);
      sId = this.cells[0].innerHTML;
      name = this.cells[1].innerHTML;
      department = this.cells[2].innerHTML;
      email = this.cells[3].innerHTML;
    };
  }
}

selectedRowInput();

function editSelectedRow(){
  table.rows[rwIndex].cells[0].innerHTML = sId;
  table.rows[rwIndex].cells[1].innerHTML = name;
  table.rows[rwIndex].cells[2].innerHTML = department;
  table.rows[rwIndex].cells[3].innerHTML = email;
}



function removeSelectedRow(){
  table.deleteRow(rwIndex);
}
*/


/*let saveBtn = document.getElementById('save-btn');
let editBtn = document.getElementById('edit-btn');

let output = document.querySelector('tbody');
let infoTable = document.querySelector('table');

let sId = document.getElementById('s_id');
let sName = document.getElementById('sname');
let sEmail = document.getElementById('semail');
let sDepartment = document.getElementById('sdepartment');
let sDistrict = document.getElementById('sdistrict');

let profiles = [];
let x = new Array();
let i;




/*  for( i=0; i < output.rows.length; i++){
    output.rows[i].onclick = function(){
      rwIndex = this.rowIndex;
      sId.value = this.cells[0].innerHTML;
      sName.value = this.cells[1].innerHTML;
      sEmail.value = this.cells[2].innerHTML;
      sDepartment.value = this.cells[3].innerHTML;
      sDistrict.value = this.cells[4].innerHTML;
      console.log(rwIndex);
  };
}

//save button
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
sId.value = "";
sName.value = "";
sEmail.value  = "";
sDepartment.value = "";
sDistrict.value = "";
  showdata();
};

//edit button



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

$(".edit-btn").click(function(){

  $(".display-show").show();

});

$(".corner-close").click(function(){

  $(".display-show").hide();

});

$("#cancel-btn").click(function(){

  $(".display-show").hide();

});




*/
















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
