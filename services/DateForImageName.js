/**
 * Format YYYYMMDD
 * ---------------
 * Example : 20220602
 */
module.exports = `${new Date().getFullYear()}0${new Date().getMonth() + 1}0${new Date().getDay()}`;