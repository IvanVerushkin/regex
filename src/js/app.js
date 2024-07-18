// TODO: write your code here
import sum from './basic';
import { Validator } from './user';

const validator = new Validator();
console.log(validator.validateUsername('test-user'));

console.log('worked');

console.log(sum([1, 2]));
