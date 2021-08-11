/**
 * The function for formatting a phone number for a country with a strange phone numbers format.
 * @param {string|int} num Phone number
 * @returns {string} Formatted phone number
 */
function addDashes(num) {

    let result = ''; // Stores the prepared result string

    // Converting phone number to a string for iteration possibility
    const num_str = num.toString();

    // Iterate each digit of number
    for (let i = 0; num_str.length > i; i++) {

        // Adding a dash before current digit to the result string if all conditions are met
        if (i > 0) { // There will never be a dash symbol before the first digit.

            let current_is_odd = num_str[i] % 2;
            let previous_is_odd = num_str[i - 1] % 2;

            if (!previous_is_odd && current_is_odd || !current_is_odd && previous_is_odd) {
                result += '-';
            }

        }

        // Adding the current digit to the result string
        result += num_str[i];
    }

    return result;
}
