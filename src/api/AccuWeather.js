import axios from 'axios';

var instance = null;

export default (function() {
    if (!instance) {
        instance = axios.create({
            baseURL: 'http://dataservice.accuweather.com',
        });
        instance.interceptors.request.use((config) => {
            config.params = config.params || {};
            config.params['apikey'] = 'zDYBWxPNyZGwQNbaTrTWG2Pbq4OpCFvE';
            return config;
        });
        return instance;
    } else { return instance; }
})();
