using System;

namespace Problem1
{
    class Program
    {
        /*
         * Problem 1: Multiples of 3 or 5
         * 
         * If we list all the natural numbers below 10 that are multiples of 3 or 5,
         * we get 3, 5, 6 and 9. The sum of these multiples is 23.

           Find the sum of all the multiples of 3 or 5 below 1000.
         */
        static void Main(string[] args)
        {
            //a variable to store the sum
            int sum = 0;
            //finding multiples of 3 and adding them to the sum
            for (int i = 0; i < 1000; i++)            
            {
                if (i % 3 == 0)
                {
                    //getting rid of the multiples of both 3 and 5, in order to eliminate duplicates
                    if (!(i % 5 == 0 && i % 3 == 0)){
                        sum = i + sum;
                        Console.WriteLine(i);
                    }
                }
            }//finding multiples of 5 and adding them to the sum
            for (int j = 0; j < 1000; j++)
            {
                if (j % 5 == 0)
                {
                    sum = sum + j;
                }
            }

            //Total sum
            Console.WriteLine("The answer is: " + sum);
        }
    }
}
