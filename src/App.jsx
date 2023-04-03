import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';
import error404 from './pages/error404';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/:name/weather" component={WeatherPage} />

				<Route path="*" component={error404} />
			</Switch>
		</Router>
	);
};

export default App;
