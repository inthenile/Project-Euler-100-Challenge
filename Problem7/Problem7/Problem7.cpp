#include <iostream>
#include <vector>

/*
10001st prime

Problem 7

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

int main() {
	using namespace std;
	//vector to store the prime numbers.
	vector<int> primes;

	int num = 2; //the smallest prime number.
	int counter = 0; //to count how many times the loop has been completed.
	bool isPrime = false; //the boolean will help us make a do-while loop to fill in the primes vector.

	while (isPrime == false) {
		for (int i = 1; i <= num; i++) {
			//If the number is evenly divisible by any number that is not 1 or the number itself, we start the loop again, increasing the number by one.
			if (num % i == 0 && i != 1 && i != num) {
				num++;
				isPrime = false;
			}
			else {
				//Otherwise, the number must be a prime number.
				isPrime = true;
			}
		}
		if (isPrime) {
			//I add the prime numbers to the vector, and increase the number by one.
			primes.push_back(num);
			num++;
			counter++;
		}
		//If the counter is less than 1001, loop restarts, else, it stops.
		if (counter < 1001)
		{
			isPrime = false;
			//Unless it's the 1001st prime number, I clear the vector.
			//This is done in order to not fill the vector with the numbers that I don't need.
			primes.clear();
		}
		else {
			isPrime = true;
		}
	}
	//RESULT:
	for (int prime : primes) {
		cout << "The 1001st prime number is " << prime << endl;
	}

	return 0;
}
