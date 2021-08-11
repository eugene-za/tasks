<?php
/**
 * The function for counting the number of repeated characters >= $n times in a string.
 * @param string $str Given string
 * @param int $n The minimum number of characters to consider in result
 * @return int The number all unique case-insensitive characters that occur >= $n
 */
function getNumOfUniqueCharacters(string $str, int $n): int
{
    // Getting a case insensitive string
    $str = mb_strtolower($str);

    // Getting an array of characters
    $chars = mb_str_split($str);

    // Getting an array with the total count of each character
    $counted_chars = array_count_values($chars);

    // Getting an array of characters whose total count is more or equals $n
    $filtered_chars = array_filter($counted_chars, fn($count) => $count >= $n);

    // Returning a total count of filtered characters
    return count($filtered_chars);
}
