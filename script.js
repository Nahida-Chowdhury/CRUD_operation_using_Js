var selectedRow = null

function onFormSubmit(e) {
    event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
        }
        else{
            updateRecord(formData);
        }
        resetForm();    
}

function readFormData() {
    var formData = {};
    formData["studentId"] = document.getElementById("studentId").value;
    formData["studentName"] = document.getElementById("studentName").value;
    formData["department"] = document.getElementById("department").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.studentId;
    cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.studentName;
    cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.department;
    cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("studentId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("studentName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("department").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.studentId;
    selectedRow.cells[1].innerHTML = formData.studentName;
    selectedRow.cells[2].innerHTML = formData.department;
}

function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

function resetForm() {
    document.getElementById("studentId").value = '';
    document.getElementById("studentName").value = '';
    document.getElementById("department").value = '';
    selectedRow = null;
}
