var axios = require('axios')

function getData(league) {
    let url
    switch (league) {
        case 'NBA':
            url = process.env.NBA
            break
        case 'MLB':
            url = process.env.MLB
            break
    }
    return axios
        .get(url)
        .then(function(response) {
            return response
        })
        .catch(function(error) {
            if (error) throw error
            console.log('error')
        })
}

module.exports = getData
