const router = require("express").Router();
const User = require("../modules/User");

router.get("/login", checkAuth, goHome).use("/login", require("./login"));

router.get('/', checkAuth, require("./home"));
router.get('/', (req, res, next)=>{
    res.render("landing", {
        title: "Simple Blog"
    })
});

module.exports = router;

function goHome (req, res, next) {
    res.redirect('/');
}

function checkAuth (req, res, next) {
    let auth = req.cookies.session;

    if( auth ) {
        User.findOne({auth: auth.auth}, (err, user)=>{
            if ( user ) {
                next("route");
            } else {
                next("route");
            }
        });
    } else {
        next("route");
    }
}