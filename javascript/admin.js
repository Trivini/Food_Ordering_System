function order() {
    // document.getElementById('tb').style.visibility='visible';
    // document.getElementById('ord').style.backgroundColor = "#fb8500";
    document.getElementById("orderdiv").style.visibility ="visible";
    document.getElementById("billMenu").style.visibility ="hidden";
}

function dashboard()
{
    document.getElementById("orderdiv").style.visibility ="hidden";
    document.getElementById("billMenu").style.visibility ="hidden";
}

function products()
{
    document.getElementById("orderdiv").style.visibility ="hidden";
    document.getElementById("billMenu").style.visibility ="hidden";
    document.getElementById("products").style.visibility="visible";
}

// alert("You Got New Order");

 var Dash= document.getElementById("DashBoard");
  Dash.addEventListener("click",function(event){
    document.getElementById("orderdiv").style.visibility ="hidden";
})

var bill= document.getElementById("bill");
bill.addEventListener("click",function(event){
  document.getElementById("orderdiv").style.visibility ="hidden";
  document.getElementById("billMenu").style.visibility ="visible";
//   document.getElementById("BillTableMenu").style.visibility="visible"
})
// var ch=document.getElementById("check1");
// ch.addEventListener("onclick", function(){
//         alert("you have cliked");
// });

// function checked(icon)
// {
//     var clikedRow=icon.closest('tr');
//     var pendingtable=document.getElementById("tb1");
//     var cloneRow=clikedRow.cloneNode(true);
//     pendingtable.appendChild(cloneRow);
//     clikedRow.parentNode.removeChild(clikedRow);


// }

// function complete(icon)
// {
//     var clikedRow=icon.closest('tr');
//     var completedtable=document.getElementById("tb2");
//     var cloneRow=clikedRow.cloneNode(true);
//     completedtable.appendChild(cloneRow);
//     clikedRow.parentNode.removeChild(clikedRow);


// }

function moveToTable1(event) {
    var target = event.target;

    // Check if the clicked element has the "fa-check" class
    if (target.classList.contains('fa-check')) {
        // Get the table row
        var row = target.closest('tr');

        // Clone the row to be moved
        var clonedRow = row.cloneNode(true);

        // Add the cloned row to Table tb1
        document.getElementById('tb1').getElementsByTagName('tbody')[0].appendChild(clonedRow);

        // Remove the original row from Table tb
        row.parentNode.removeChild(row);
    }
    else if(target.classList.contains('fa-xmark'))
    {
        var row1=target.closest('tr');
        row1.parentNode.removeChild(row1);
       
    }
}
    

function moveToTable2(event) {
    var target = event.target;

    // Check if the clicked element has the "fa-check" class
    if (target.classList.contains('fa-check')) {
        // Get the table row
        var row = target.closest('tr');

        // Clone the row to be moved
        var clonedRow = row.cloneNode(true);
        var status=document.createElement('td');
        status.innerText="Unpaid";
        console.log(status)
        // var icons=target.getElementsByClassName('fa-check')
        // console.log(icons)
        
        var lastCell = clonedRow.lastElementChild;
        clonedRow.replaceChild(status,lastCell);
        // Add the cloned row to Table tb1
        document.getElementById('tb2').getElementsByTagName('tbody')[0].appendChild(clonedRow);
        // var lastcolbody=document.getElementById('tb2').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
        // console.log(lastcolbody);
        // var lastcol=lastcolbody.getElementsByClassName('status')[0];
        // lastcolbody.removeChild(lastcol);
        // Remove the original row from Table tb
        row.parentNode.removeChild(row);
    }
    else if(target.classList.contains('fa-xmark'))
    {
        var row1=target.closest('tr');
        row1.parentNode.removeChild(row1);
       
    }
}
    