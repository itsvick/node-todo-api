const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

/* const message = ' I am Vivek';
const hash = SHA256(message).toString();

console.log(`Messge ${message}`);
console.log(`HASH:  ${hash}`);
 */

const data = {
    id: 10
};

const token = jwt.sign(data, '12sasasa');
console.log('token', token);

const decoded = jwt.verify(token, '12sasasa');
console.log('decoded', decoded);
