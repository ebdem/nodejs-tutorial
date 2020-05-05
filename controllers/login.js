function login(req, res) {

    const username = req.body.username;
    const password = req.body.password;

    const userTable = require('./database.json')

    for (let i = 0; i < userTable.length; i++) {

        // check user exist
        if (username === userTable[i].username) {
            // check password
            if (password === userTable[i].password) {
                return res.json({ desc: 'login başarılı' })
            } else {
                return res.json({ desc: 'hilekar terket burayı.' })
            }
        }
    }
    return res.json({ desc: 'user bulunamadı. kimsin sen??' })

}

module.exports = login;