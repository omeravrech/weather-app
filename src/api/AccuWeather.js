import axios from 'axios';

var instance = null;

export default (function() {
    if (!instance) {
        instance = axios.create({
            baseURL: 'http://dataservice.accuweather.com',
            headers: {
                Cookie: 'SameSite=None'
            }
        });
        instance.interceptors.request.use((config) => {
            config.params = config.params || {};
            config.params['apikey'] = 'kUrw04i3ylBSbsLgr37yqx5AKGlGnp4r';
            return config;
        });
        return instance;
    } else { return instance; }
})();
