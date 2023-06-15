import Cloudy from '../assets/backgrounds/Cloudy.jpg';
import Foggy from '../assets/backgrounds/Foggy.jpg';
import Rainy from '../assets/backgrounds/Rainy.jpg';
import Storm from '../assets/backgrounds/ThunderStorm.jpg';
import Sunny from '../assets/backgrounds/Sunny.jpg';
import Winter from '../assets/backgrounds/Winter.jpg';

const BackgroundImage = ({ icon }) => {
	return (
		<>
			{icon === 'WiDaySunny' && (
				<img
					src={Sunny}
					alt="background"
					className="fixed object-cover bg-no-repeat  bg-fixed h-full w-full"
				/>
			)}
			{icon === 'WiThunderstorm' && (
				<img src={Storm} alt="background" className="fixed object-cover bg-fixed h-full w-full" />
			)}
			{icon === 'WiSleet' && (
				<img src={Rainy} alt="background" className="fixed object-cover bg-fixed h-full w-full" />
			)}
			{icon === 'WiRain' && (
				<img src={Rainy} alt="background" className="fixed object-cover bg-fixed h-full w-full" />
			)}
			{icon === 'WiSnow' && (
				<img src={Winter} alt="background" className="fixed object-cover bg-fixed h-full w-full" />
			)}
			{icon === 'WiFog' && (
				<img src={Foggy} alt="background" className="fixed object-cover bg-fixed h-full w-full" />
			)}
			{icon === 'WiDayFog' && (
				<img src={Cloudy} alt="background" className="fixed object-cover bg-fixed h-full w-full" />
			)}
		</>
	);
};

export default BackgroundImage;
