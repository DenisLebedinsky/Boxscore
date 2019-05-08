const axios = require('axios')

function getData(league) {
    const url = process.env[league]
    return axios
        .get(url)
        .then(function(response) {
            return response
        })
        .catch(function(err) {
            console.error(err)
        })
}

module.exports = getData
