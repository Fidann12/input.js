const nameInput = document.getElementById("name_input");
const countryInput = document.getElementById("country_input");
const salaryİnput = document.getElementById("salary_input");
const emailInput = document.getElementById("email_input");
const addButton = document.getElementById("add");
const data = document.getElementById("data");
const table = document.getElementsByClassName("table");
const tableBody = document.getElementById("table_body");
addButton.addEventListener("click", () => {
  demo();
  nameInput.value = "";
  countryInput.value = "";
  salaryİnput.value = "";
  emailInput.value = "";
});
const demo = () => {
  let tdelement = document.createElement("tr");
  tdelement.setAttribute("class", "formdata");
  let nameTd = document.createElement("td");
  let countryTd = document.createElement("td");
  let salaryTd = document.createElement("td");
  let emailTd = document.createElement("td");
  nameTd.textContent = nameInput.value;
  countryTd.textContent = countryInput.value;
  salaryTd.textContent = salaryİnput.value;
  emailTd.textContent = emailInput.value;
  tableBody.append(tdelement);
  tdelement.append(nameTd, countryTd, salaryTd, emailTd);
};
