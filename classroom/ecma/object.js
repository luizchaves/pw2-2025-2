// Investment
// name: Tesouro Selic 2028
// value: 174,76
// origin: Tesouro Nacional
// category: Pós
// date: 03/10/2025
// interest: 100% Selic

// JSON - JavaScript Object Notation
const selic2031 = {
  name: "Tesouro Selic 2031",
  value: 17476,
  origin: "Tesouro Nacional",
  category: "Pós",
  date: "03/10/2025",
  interest: "100% Selic",
}

// Class Definition
class Investment {
  constructor(name, value, origin, category, date, interest) {
    this.name = name
    this.value = value
    this.origin = origin
    this.category = category
    this.date = date
    this.interest = interest
  }
}

// Creating an instance of the class
const selic2028 = new Investment(
  "Tesouro Selic 2028",
  17476,
  "Tesouro Nacional",
  "Pós",
  "03/10/2025",
  "100% Selic"
);

// console.table
console.log(selic2028);
console.log(selic2031);
console.table(selic2031);
console.table([selic2028, selic2031]);

// Accessing properties
console.log(selic2028.name);
console.log(selic2031.name);

selic2031.value = 18000;
console.log(selic2031);

// private property (#)
class PrivateInvestment {
  #name
  #value
  #origin
  #category
  #date
  #interest

  constructor(name, value, origin, category, date, interest) {
    this.#name = name
    this.#value = value
    this.#origin = origin
    this.#category = category
    this.#date = date
    this.#interest = interest
  }

  getName() {
    return this.#name
  }

  getValue() {
    return this.#value
  }

  getOrigin() {
    return this.#origin
  }

  getCategory() {
    return this.#category
  }

  getDate() {
    return this.#date
  }

  getInterest() {
    return this.#interest
  }
}

const cdb = new PrivateInvestment(
  "CDB XPTO",
  10000,
  "Banco XPTO",
  "Pós",
  "01/01/2026",
  "120% CDI"
);

console.log(cdb);
// console.log(cdb.#name); // undefined
console.log(cdb.name); // undefined
console.log(cdb.getName()); // CDB XPTO

// Property Shorthand
const name = "Tesouro Selic 2031";
const value = 17476;
const origin = "Tesouro Nacional";
const category = "Pós";
const date = "03/10/2025";
const interest = "100% Selic";

const selic2031_v2 = {
  name: name,
  value: value,
  origin: origin,
  category: category,
  date: date,
  interest: interest,
};

const selic2031_v3 = { name: "Tesouro Selic 2031", value, origin, category, date, interest };

// Spread properties
const selic2031_v4 = { ...selic2031_v3, broker: "Banco X" };
const selic2031_v5 = { ...selic2031_v3, name: "CDB XYZ" };

// Copy reference
const newSelic = selic2031_v4;
newSelic.value = 19000;
console.log(selic2031_v4.value); // 19000

// Clone
const clonedSelic = { ...selic2031_v4 };
clonedSelic.value = 20000;
console.log(selic2031_v4.value); // 19000
console.log(clonedSelic.value); // 20000

// Destructuring
const { broker, name: newName } = selic2031_v4;
console.log(broker); // Banco X

// Dynamic Property {[key]: value}
const key = "interest";
const dynamicProperty = {
  key: "100% Selic + IPCA",
  [key]: "100% Selic + IPCA",
};
console.log(dynamicProperty.interest); // 100% Selic + IPCA

// JSON.stringify
console.log(selic2028);
console.log(JSON.stringify(selic2028)); // '{"name":"Tesouro Selic 2028","value":17476,"origin":"Tesouro Nacional","category":"Pós","date":"03/10/2025","interest":"100% Selic"}'
console.log(typeof JSON.stringify(selic2028)); // string
console.log(JSON.stringify(selic2028, null, 2)); // pretty print
// JSON.parse
const invest = '{"name":"Tesouro Selic 2028","value":17476,"origin":"Tesouro Nacional","category":"Pós","date":"03/10/2025","interest":"100% Selic"}';
console.log(invest.name); // undefined
const investObj = JSON.parse(invest);
console.log(investObj);
console.log(investObj.name); // Tesouro Selic 2028
// Object.keys
console.log(Object.keys(investObj)); // ['name', 'value', 'origin', 'category', 'date', 'interest']
// Object.values
console.log(Object.values(investObj)); // ['Tesouro Selic 2028', 17476, 'Tesouro Nacional', 'Pós', '03/10/2025', '100% Selic']

