var axios = require('axios')

const getData = {}

getData.MLB = () => {
    // -------MLB---------
    return axios
        .get(
            'https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json',
        )
        .then(function(response) {
            return response
        })
        .catch(function(error) {
            if (error) throw error
            console.log('error')
        })
}

getData.NBA = () => {
    return axios
        .get(
            'https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json',
        )
        .then(function(response) {
            return response
        })
        .catch(function(error) {
            if (error) throw error
            console.log('error')
        })
}

module.exports = getData
