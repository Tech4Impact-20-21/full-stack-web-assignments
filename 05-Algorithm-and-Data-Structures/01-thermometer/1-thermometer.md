# Algorithm & Data Structure First Assignment

## Question 

We are asked to create a pseudocode to convert all types of temperature into Celcius.

There are 3 types of temperature and here are the ways to convert them into Celcius:

- `Fahrenheit` to `Celcius` = (N - 32) * (5/9)
- `Kelvin` to `Celcius` = (N - 273.15)
- `Celcius` to `Celcius` = N


## Answer

Create the function
``` 
FUNCTION to_celcius("temp" any number, "type" any string):
	DECLARE "result" AS number
	STORE “type” IN LOWERCASE TO “type”
	IF “type” == “celcius”:
		STORE "temp" TO "result"
		RETURN "result"
	ELSE IF "type" == "fahrenheit":
		CALCULATE ("temp" MINUS 32) MULTIPLY WITH (5 DIVIDE BY 9) AND STORE TO "result"
		RETURN "result"
	ELSE IF “type” == “kelvin”:
		CALCULATE "temp" MINUS 273.15 AND STORE TO "result"
		RETURN "result"
	ELSE:
		STORE “Sorry, the temperature type you entered can’t be recognized” TO “result”
		RETURN “result”
```

First input
``` 
CALL to_celcius WITH INPUT 86 AND Fahrenheit AND STORE "result"
SHOW "result" // 30
```

Second input
```
CALL to_celcius WITH INPUT 45 AND Celcius AND STORE "result”
SHOW "result" // 45
```
