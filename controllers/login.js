function login(req, res) {

    const username = req.body.username;
    const password = req.body.password;

    // burda bir check condition;
    if (username === 'ramo' && password === '1234') {
        return res.json({ desc: "login başarılı" })
    }

    return res.json({ desc: "login başarısız" })

}

module.exports = login;