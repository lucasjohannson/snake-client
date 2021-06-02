const {connect} = require("./client");

const net = require("net");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    }
  };

  stdin.on("data", handleUserInput);

  return stdin;
};

// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "localhost",
//     port: "50541"

//   });


//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   conn.on("connect", () => {
//     console.log("Connected !")
//   });

//   conn.on("data", (data) => {
//     console.log(data);
//   });

//   return conn;
// };

console.log("Connecting ...");
setupInput()
connect();

