import { randomIdLength } from '../constants';

const generateRandomId = () => Math.floor((Math.random() * randomIdLength));

export default generateRandomId;
