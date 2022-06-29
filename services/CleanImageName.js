/** ------------------------
 * Format String Image Name
 * -------------------------
 * @param   {string} x 
 * @returns {string}
 * 
 * @todo 
 *  - cleaning whitespace (√)
 *  - lowercase on string (√)
 */
const CleanImageName = x => {
  return x.toLowerCase().replace(/ /gi, '-');
}

module.exports = CleanImageName;