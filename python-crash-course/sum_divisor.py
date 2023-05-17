def sum_divisors(number):
  '''
  returns the sum of all the divisors of a number, without including the number itself.
  '''
# Initialize the appropriate variables
  divisor = 1
  total = 0

  # Avoid dividing by 0 and negative numbers 
  # in the while loop by exiting the function
  # if "number" is less than one
  if number < 1:
    return 0 

  # Complete the while loop
  while divisor < number:
    if number % divisor == 0:
      total += divisor
    # Increment the correct variable
    divisor += 1

  # Return the correct variable 
  return total


print(sum_divisors(0)) # 0
print(sum_divisors(3)) # 1
print(sum_divisors(36)) # 55
print(sum_divisors(102)) # 114
