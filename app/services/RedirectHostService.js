
const { RedirectHost } = require('../models');

exports.list = async () => {
    return await RedirectHost.findAll();
}

exports.create = async (body) => {
    return await RedirectHost.create(body);
}

exports.getByCodeUrl = async (codeUrl) => {
    return await RedirectHost.findOne({
        attributes: [
            'id',
            'originUrl',
            'codeUrl',
            'expiryDate',
            'updatedAt',
            'createdAt'],
        where: { codeUrl }
    });
}
