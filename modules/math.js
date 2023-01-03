/**
 * Module pour faire des calculs !
 */
const math = {

    /**
     * Méthode pour réaliser une addition
     * @param  {...number} numbers Les nombres
     * @returns {number} La somme des nombres
     */
    addition: function (...numbers) {

        let result = 0;
        for (const nb of numbers) {
            result += parseInt(nb);
        }
        return result;

        // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
        return numbers.reduce((acc, nb) => acc + nb, 0);
    }

    // TODO Les autres operations
};

module.exports = math;
