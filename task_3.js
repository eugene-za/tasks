/**
 * A simple autocomplete function.
 * @param {string} search String for search
 * @param {array} dictionary Dictionary array
 * @param results_limit The limit of results count you want to get
 * @returns {array} An array with the search results | An empty array if nothing found
 */
function autocomplete(search, dictionary, results_limit) {

    const results = []; // Stores an array of found results

    // Prepare search string
    search = search.replace(/[^\p{L}]/gu, '').toLowerCase();

    outer_loop:
        while (search !== '') {

            // Iterate each dictionary word
            for (let i = 0; dictionary.length > i; i++) {

                // If the limit of results number has been reached then break loops
                if (results_limit === 0) {
                    break outer_loop;
                }

                // If a match is found update results array
                if (dictionary[i].toLowerCase().startsWith(search)) {
                    results.push(dictionary[i]);
                    results_limit--;
                }
            }

            // If results are found, break the loop, else cut off last character of the search string
            if (results.length > 0) {
                break;
            } else {
                search = search.slice(0, -1);
            }
        }

    return results;
}
