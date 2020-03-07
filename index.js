const request = require('request-promise')
const cheerio = require('cheerio')

const URL = 'https://www.quisty.com.br/combo-pesca-esportiva-traira-forca-bruta-camuflada-uv-protection'

async function acesso(){
    const response = await request(URL)
    let $ = cheerio.load(response)
    console.log($('small.sku').text())
}
acesso()