
exports.generateRandomString = () => {

    let randomValue = '';
    const allowedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const limitRange = getRandomLimitRange();

    for (let i = 0; i < limitRange; i++) {
        let random = Math.floor(Math.random() * allowedCharacters.length);
        randomValue += allowedCharacters.substring(random, random + 1);
    }

    return randomValue;
}

function getRandomLimitRange() {
    const minimum = parseInt(process.env.MINIMUM_CHARACTERS_RANDOM_URL) || 5;
    const maximum = parseInt(process.env.MAXIMUM_CHARACTERS_RANDOM_URL) || 10;
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}