// registration function

// gönderilen username ve password önce databse.json'dan kontrol edilecek
// eğer username databse.json dosyadında önceden varsa
// ressponse olrak user zaten var dönülecek

// eğer yeni bri kayıt ise username ve password database.json'a kaydeilecek
// bu işlemler sırasında database.json dosyasındaki veriler ASLA KAYBOLMASIN
const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'nodejs_tutorial'
})

async function registration(req, res) {

    const username = req.body.username 
    const password = req.body.password 
    const email = req.body.email 
    const name = req.body.name 
    const surname = req.body.surname 
    const sex = req.body.sex 
    const age = req.body.age;

    if(!username || !email || !name || !surname || !password){
        return res.json({ok:false, desc: 'username, email, password, name and surname can not be null'})
    }

    // check or username is already exist
    // if email  exist return message (This email is already registrated try to login.)

    connection.connect(function (err) {
        if (err){throw err}
        console.log("Connected");
    })

    connection.query(`INSERT INTO Users (Username, Email, Password, Name, Surname, Sex, Age) 
        VALUES ('${username}', '${email}', '${password}', '${name}', '${surname}', '${sex}', ${age})`,
        function (err, rows, fields) {
            if(err){
                connection.end()
                return res.json({ok: false, desc: err})
            }
        
            return res.json({ok: true, desc: 'User has been saved'})
        })

    // return res.json({ ok: true, desc: 'User successfully registrated' })

}

module.exports = registration