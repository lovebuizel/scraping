const request = require('request-promise')
const fs = require('fs')
// const cheerio = require('cheerio')

async function getHtml(url) {
    const html = await request.get(url)
    return html
}

function saveHtmlToFile(html) {
    fs.writeFileSync('./test.html', html)
}

async function main() {
    const html = await getHtml('https://www.gamer.com.tw/')
    saveHtmlToFile(html)
}

main()