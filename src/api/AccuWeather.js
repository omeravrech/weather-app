import axios from 'axios';

var instance = null;

export default (function() {
    if (!instance) {
        instance = axios.create({
            baseURL: 'http://dataservice.accuweather.com',
        });
        instance.interceptors.request.use((config) => {
            config.params = config.params || {};
            config.params['apikey'] = '8XU3ZG2435qNstXfgivJw9oEfVuVeGOp';
            return config;
        });
        return instance;
    } else { return instance; }
})();
