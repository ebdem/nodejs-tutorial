// registration function

    // gönderilen username ve password önce databse.json'dan kontrol edilecek
    // eğer username databse.json dosyadında önceden varsa
    // ressponse olrak user zaten var dönülecek

    // eğer yeni bri kayıt ise username ve password database.json'a kaydeilecek
    // bu işlemler sırasında database.json dosyasındaki veriler ASLA KAYBOLMASIN

const fs = require('fs');
const path = require('path');

    function registration(req, res) {

        const {
            username,
            password, 
            name, 
            lname, 
            email, 
            hoby, 
            sex
        } = req.body;

        // const username = req.body.username;
        // const password = req.body.password;
        // const name = req.body.name;
        // const lname = req.body.lname;
        // const email = req.body.email;
        // const hoby = req.body.hoby;
        // const sex = req.body.sex;


        const dbPath = path.join(__dirname, 'database.json')

        const userTable = require('./database.json')

        // check if email exist
        userTable.map(element =>{
            if (element.email === email) {
                return res.json({ok: false, desc:'email already exist!'})
            }
        })


        userTable.push({
            username,
            password,
            email,
            name,
            lname,
            hoby,
            sex
        })

        // userTable.append({
        //     username: username,
        //     password: password,
        //     email: email,
        //     name: name,
        //     lname: lname,
        //     hoby: hoby,
        //     sex: sex
        // })


        const writeData = JSON.stringify(userTable);
        
        fs.writeFileSync(dbPath, writeData);

        return res.json({ok: true, desc:'User successfully registrated'})

    }

    module.exports = registration