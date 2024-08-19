// formHandler.js
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Your reCAPTCHA secret key
const RECAPTCHA_SECRET_KEY = '6LdLUykqAAAAAI49fsfocCpTn3pkdOCMePFS8YA6';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit-form', async (req, res) => {
    const token = req.body['g-recaptcha-response'];

    if (!token) {
        return res.status(400).json({ message: 'reCAPTCHA token is missing.' });
    }

    try {
        const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, {}, {
            params: {
                secret: RECAPTCHA_SECRET_KEY,
                response: token
            }
        });

        const data = response.data;

        if (data.success) {
            // reCAPTCHA validation succeeded, proceed with form processing
            res.status(200).json({ message: 'Form submitted successfully.' });
        } else {
            // reCAPTCHA validation failed
            res.status(400).json({ message: 'reCAPTCHA verification failed.' });
        }
    } catch (error) {
        console.error('Error during reCAPTCHA verification:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
