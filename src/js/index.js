import TestJS from './TestJs';
import ConsoleLogIt from './Console.logIt';
import getJSON from './getJSON';

TestJS();
getJSON('', (data) => {
  console.log(data);
});

getJSON('http://localhost:8000/api/v1/cities',
  (err, records) => {
    if (err !== null) {
      // eslint-disable-next-line no-undef
      alert(`Something went wrong: ${err}`);
    } else {
      // eslint-disable-next-line no-undef
      const table = document.querySelector('table');
      const data = Object.keys((records.data[0]));
      const dataRecords = records.data;
      // eslint-disable-next-line no-use-before-define
      generateTableHead(table, data);
      // eslint-disable-next-line no-use-before-define
      generateTable(table, dataRecords);
      /*
                  let data = Object.keys(records.data[0]);
                  generateTable(table, records.data); // generate the table first
                  generateTableHead(table, data); // then the head
                   */
    }
  });
ConsoleLogIt('this worked  in the bundle');

function generateTableHead(table, data) {
  const thead = table.createTHead();
  const row = thead.insertRow();
  // eslint-disable-next-line no-restricted-syntax
  for (const key of data) {
    // eslint-disable-next-line no-undef
    const th = document.createElement('th');
    // eslint-disable-next-line no-undef
    const text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  // eslint-disable-next-line no-restricted-syntax
  for (const element of data) {
    const row = table.insertRow();
    console.log(element);
    let key;
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (key in element) {
      const cell = row.insertCell();
      // eslint-disable-next-line no-undef
      const text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
