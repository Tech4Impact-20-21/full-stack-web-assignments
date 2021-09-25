# Algorithm & Data Structure Second Assignment

## Question 

We are asked to write a program that prints the numbers from 1 to n:

- For the multiples of `3` print "Fizz" instead of the number

- For the multiples of `5` print "Buzz" instead of the number

- For numbers which are multiplies of both `3` and `5` print "FizzBuzz"

- For numbers not divisible by, `3`, `5`, or both, print the number as is

## Answer

Create the function
```
FUNCTION fizz_buzz("n" any number):
	STORE 1 TO "i"
	DECLARE "remainder_3" AS number
	DECLARE "remainder_5" AS number
	WHILE "i" <= "n":
		CALCULATE "i" MOD 3 AND STORE TO "remainder_3"
		CALCULATE "i" MOD 5 AND STORE TO "remainder_5"
		IF "remainder_3" == 0:
			IF "remainder_5" == 0:
				DISPLAY "FizzBuzz"
			ELSE:
				DISPLAY "Fizz"
		ELSE IF "remainder_5" == 0:
			DISPLAY "Buzz"
		ELSE:
			DISPLAY "i"
		ADD "i" BY 1		
```

Use the function
```
CALL fizz_buzz WITH INPUT 20
```
