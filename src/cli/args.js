export const parseArgs = () => {
  // Write your code here \
  //init code
  const doubleDashCollection = [];
  const args = process.argv.slice(2);
  for (let i in args) {
    if (args[i].slice(0, 2) === "--" && args[+i + 1].slice(0, 2) !== "--") {
      doubleDashCollection.push(`${[args[i].slice(2)]} is ${args[+i + 1]}`);
    }
  }
  console.log(doubleDashCollection.join(", "));
};
