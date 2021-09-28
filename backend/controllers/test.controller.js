const db = require("../models");
const Test = db.tests;

exports.create = (req, res) => {
    if (!req.body.EinsteinID) {
        res.status(400).send({ message: "Content cannot be empty" })
        return;
    }

    const test = new Test({
        EinsteinID: req.body.EinsteinID,
        CovidTestCode: req.body.CovidTestCode,
        TestResult: req.body.TestResult
    });

    test
        .save(test)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating the test result."
            });
        });
}