const dlt = (button) => {
    var row = button.closest("tr")
    row.remove()
    alert("Record Deleted!")
}
const edit = (button) => {
    var row = button.closest("tr");
    var cells = row.querySelectorAll("td");
    var firstName = cells[0].innerText;
    var lastName = cells[1].innerText;
    var rollNo = cells[2].innerText;

    document.getElementById("fn").value = firstName;
    document.getElementById("ln").value = lastName;
    document.getElementById("rn").value = rollNo;
    row.remove()
}
document.addEventListener("DOMContentLoaded", function() {
    const addRowBtn = document.getElementById("addRowBtn");

    addRowBtn.addEventListener("click", function() {
        const firstName = document.getElementById("fn").value;
        const lastName = document.getElementById("ln").value;
        const rollNo = document.getElementById("rn").value;

        // Create a new row
        const newRow = document.createElement("tr");

        // Create cells for the row
        const firstNameCell = document.createElement("td");
        const lastNameCell = document.createElement("td");
        const rollNoCell = document.createElement("td");
        const actionsCell = document.createElement("td");

        // Set cell values
        firstNameCell.textContent = firstName;
        lastNameCell.textContent = lastName;
        rollNoCell.textContent = rollNo;

        // Create Edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("btn", "btn-success", "edit-btn","edit-btn-css");
        editButton.setAttribute("onclick", "edit(this)");

        // Create Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("btn", "btn-danger", "dlt-btn", "delete-btn-css");
        deleteButton.setAttribute("onclick", "dlt(this)");

        // Append buttons to actions cell
        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);

        // Append cells to the new row
        newRow.appendChild(firstNameCell);
        newRow.appendChild(lastNameCell);
        newRow.appendChild(rollNoCell);
        newRow.appendChild(actionsCell);

        // Append the new row to the table body
        const tableBody = document.getElementById("tableBody");
        tableBody.appendChild(newRow);

        // Clear input fields
        document.getElementById("fn").value = "";
        document.getElementById("ln").value = "";
        document.getElementById("rn").value = "";
    });
});


