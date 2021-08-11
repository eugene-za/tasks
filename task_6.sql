/* a) Select all people, who get paid more than their direct chiefs */

    SELECT S.name AS subordinate_name,
           S.wage AS subordinate_wage,
           C.wage AS chief_wage,
           C.name AS chief_name
      FROM person S
INNER JOIN person C
        ON S.chief_id = C.id
     WHERE S.wage > C.wage

/* b) Select a list of all offices along with a person with the highest wage in each.
if more than one person has the highest wage, display them all.
The office should be selected even if it has no people */

   SELECT B.name AS office,
	      P.name,
	      P.wage
     FROM branch B
LEFT JOIN person P
       ON B.id = P.office_id
      AND P.wage = (
            SELECT MAX(wage)
              FROM person
             WHERE office_id = B.id
          );

/* c) Select all chiefs, who have exactly one direct subordinate. */

SELECT C.name
  FROM person C
 WHERE ( SELECT count(*) FROM person WHERE chief_id = C.id ) = 1

/* d) Select all offices sorted by total wage of people in it, descending. */

    SELECT B.name,
           SUM(P.wage) AS total_wage
      FROM person P
RIGHT JOIN branch B
        ON B.id = P.office_id
  GROUP BY B.id
  ORDER BY total_wage DESC
