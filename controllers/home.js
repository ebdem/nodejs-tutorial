
function home(req, res) {
    return res.json({ ok: true, desc: 'Welcome to Turorial.' })
}

module.exports = home;