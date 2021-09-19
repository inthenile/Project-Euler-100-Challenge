'''
Largest palindrome product
Problem 4

A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
'''

def find_palindrome(range):
    # Lists to store multiplications in order to be able to reverse them later
    multi_list = []
    for num_1 in range:
        for num_2 in range:
            # Multiplying the numbers between the given range
            # Creating a list of strings, which makes it a lot simpler to reverse the numbers
            _multiplication = list(str(num_1 * num_2))
            # The numbers are turned to a list, and then joined together to make a single value instead of separate ones
            multiplication = "".join(_multiplication)
            # Adding the numbers to the list one by one, so we are able to check them individually outside of this loop
            multi_list.append(multiplication)
    # Here we find the palindromes
    for numbers in multi_list:
        # As the numbers are string types, we can use the following method
        if numbers == numbers[::-1]:
            # Here we get the largest palindrome as it stands at the end of the list
            largest_palindrome = numbers[::-1]
    print("Largest palindrome made from the product of two 3-digit numbers is: " + largest_palindrome)

# Since the last number is excluded, this range gives us only all the three digit numbers
find_palindrome(range(100,1000))



