# Algorithm & Data Structure Fourth Assignment

## Question 

We are asked to write a program to round the students' grade:

- For rounding up to the multiples of `5`, the grade has to have a difference that is less than `3` with the rounded-number.

- If the grade is less than `68`, there is no need for rounding and the student doesn't pass.

## Answer

Create the function
```
FUNCTION rounding_grade("grade" any number):
	DECLARE "remainder" AS number
	DECLARE "final_grade" AS number
	CALCULATE "grade" MOD 5 AND STORE TO "remainder"
	IF "grade" < 68 OR "remainder" < 3:
		STORE "grade" TO "final_grade"
		RETURN "final_grade"
	ELSE:
		CALCULATE "grade" PLUS (5 MINUS "remainder") AND STORE TO "final_grade"
		RETURN "final_grade"
```

First input
```
CALL rounding_grade WITH INPUT 73 AND STORE "final_grade”
SHOW "final_grade" //75
```

Second input
```
CALL rounding_grade WITH INPUT 87 AND STORE "final_grade”
SHOW "final_grade" //87
```

Third input
```
CALL rounding_grade WITH INPUT 68 AND STORE "final_grade”
SHOW "final_grade" //70
```

Forth input
```
CALL rounding_grade WITH INPUT 67 AND STORE "final_grade”
SHOW "final_grade" //67
```

Fifth input
```
CALL rounding_grade WITH INPUT 43 AND STORE "final_grade”
SHOW "final_grade" //43
```