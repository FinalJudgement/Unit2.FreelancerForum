const body = document.querySelector("body");
const createH1 = document.createElement("h1");
const createP = document.createElement("p");
const createH2 = document.createElement("h2");
const createTable = document.createElement("table");
const createTableRow1 = document.createElement("tr");

const randomNames = [
  "Ezra",
  "Azrael",
  "Averi",
  "Luciano",
  "Diana",
  "Legend",
  "Rory",
  "Charlie",
  "Harmoni",
  "Rory",
  "Harmoni",
];
const randomStartPrice = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const randomOccupation = [
  "Architect",
  "Construction",
  "Doctor",
  "Electrician",
  "Accounts",
  "Auditors",
  "Engineer",
];
const freelancers = [
  {
    name: "Alice",
    occupation: "Writer",
    startPrice: 30,
  },
  {
    name: "Bob",
    occupation: "Teacher",
    startPrice: 50,
  },
  {
    name: "Carol",
    occupation: "Programmer",
    startPrice: 70,
  },
];

const generateRandomFreelancer = () => {
  const randomFreelancer = {};
  randomFreelancer.name =
    randomNames[Math.floor(Math.random() * randomNames.length)];
  randomFreelancer.occupation =
    randomOccupation[Math.floor(Math.random() * randomOccupation.length)];
  randomFreelancer.startPrice =
    randomStartPrice[Math.floor(Math.random() * randomStartPrice.length)];
  freelancers.push(randomFreelancer);
};

const h1Generator = () => {
  createH1.textContent = `Freelancer Forum`;
  createH1.setAttribute("style", "text-align: center; font-size: 2.6rem;");
  body.appendChild(createH1);
};

const pGenerator = () => {
  createP.textContent = `The average starting price is $${generatePayAverage()}.`;
  createP.setAttribute("style", "text-align: center; font-size: 1.6rem;");
  body.appendChild(createP);
};

const h2Generator = () => {
  createH2.setAttribute(
    "style",
    "text-align: center; font-size: 2rem; margin-bottom: 10px;"
  );
  createH2.textContent = `Available Freelancers`;
  body.appendChild(createH2);
};

const tableGenerator = () => {
  createTable.setAttribute("style", "width: 100%; padding: 0 40px");
  ["Name", "Occupation", "Starting Price"].forEach((item) => {
    const newTh = document.createElement("th");
    newTh.textContent = item;
    newTh.setAttribute("style", "font-size: 1.5rem; text-align: center;");
    createTableRow1.appendChild(newTh);
  });
  createTable.appendChild(createTableRow1);

  for (let i = 0; i < freelancers.length; i++) {
    const newTr = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdOccupation = document.createElement("td");
    const tdPrice = document.createElement("td");
    tdName.textContent = freelancers[i].name;
    tdOccupation.textContent = freelancers[i].occupation;
    tdPrice.textContent = freelancers[i].startPrice;

    //style table data
    tdName.setAttribute("style", "font-size: 1.4rem; padding-left: 20px;");
    tdOccupation.setAttribute(
      "style",
      "font-size: 1.4rem; padding-left: 40px;"
    );
    tdPrice.setAttribute("style", "font-size: 1.4rem; padding-left: 75px;");

    // append <td> to <tr>
    newTr.appendChild(tdName);
    newTr.appendChild(tdOccupation);
    newTr.appendChild(tdPrice);

    //append <tr> to <table>
    createTable.appendChild(newTr);
  }
  body.appendChild(createTable);
};

const generatePage = () => {
  body.setAttribute(
    "style",
    "font-family: sans-serif; border: 1px solid black; width: 30%; min-width: 530px; margin: 0 auto;"
  );
  generateRandomFreelancer();
  h1Generator();
  pGenerator();
  h2Generator();
  tableGenerator();
};

const generatePayAverage = () => {
  let payArray = [];
  freelancers.forEach((object) => {
    payArray.push(object.startPrice);
  });
  return payArray.reduce((a, b) => a + b) / payArray.length;
};

generatePage();
