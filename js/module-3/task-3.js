const findBestEmployee = function (employees) {
  const maxEmployee = Math.max(...Object.values(employees));
  const keys = Object.keys(employees);
  let report = '';
  for (const key of keys) {
    if (maxEmployee === employees[key]) { report = key }
  };
  return report;
}

//Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
}
console.log(findBestEmployee(sellers));
// 'lux'