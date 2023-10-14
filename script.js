let yValues = [];
let xValues = [];
let min = 0;
let max = 0;
const myChart = new Chart("myChart", {
    type: "line",
    data: {},
    options: {}
});

function build_graph(){
    // let t = document.getElementById("test");
    // t.innerHTML = xValues[0] + " " + xValues[1];
    new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
        //   backgroundColor:"white",
        borderColor: "white",
        data: yValues
        }]
    },
    
    });
}

function find_min_max(low, high){
    for (let i = low; i < high + 1; i++){
        xValues.push(i);
    }
}


function readCSVFile(){
    
    var files; 
    
    files = document.querySelector('#file').files;

    if(files.length > 0 ){

         // Selected file
         var file = files[0];
         
         // FileReader Object
         var reader = new FileReader();

         // Read file as string 
         reader.readAsText(file);
        //  document.getElementById('test').innerHTML += files[0];
         // Load event
         reader.onload = function(event) {

              // Read file data
              var csvdata = event.target.result;

              // Split by line break to gets rows Array
              var rowData = csvdata.split('\n');

              // <table > <tbody>
              var tbodyEl = document.getElementById('tblcsvdata').getElementsByTagName('tbody')[0];
              tbodyEl.innerHTML = "";

              // Loop on the row Array (change row=0 if you also want to read 1st row)
              for (var row = 1; row < rowData.length; row++) {

                    // Insert a row at the end of table
                    var newRow = tbodyEl.insertRow();

                    // Split by comma (,) to get column Array
                    var rowColData = rowData[row].split(',');

                    // Loop on the row column Array
                    for (var col = 0; col < rowColData.length; col++) {

                        // Insert a cell at the end of the row
                        var newCell = newRow.insertCell();
                        newCell.innerHTML = rowColData[col];
                        if (col == 5){
                            yValues.push(rowColData[col]);
                        }
                    }

              }
         };

    }else{
         alert("Please select a file.");
    }
}





function month(num) {

    xValues = [];
    switch (num){
        case 1:
            find_min_max(229,250);
            break;
        case 3:
            find_min_max(187,250);
            break;
        case 6:
            find_min_max(124, 250);
            break;
        default:
            find_min_max(0, 250);
            break;
    }


    build_graph();
}

