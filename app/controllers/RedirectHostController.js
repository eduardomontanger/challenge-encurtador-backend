const RedirectHostService = require('../services/RedirectHostService');
const GenerateRandomValue = require('../utils/GenerateRandomValue');

exports.list = async (req, res) => {
    await RedirectHostService.list().then(hosts => res.status(200).json(hosts));
}

exports.shortenUrl = async (req, res) => {
    const NUMBER_DAYS_EXPIRE_URL = process.env.NUMBER_DAYS_EXPIRE_URL || 10;
    const URL_HOST = process.env.URL_HOST || 'http://localhost:3000';

    const url = req.body.url;

    const codeUrl = await GenerateRandomValue.generateRandomString();
    const expiryDate = await addDaysToday(NUMBER_DAYS_EXPIRE_URL);

    let redirectHost = {
        originUrl: url,
        codeUrl: codeUrl,
        expiryDate: expiryDate
    }

    await RedirectHostService.create(redirectHost).then(host => {
        const completedHost = URL_HOST.concat('/').concat(host.codeUrl);
        return res.status(201).json({ newUrl: completedHost });
    });
}

exports.redirectUrl = async (req, res) => {
    const codeUrl = req.params.codeUrl;

    if (codeUrl == null) {
        return res.status(404).json('Sorry :( - URL not found.')
    }

    const redirectUrl = await RedirectHostService.getByCodeUrl(codeUrl);

    if (redirectUrl.expiryDate < new Date()) {
        return res.status(404).json('Sorry :( - URL expired.')
    }

    return res.redirect(redirectUrl.originUrl);
}

function addDaysToday(days) {
    let date = new Date();
    date.setDate(date.getDate() + days);
    return date;
}
