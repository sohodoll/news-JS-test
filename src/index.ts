import './index.css';
import Loader from './components/controller/loader';

const newLoader = new Loader('google', { name: 'google', id: '1' });

console.log(newLoader.makeUrl({ city: 'Moscow' }, '.com'));

console.log('here');
