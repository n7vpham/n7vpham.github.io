let persons = [];
let salaries = [];

function addSalary() {
    let person = document.getElementById("person").value.trim();
    let salary = document.getElementById("salary").value.trim();

    if (person === "" || isNaN(salary) || salary === "" || parseInt(salary) < 0) {
        alert("Please enter a valid name and a non-negative numeric salary.");
        return;
    }

    salary = parseInt(salary);

    persons.push(person);
    salaries.push(salary);

    document.getElementById("person").value = "";
    document.getElementById("salary").value = "";

    updateDropdown();

    // Check if results are displayed and update
    if (document.getElementById("results").innerHTML) {
        displayResults();
    }
    if (document.getElementById("results_table").style.display === "table") {
        displaySalary();
    }
}


function modifySalary() {
    let selectedIndex = document.getElementById("selectPerson").selectedIndex;
    let newSalary = document.getElementById("newSalary").value.trim();

    if (selectedIndex === -1 || isNaN(newSalary) || newSalary === "" || parseInt(newSalary) < 0) {
        alert("Please select a person and enter a non-negative numeric salary.");
        return;
    }

    newSalary = parseInt(newSalary);

    salaries[selectedIndex] = newSalary;

    document.getElementById("newSalary").value = "";

    // Check if results are displayed and update
    if (document.getElementById("results").innerHTML) {
        displayResults();
    }
    if (document.getElementById("results_table").style.display === "table") {
        displaySalary();
    }
}

function displayResults() {
    let totalSalary = 0;
    let highestSalary = 0;

    for (let i = 0; i < salaries.length; i++) {
        totalSalary += salaries[i];
        if (salaries[i] > highestSalary) {
            highestSalary = salaries[i];
        }
    }

    let averageSalary = totalSalary / salaries.length;

    document.getElementById("results").innerHTML = `
        <h2>Results</h2>
        <p>Average Salary: ${averageSalary.toFixed(2)}</p>
        <p>Highest Salary: ${highestSalary}</p>
    `;
}

function displaySalary() {
    let tableBody = document.getElementById("results_table").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    for (let i = 0; i < persons.length; i++) {
        let row = tableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        cell1.innerHTML = persons[i];
        cell2.innerHTML = salaries[i];
    }

    document.getElementById("results_table").style.display = "table";
}

function updateDropdown() {
    let selectPerson = document.getElementById("selectPerson");
    selectPerson.innerHTML = "";

    for (let i = 0; i < persons.length; i++) {
        let option = document.createElement("option");
        option.text = persons[i];
        selectPerson.add(option);
    }
}
