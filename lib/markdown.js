const fs = require('fs');
const hbs = require('hbs');
const marked = require('marked');

module.exports = function (options) {

    const markdown = function (file) {
        const mdFile = '.' + options.path + '/' + file + options.ext;
        const contents = fs.readFileSync(mdFile, 'utf8');
      
        return new hbs.SafeString(marked(contents));
    };

    return markdown;
};
