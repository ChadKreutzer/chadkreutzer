const header = function (path = '') {
    return {
    home: `${path}#home`,
    about: `${path}#about`,
    portfolio: `${path}#portfolio`,
    contact: `${path}#contact`
    };
};

module.exports = header;