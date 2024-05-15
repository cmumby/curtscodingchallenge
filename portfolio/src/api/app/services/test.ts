const test = (res: any, query, dbname) => {
  const testObj = {
    name: 'curtis',
    sex: 'male',
    age: 39,
  };
  res.json(testObj);
};

module.exports = test;
