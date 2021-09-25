## Problem 5

### Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

---

The first thing I do is to make a list of numbers from 1 to a given parameter. And after the list is made, this function invokes another which simply finds the smallest positive number evenly divisible by all the numbers in that list.

The initial apprach I took with this problem was almost the same as the one I applied here, however, as I realised a little bit later, somewhat counter-intuitive. What I did was that, when the dividend was not divided evenly by the number, I would increase it by one, but this was not necessary, because I could just increase the dividend by the given input, as that would be the largest number, and if that largest number could not divide the number, there was no point in simply increasing it by one. So anytime the number was not evenly divided, I increased it by the given user input, in this case 20.
