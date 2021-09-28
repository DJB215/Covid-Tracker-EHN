module.exports = app => {
    const tests = require("../controllers/test.controller.js");
    var router = require("express").Router();

    router.post('/', tests.create);

    app.use('/api/tests', router);
}