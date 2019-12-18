import axios from 'axios';

var instance = null;

export default (function() {
    if (!instance) {
        instance = axios.create({
            baseURL: 'http://dataservice.accuweather.com',
        });
        instance.interceptors.request.use((config) => {
            config.params = config.params || {};
            config.params['apikey'] = 'RFISA6JljWFWxEdkKP1HtiOXAHlCpyEi';
            return config;
        });
        return instance;
    } else { return instance; }
})();
