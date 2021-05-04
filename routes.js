const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();

// Index route
router.get("/", async (req, res) => {
    res.send("Hello world")
});

router.post("/tomorrow-io", async (req, res) => {
    const baseUrl = 'https://api.tomorrow.io/v4/timelines';
    const apiKey = process.env.TOMORROWIO_API_KEY;
    
    const {
        interval,
        campground
    } = req.body;

    const params = {
        units: "imperial",
        timesteps: interval,
        location: campground.replace(' ', ''),
        fields: ["temperature","precipitationProbability"]
    }

    try {

        console.log(params)

        return res.status(200).json({
            response: params
        })
    } catch (e) {
        console.log(e)
    }
});

module.exports = router;