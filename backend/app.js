var express = require('express')
var cors = require('cors')


const { Client } = require('@googlemaps/google-maps-services-js');


var app = express()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

var jwt = require('jsonwebtoken')
const secret = 'Fullstack-Login-0'


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const mysql = require('mysql2');
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});


const apiKey = 'AIzaSyAw0nLxD9NsQiJKwFKM38AODUypI8f5FdI';
const client = new Client({});


async function targetLang(stringText) {
  let sourceLang = 'en';
  let targetLang = 'th';
  let url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(`${stringText}`);
  let response = await fetch(url);
  let text = await response.text();

  let jsonText = JSON.parse(text)
  return jsonText[0][0][0];
}


async function getAddressFromLatLng(latlong) {
  try {
    const response = await client.reverseGeocode({
      params: {
        latlng: `${latlong}`,
        key: apiKey,
        language: 'th'
      }
    });

    const address = response.data.results[0]?.formatted_address;
    return address;
  } catch (error) {
    // console.error('Error:', error.message);
    return 'No address found';
  }
}





async function getStrringList(str) {
  const text = str;
  const separator = ' '; // ตัวแบ่ง

  const initialArray = text.split(separator);

  const combinedArray = [];
  var tempArray = '';
  await Promise.all(initialArray.map(async (word, index) => {
    // console.log(index);
    if (index <= 2) {
      tempArray += ' ' + word;
    }
    if (index > 2 && index <= 4) {
      tempArray += ' <br>  ' + word;
    }
    if (index > 4 && index <= 7) {
      tempArray += ' <br> ' + word;
    }
    if (index > 7 && index <= 8) {
      tempArray += ' <br> ' + word;
    }
    if (index > 8) {
      tempArray += ' <br> ' + word;
    }

  })).then();
  return tempArray;
}






app.post('/register', jsonParser, function (req, res, next) {
  connection.execute(
    'INSERT INTO webapp_users (email,password,fname,lname) VALUES (?,?,?,?)',
    [req.body.email, req.body.password, req.body.fname, req.body.lname],
    function (err, results, fields) {
      if (err) {
        res.json({ status: 'error', message: err })
        return
      }
      res.json({ status: 'ok' })
    }
  );
});


app.post('/login', jsonParser, function (req, res, next) {
  connection.execute(
    'SELECT * FROM webapp_users WHERE email=?',
    [req.body.email],
    function (err, users, fields) {
      if (err) {
        res.json({ status: 'error', message: err });
        return;
      }
      if (users.length == 0) {
        res.json({ status: 'error', message: 'no user found' });
        return;
      }
      var token = jwt.sign({ email: users[0].email }, secret, { expiresIn: '1h' });
      res.json({ status: 'ok', message: 'login success', token });
    }
  );
});

app.post('/authen', jsonParser, function (req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1]
    var decoded = jwt.verify(token, secret);
    res.json({ status: 'ok', decoded })
  } catch (err) {
    res.json({ status: 'error', message: err.message })
  }

})

app.get('/linebot_image', (req, res) => {
  const sql = "SELECT COUNT(*) AS imageCount FROM linebot_image WHERE link_image IS NOT NULL";
  connection.query(sql, (err, result) => {
    if (err) return res.json(err);
    const imageCount = result[0].imageCount;
    return res.json({ count: imageCount });
  });
});

app.get('/linebot_log', (req, res) => {
  const sql = "SELECT COUNT(*) AS imageCount FROM linebot_log WHERE Message IS NOT NULL";
  connection.query(sql, (err, result) => {
    if (err) return res.json(err);
    const imageCount = result[0].imageCount;
    return res.json({ count: imageCount });
  });
});

app.get('/wepapp_labelsuccess', (req, res) => {
  const sql = "SELECT COUNT(*) AS imageCount FROM wepapp_labelsuccess WHERE img_url IS NOT NULL";
  connection.query(sql, (err, result) => {
    if (err) return res.json(err);
    const imageCount = result[0].imageCount;
    return res.json({ count: imageCount });
  });
});

app.get('/webapp_users', (req, res) => {
  const sql = "SELECT COUNT(*) AS imageCount FROM webapp_users WHERE email IS NOT NULL";
  connection.query(sql, (err, result) => {
    if (err) return res.json(err);
    const imageCount = result[0].imageCount;
    return res.json({ count: imageCount });
  });
});

app.get('/linebot_log2', (req, res) => {
  const messageType = 'TextMessage';

  const sql = 'SELECT  DisplayName, Date, Time, Message FROM linebot_log WHERE MessageType = ?';
  connection.query(sql, messageType, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
})

app.get('/userlog', (req, res) => {
  const sql = "SELECT * FROM webapp_users";
  connection.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
})


app.put('/update/:id', (req, res) => {
  const sql = "UPDATE webapp_users SET email = ?, password = ?, fname = ?, lname = ? WHERE id = ?";
  const values = [
    req.body.email,
    req.body.password,
    req.body.fname,
    req.body.lname
  ]
  const id = req.params.id;

  connection.query(sql, [...values, id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})

app.post('/usercreate', function (req, res, next) {
  const id = req.params.id;
  connection.query(
    'INSERT INTO webapp_users (email,password,fname,lname) VALUES (?,?,?,?)',
    [req.body.email, req.body.password, req.body.fname, req.body.lname],
    function (err, results) {
      if (err) {
        res.json({ status: 'error', message: err })
        return
      }
      res.json({ status: 'ok' })
    }
  );
})


app.delete('/userdel/:id', function (req, res, next) {
  const sql = "DELETE FROM webapp_users WHERE id = ?"
  const id = req.params.id;

  connection.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
});




app.get('/tableimg', (req, res, next) => {
  const sql = "SELECT * FROM linebot_image";
  connection.query(sql, async (err, data) => {
    if (err) return res.json("Error");

    var publisher = Array();
    await Promise.all(data.map(async values => {

      const words = values.location_image.split(' ');
      values.latLong = {
        lat: words[0],
        lng: words[1]
      }



      // --------------------------------------- วิธีที่ 1
      // values.latLong = {
      //   lat: 13.7812438,
      //   lng: 100.4853644
      // }
      9
      // let textAdd = await getAddressFromLatLng(values.location_image);
      // await getStrringList(textAdd).then((text) => {
      //   values.image_address = text;

      //   publisher.push(values);
      // });

      // --------------------------------------- วิธีที่ 1


      // --------------------------------------- วิธีที่ 2
      var re = new RegExp("^([A-Z]|[a-z]|[0-9]|[/]|[\\]|[ ]|[\n]|[.]|[ๅภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ๑๒๓๔ู฿๕๖๗๘๙๐ฎฑธํ๊ณฯญฐฅฤฆฏโฌ็๋ษศซฉฮฺ์ฒฬฦ])+$", "g");
      if (re.test(values.image_address)) {



        await getStrringList(values.image_address).then((text) => {


          values.image_address = text;

          publisher.push(values);
        });

      } else {
        await targetLang(values.image_address).then(async (text) => {
          await getStrringList(text).then((text) => {
            values.image_address = text;

            publisher.push(values);
          });
        })
      }
      // --------------------------------------- วิธีที่ 2


    }))
    return res.json(publisher)

  })

})

app.listen(3333, jsonParser, function () {
  console.log('CORS-enabled web server listening on port 3333')
})
