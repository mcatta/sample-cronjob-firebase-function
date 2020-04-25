const functions = require('firebase-functions')

const ONE_DAY_IN_MILLISECONDS = 86400000//ms

// Calculate Bitcoin Halving
exports.calculateHalving = functions.pubsub.schedule('10 0 * * *').timeZone('Europe/Berlin').onRun((context) => {
    const halvingDate = new Date('18 May 2020')
    const today = new Date()

    let delta = halvingDate.getTime() - today.getTime()

    let message = parseInt(delta / ONE_DAY_IN_MILLISECONDS) +  " days left for Bitcoin Halving 2020"
    console.log(message)
})