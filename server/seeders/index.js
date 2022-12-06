const db = require('../config/connection');
const userSeed = require('./userSeed');

const { User} = require('../models');

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await User.create(userSeed);

        console.log('Seeding done');
        process.exit(0);
    } catch (err) {
        throw err;
    }
})