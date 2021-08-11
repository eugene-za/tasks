/**
 * The function calculates the total perimeter of all buildings.
 * @param {array} field The field is given as a 2D array
 * @returns {number} Returns the total perimeter of buildings on the field
 */
function calcPerimeter(field) {

    let perimeter = 0; // Stores total perimeter length

    // Iterate each Y-axis
    for (let posY = 0; field.length > posY; posY++) {

        // Iterate each cell with X-coordinate on Y-axis
        for (let posX = 0; field[posY].length > posX; posX++) {

            // If building body detected then calculate its perimeter
            if (field[posY][posX] === 'X') {

                // Preparing and iterating each side as a possible position for an adjacent building
                [
                    [posY - 1, posX], // top side
                    [posY + 1, posX], // bottom side
                    [posY, posX - 1], // left side
                    [posY, posX + 1]  // right side
                ]
                .forEach(function (pos) {

                    // If adjacent cell doesn't not found or do not contain part of the building
                    if (!(field[pos[0]] && field[pos[0]][pos[1]] === 'X')) {

                        // Adding the current side length
                        perimeter++;
                    }

                });

            }
        }
    }

    return perimeter;
}
