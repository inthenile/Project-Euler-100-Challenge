# Largest prime factor
# Problem 3
# The prime factors of 13195 are 5, 7, 13 and 29.
#
# What is the largest prime factor of the number 600851475143 ?

number = 600851475143

def find_pf(num):

    pf = [] #This is where we store the prime factors
    n = 2 # smallest prime number which we try to divide the given number with,
        # it increases if the number isn't divisible completely (no remainder) by 2.
    while num > 1: #we want to keep dividing until the number goes down to one.
        while num % n != 0: #if the number is not divisible without a remainder by n, increase it by one until it is.
            n+=1
        if num % n == 0: #if you can divide it with no remainders, you do it, and store the numbers with which you divided, i.e. the prime factors
            num = int(num / n)
            pf.append(n)

    return {n for n in pf} #turning pf list into a set to remove duplicates

x = find_pf(number)

print("\nThe largest prime factor of the number " + str(number) + " is " + str(max(x))+".") #returning the maximum value in the set.
