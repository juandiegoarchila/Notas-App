const userCtrol = {};

userCtrol.rendersigUnForm = (req, res ) =>{
    res.render('users/signup');
};


userCtrol.signup = (req, res) =>{
    res.send('signup');
};


userCtrol.rendersigninForm = (req, res) => {
    res.render('users/signin');
}

userCtrol.signid = (req, res) => {
    res.send('signin');
}


userCtrol.logout = (req, res) =>{
    res.send('logout')
}


module.exports = userCtrol;