const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: "50542"

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