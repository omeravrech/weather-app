import WeatherPage from './Pages/WeatherPage';
import FavoritePage from './Pages/FavoritePage';

export default [
    {
        path: "/",
        display: "Home",
        exact: true,
        component: WeatherPage,
        icon: "home"
    },
    {
        path: "/favorite",
        display: "Favorite",
        component: FavoritePage,
        icon: "star"
    },
  ];