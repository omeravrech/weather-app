import axios from 'axios';

var instance = null;

export default (function() {
    if (!instance) {
        instance = axios.create({
            baseURL: 'http://dataservice.accuweather.com'
        });
        instance.interceptors.request.use((config) => {
            config.params = config.params || {};
            config.params['apikey'] = 'PQsaqmFli5j5OVrhz7GAWGtAvgVq9P9r';
            return config;
        });
        return instance;
    } else { return instance; }
})();
