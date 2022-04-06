let dbUrl = ''
if (process.env.DB_URL) {
    dbUrl = process.env.DB_URL
}

module.exports = {
    url : dbUrl
}