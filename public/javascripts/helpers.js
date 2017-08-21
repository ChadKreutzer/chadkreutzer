const fs = require('fs');
const hbs = require('hbs')
const marked = require('marked');

const md = function (options) {

    const markdown = function (file) {
        const mdFile = '.' + options.path + '/' + file + options.ext;
        console.log(mdFile);
        const contents = fs.readFileSync(mdFile, 'utf8');
      
        return new hbs.SafeString(marked(contents));
    }

    return markdown;
}

module.exports = md;