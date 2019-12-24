import axios from 'axios';

var instance = null;

export default (function() {
    if (!instance) {
        instance = axios.create({
            baseURL: 'http://dataservice.accuweather.com',
        });
        instance.interceptors.request.use((config) => {
            config.params = config.params || {};
            config.params['apikey'] = '50UoAXAqfE59hGZ9YxCsNy18MWX6KKHA';
            return config;
        });
        return instance;
    } else { return instance; }
})();
