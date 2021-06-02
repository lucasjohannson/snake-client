const net = require("net");
const { IP, PORT } = require("./constants");

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT

  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server" )
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    conn.write("Name: LJ");
    //conn.write("Move: up");
  });


  return conn;
};

module.exports = {
  connect
}