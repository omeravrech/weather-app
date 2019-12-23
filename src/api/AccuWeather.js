import axios from 'axios';

var instance = null;

export default (function() {
    if (!instance) {
        instance = axios.create({
            baseURL: 'http://dataservice.accuweather.com',
        });
        instance.interceptors.request.use((config) => {
            config.params = config.params || {};
            config.params['apikey'] = 'OKicuF2eorIJg6DpSoGVAQkHch6bCMby';
            return config;
        });
        return instance;
    } else { return instance; }
})();
