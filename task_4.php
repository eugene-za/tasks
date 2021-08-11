<?php
/**
 * The function calculates a sum of all carried digits by adding 3-digit numbers.
 * @param array $arr The array with numbers
 * @return int Total count of carry
 */
function carry(array $arr): int
{
    $result = 0; // Stores the total sum of carried digits for result

    // Getting the number as first argument for further addition
    $num_a = array_shift($arr);

    // Iterate each number from array as second argument for addition
    foreach ($arr as $num_b) {

        // Reversing numbers and storing them in a string type
        $str_a = strrev($num_a);
        $str_b = strrev($num_b);

        $carry = 0; // Stores the carry for next iteration by digit places

        // Iterate each digit place of the 3-digit number
        for ($place = 0; 3 > $place; $place++) {

            // Preparing digits of current place
            $digit_a = (int)$str_a[$place];
            $digit_b = (int)$str_b[$place];

            // Calculating the sum of the digits of the current place and the storing carry
            $place_sum = $digit_a + $digit_b + $carry;

            // Setting a new value for carry
            $carry = (int)($place_sum > 9);

            // Adding a new carry value to the total sum for result
            $result += $carry;
        }

        // Updating a first argument for the next iteration by numbers array
        $num_a += $num_b;
    }

    return $result;
}
