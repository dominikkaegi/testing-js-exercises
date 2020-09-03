async function getData(input) {
  return new Promise((resolve) => {
    const output = [...Array(Math.floor(Math.random() * 6) + 1)].map((_,idx) => 
    `${input}_${idx}`);

    setTimeout(() => {
      resolve(output);
    }, 1500);
  })
}

module.exports = {
  getData
}

getData('jim').then((data) => console.log(data))