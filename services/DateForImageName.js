/**
 * Format YYYYMMDD
 * ---------------
 * Example : 20220602
 * 
 * @see https://stackoverflow.com/questions/12409299/how-to-get-current-formatted-date-dd-mm-yyyy-in-javascript-and-append-it-to-an-i
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON?retiredLocale=id
 */
const time = new Date();
let yyyy = time.getFullYear();
let mm   = time.getMonth() + 1;
let dd   = time.getDate();

if (mm < 10) mm = '0' + mm;
if (dd < 10) dd = '0' + dd;

module.exports = yyyy + '' + mm + '' + dd;