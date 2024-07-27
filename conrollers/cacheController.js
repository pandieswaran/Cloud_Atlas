const Axios = require('axios');
const Cache = require('../models/Cache')


const createCache = async (req, res) => {
    try {
        const response = await Axios.get('https://jsonplaceholder.typicode.com/posts/1');
        const data = response.data;

        const cacheKey = 'externalData'; // You can use a more dynamic key based on the data

        let cache = await Cache.findOne({ key: cacheKey });

        if (cache) {
            return res.json({ message: 'Data fetched from cache', data: cache.value });
        }

        cache = new Cache({ key: cacheKey, value: data });
        await cache.save();

        res.status(200).json({ message: 'Data fetched from external API and cached', data });
    } catch (error) {
        console.error('Error fetching and caching data:', error);
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
};

//All the Cache File To view
const cacheView = async (req, res) => {
    try {
        const cacheEntries = await Cache.find({});
        res.json({ cache: cacheEntries });
    } catch (error) {
        console.error('Error fetching cache:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createCache,
    cacheView
};
