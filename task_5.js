/**
 * The function calculates the total perimeter of all buildings.
 * @param {array} field The field is given as a 2D array
 * @returns {number} Returns the total perimeter of buildings on the field
 */
function calcPerimeter(field) {

    let perimeter = 0; // Stores total perimeter length

    // Iterate each y-axis
    for (let y = 0; field.length > y; y++) {

        // Iterate each x-axis cell on the y-axis
        for (let x = 0; field[y].length > x; x++) {

            // If building body detected then find its adjacent parts
            if (field[y][x] === 'X') {

                // Preparing the possible coordinates of the adjacent cells
                let coordinates = [
                    {'x': x, 'y': y - 1}, // top side cell coordinates
                    {'x': x + 1, 'y': y}, // right side cell coordinates
                    {'x': x - 1, 'y': y}, // bottom side cell coordinates
                    {'x': x, 'y': y + 1} // left side cell coordinates
                ];

                // Checking each possible adjacent cell
                for (i = 0; i < 4; i++) {

                    // If adjacent cell doesn't not found or do not contain part of the building, then adding side perimeter
                    if (!(field[coordinates[i].y] && field[coordinates[i].y][coordinates[i].x] === 'X')) {
                        perimeter++;
                    }
                }
            }
        }
    }

    return perimeter;
}
