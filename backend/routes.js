// INIT
const express = require("express");
const router = express.Router();
const oracledb = require("oracledb");
//FUNCTION
async function connectDB() {
  try {
    const connection = await oracledb.getConnection({
      user: "Vietjet",
      password: "123",
      connectString: "localhost/orclpdb",
    });
    return connection;
  } catch (error) {
    console.error("Error querying database:", error);
    res.status(500).send("Error querying database");
  }
}
function releaseDB(connection) {
  connection.release(function (err) {
    if (err) {
      console.error(err.message);
    }
    else{
      console.log("I'm gay");
    }
  });
}
//MIDDLEWRARE
router.use( (request, response, next) => {
  console.log("REQUEST:" + request.method + "   " + request.url);
  console.log("BODY:" + JSON.stringify(request.body));
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  response.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  response.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
//ROUTES
router.route("/showLichBay").get(async (req, res) => {
  const connection = await connectDB();
  await connection.execute(
    "SELECT * FROM LICHBAY ORDER BY NGAYBAY",
    {},
    { outFormat: oracledb.OBJECT },
     (err, result) =>{
      if (err) {
        res.send("Error: " + err.message);
      } else {
        let lists = [];
        result.rows.forEach(row=> {
          lists.push({
            MALICHBAY: row.MALICHBAY,
            MACB: row.MACB,
            NGAYBAY: row.NGAYBAY,
            TONGSOGHE: row.TONGSOGHE,
            TRANGTHAI: row.TRANGTHAI,
            DONGIA: row.DONGIA,
            MAMB: row.MAMB,
          });
        }, this);
        res.send(lists);
      }
      releaseDB(connection);
    }
  );
});
router.route("/addLichBay").post(async (req, res) => {
  const connection = await connectDB();
  var body = req.body;
  console.log(body);
  await connection.execute(
    "EXECUTE THEM_LICHBAY(:NGAYBAY,:MACB, 1, :SOLUONGGHE, :DONGIA, :SOHIEUMAYBAY)",
    [
      body.NGAYBAY,
      body.MACB,
      body.SOLUONGGHE,
      body.DONGIA,
      body.SOHIEUMAYBAY,
    ],
    async (err, result) => {
      if (err) {
        console.log(err);
        releaseDB(connection);
      } else {        
        await connection.commit();
        console.log("Procedure executed");
        releaseDB(connection);
      }
    }
  );
});
//TEST
// router.route("/addLichBay").post(async (req, res) => {
//   const connection = await connectDB();
//   var body = req.body;
//   console.log(body);
//   await connection.execute(
//     "INSERT INTO COMPUTERS (COMPUTERID, BRAND, MODEL, PROCESSOR, RAM, STORAGE, GRAPHICSCARD) VALUES (:id,:brand, :model, :cpu, :ram, :storage, :gpu)",
//     [
//       body.INPUTID,
//       body.BRAND,
//       body.MODEL,
//       body.PROCESSOR,
//       body.RAM,
//       body.STORAGE,
//       body.GRAPHICSCARD,
//     ],
//     async (err, result) => {
//       if (err) {
//         console.log(err);
//         releaseDB(connection);
//       } else {        
//         await connection.commit();
//         console.log("1 record inserted");
//         releaseDB(connection);
//       }
//     }
//   );
// });
module.exports = router;
