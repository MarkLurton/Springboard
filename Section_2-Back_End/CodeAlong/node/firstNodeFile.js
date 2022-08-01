const fs = require("fs");
// const annoyingGreet = () => {
//   for (let i = 0; i < 10; i++) {
//     console.log("HELLO FROM NODE!");
//   }
// };

// annoyingGreet();

// fs.readFile("test.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("ERROR: ", err);
//     process.kill(1);
//   }
//   console.log("DATA... ", data);
// });

const line = "And Eternity in an hour";

// fs.writeFile("test.txt", line, { encoding: "utf8", flag: "a" }, (err) => {
//   if (err) {
//     console.log("Error: ", err);
//     process.kill(1);
//   }
//   console.log("Successfully wrote to test.txt!");
// });

fs.appendFile("test.txt", "\nAPPEND ME!!!", "utf8", (err) => {
  if (err) {
    console.log("ERROR!!!", err);
    process.kill(1);
  }
  console.log("Appended!!");
});
