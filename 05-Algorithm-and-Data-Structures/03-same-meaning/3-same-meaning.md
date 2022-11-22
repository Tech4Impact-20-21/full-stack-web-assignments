# Algorithm & Data Structure Third Assignment

## Question 

We are asked to write a program to check whether a string or text is palindrome (it has the same meaning whether to be read from front or back).

## Answer

Create the function
```
FUNCTION palindrome("text" any string):
	DECLARE "length" as number
	DECLARE "half_of_length" as number
	STORE 0 TO "i"
	DECLARE "result" as boolean
	STORE "text" IN LOWERCASE TO "text"
	REMOVE WHITE SPACE FROM "text" AND STORE TO "text"
	CALCULATE LENGTH OF "text" AND STORE TO "length"
	CALCULATE "length" DIVIDE BY 2 AND STORE TO "half_of_length"
	ROUND DOWN "half_of_length" TO NEAREST INTEGER AND STORE TO "half_of_length"
	IF "half_of_length" == 0:
		STORE "TRUE" TO "result"
		RETURN "result"
		BREAK 
	WHILE "i" < "half_of_length":
		IF INDEX "i" OF "text" == INDEX ("length"-"i"-1) OF "text":
			STORE "TRUE" TO "result"
		ELSE:
			STORE "FALSE" TO "result"
			RETURN "result"
			BREAK
		ADD "i" BY 1
	RETURN "result"
```	

First input
```
CALL palindrome WITH INPUT x AND STORE "result"
SHOW "result" //TRUE
```

Second input
```
CALL palindrome WITH INPUT abba AND STORE "result"
SHOW "result" //TRUE
```

Third input
```
CALL palindrome WITH INPUT 101 AND STORE "result"
SHOW "result" //TRUE
```

Forth input
```
CALL palindrome WITH INPUT taco cat AND STORE "result"
SHOW "result" //TRUE
```

Fifth input
```
CALL palindrome WITH INPUT kodok AND STORE "result"
SHOW "result" //TRUE
```

Sixth input
```
CALL palindrome WITH INPUT ab AND STORE "result"
SHOW "result" //FALSE
```

Seventh input
```
CALL palindrome WITH INPUT abaa AND STORE "result"
SHOW "result" //FALSE
```
