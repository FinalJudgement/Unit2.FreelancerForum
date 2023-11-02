const body = document.querySelector("body");
const createH1 = document.createElement("h1");
const createP = document.createElement("p");
const createH2 = document.createElement("h2");
const createTable = document.createElement("table");
const createTableRow1 = document.createElement("tr");
const createTableRow2 = document.createElement("tr");
const createTableRow3 = document.createElement("tr");
const createTableRow4 = document.createElement("tr");
const tableRowArray = [createTableRow2, createTableRow3, createTableRow4];

const tHeadData = ["Name", "Occupation", "Starting Price"];
const freelancers = [
  {
    name: "Alice",
    occupation: "Writer",
    startPrice: "$30",
  },
  {
    name: "Bob",
    occupation: "Teacher",
    startPrice: "$50",
  },
  {
    name: "Carol",
    occupation: "Programmer",
    startPrice: "$70",
  },
];

// give the elements content

createH1.textContent = `Freelancer Forum`;
createP.textContent = `The average starting price is $30.`;
createH2.textContent = `Available Freelancers`;

//Style Elements
body.setAttribute(
  "style",
  "font-family: sans-serif; border: 1px solid black; width: 30%; min-width: 530px; margin: 0 auto;"
);
createH1.setAttribute("style", "text-align: center; font-size: 2.6rem;");
createP.setAttribute("style", "text-align: center; font-size: 1.6rem;");
createH2.setAttribute(
  "style",
  "text-align: center; font-size: 2rem; margin-bottom: 10px;"
);
createTable.setAttribute("style", "width: 100%; padding: 0 40px");

// Append Data
body.appendChild(createH1);
body.appendChild(createP);
body.appendChild(createH2);

// create, style, and append table head data
for (let i = 0; i < tHeadData.length; i++) {
  const createTh = document.createElement("th");
  createTh.textContent = tHeadData[i];
  createTh.setAttribute("style", "font-size: 1.5rem; text-align: center;");
  createTableRow1.appendChild(createTh);
}
createTable.appendChild(createTableRow1);

// create, style, and append table data
for (let i = 0; i < freelancers.length; i++) {
  const tdName = document.createElement("td");
  const tdOccupation = document.createElement("td");
  const tdPrice = document.createElement("td");
  tdName.textContent = freelancers[i].name;
  tdOccupation.textContent = freelancers[i].occupation;
  tdPrice.textContent = freelancers[i].startPrice;

  //style table data
  tdName.setAttribute("style", "font-size: 1.4rem; padding-left: 20px;");
  tdOccupation.setAttribute("style", "font-size: 1.4rem; padding-left: 40px;");
  tdPrice.setAttribute("style", "font-size: 1.4rem; padding-left: 75px;");

  // append <td> to <tr>
  tableRowArray[i].appendChild(tdName);
  tableRowArray[i].appendChild(tdOccupation);
  tableRowArray[i].appendChild(tdPrice);

  //append <tr> to <table>
  createTable.appendChild(tableRowArray[i]);
}

//style all td
//append <table> to <body>
body.appendChild(createTable);
