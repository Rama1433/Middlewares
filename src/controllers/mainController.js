module.exports = {
    index : (req, res) => {
        return res.render('index')
    },
    contact :(req, res) => {
        return res.render('contact')
    },
    services : (req, res) => {
        return res.render('services')
    },
    about : (req, res) => {
        return res.render('about')
    },
    admin : (req, res) => {
        return res.render('admin',{
            user: req.query.user
        })
    },
    login : (req, res) => {
        return res.render('login',{
            msg : req.query.error ? 'No tienes los privilegios para ingresar' : null
        })
    }
}