const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: "50541"

  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server" )
  });

  conn.on('connect', () => {
    conn.write("Name: LJ");
  });


  return conn;
};

module.exports = {
  connect
}