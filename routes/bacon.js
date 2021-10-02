let express = require('express');
let router = express.Router();
const { bacon } = require('../src');

/* POST Encode. */
router.post('/encode', async function(req, res, next) {
    const { data } = req.body
    if(!data)
        return res.status(422).json({
            message: "Please fill all the field."
        });

    const encoded = bacon.encode(data);
    return res.status(200).json({
        message: encoded
    });
});

/* POST Decode. */
router.post('/decode', async function(req, res, next) {
    const { data } = req.body
    if(!data)
        return res.status(422).json({
            message: "Please fill all the field."
        });

    const decoded = bacon.decode(data);
    return res.status(200).json({
        message: decoded
    });
});

module.exports = router;
