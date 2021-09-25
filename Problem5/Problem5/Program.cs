using System;
using System.Collections.Generic;

namespace Problem5
{
    /*
    Smallest multiple
    Problem 5
      
    2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

    What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
    */
    class Program
    {
        static void Main(string[] args)
        {
            MakeList(20);
        }
        //Function to make a list for the the numbers in a given range
        static void MakeList(int UserInput)
        {
            List<int> numbers = new List<int>();
            //Storing each number in the list
            for (int i = 1; i <= UserInput; i++)
            {
                numbers.Add(i);
            }
            //Calling the function to find the smallest number that can be divided by each number in the list without a remainder.
            FindEvenDivision(numbers, UserInput);
        }
        //This is the function to find the number that is divided fully by all the numbers in the given list
        static void FindEvenDivision(List<int> list, int input)
        {
            int dividend = input;   /*variable to increase each time it is not divided by all numbers in the list
                                    checking if the dividend is divisible by all numbers, if not, the dividend increases by the given number.
                                    The dividend is increasing by the userInput instead of any other, 
                                    since it needs to be divided completely by that number in the end.*/

            List<int> evendivision = new List<int>(); // a list to store the divided numbers, and to see if it has the exact amount of numbers as the userInput.
            List<int> dividingnumbers = new List<int>(); //this is to store the numbers that actually divide the dividend

            //keep repeating until the list is filled
            while (dividingnumbers.Count < input) 
            { 
                foreach (int number in list)
                {
                    if (dividend % number == 0)
                    {
                        int divide = dividend / number;
                        if (evendivision.Count < 1) //prevents the same number from being applied to the list.
                        {
                            evendivision.Add(dividend);
                        }
                        dividingnumbers.Add(number);
                    }
                    else
                    {
                        evendivision.Clear(); //clear the list if there are numbers that are outside of the list.
                        dividingnumbers.Clear(); //clear the numbers as well, to check the count again.
                        dividend += input; //increase the dividend by user input
                    }
                }
            }
            //RESULT
            foreach(int num in evendivision)
            {
                Console.WriteLine("The answer is: " + num); //Outputs => The answer is: 232792560
            }
        }

    }
}