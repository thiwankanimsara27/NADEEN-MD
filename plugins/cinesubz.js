const { cmd } = require('../command')
const { fetchJson } = require('../lib/functions')

const apilink = 'https://dark-yasiya-api-new.vercel.app/movie' // API LINK ( DO NOT CHANGE THIS!! )

cmd({
    pattern: "movie",
    desc: "download movie.",
    category: "download",
    react: "🍟",
    filename: __filename
},
async(conn, mek, m,{from, reply, q}) => {
try{

if(!q) return reply('Give me movie name or url !')
    
const search = await fetchJson(${apilink}/sea
