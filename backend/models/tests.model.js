module.exports = mongoose => {
    const Test = mongoose.model(
        "test",
        mongoose.Schema({
            EinsteinID: {
                type: String,
                required: true
            },
            JeffersonID: {
                type: String,
                default: ''
            },
            CovidTestCode: {
                type: String,
                default: ''
            },
            TestResult: {
                type: String,
                default: ''
            },
        },  {
            timestamps: true
        })

    )

    return Test
}