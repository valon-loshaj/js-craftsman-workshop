const problems = [
    {
        title: 'Ransom Note (383)',
        description:
            'This challeng was also sourced from leetcode. The function expects two strings and returns a boolean value if the first string can be made from the letters in the second string.',
        status: 'Solved',
        tags: ['Leetcode', 'Strings', 'Hash Tables'],
        difficultyLevel: 'Easy',
        details: {
            expectedInput: '"abcdef", "abcef"',
            solutionDetails:
                "Diving into the 'Ransom Note' problem from LeetCode, it's all about string manipulation and clever use of hash tables. The task was to check if the first string (the ransom note) could be formed from the letters of the second string (the magazine).\n\nMy approach involved creating a hash table, or in JavaScript terms, a Map, to keep track of the letter frequencies in the magazine. I looped through each character in the magazine and updated the Map with the count of each letter.\n\nOnce I had the counts of all the letters in the magazine, I started to loop through the ransom note. For each character in the ransom note, I checked if it existed in the Map and whether there were enough of those characters left (as per the count in the Map).\n\nIf at any point, I found a letter that wasn't in the magazine or there weren't enough of that letter, I returned false, indicating that the ransom note couldn't be constructed from the magazine. Otherwise, I decreased the count of the used letter in the Map.\n\nAfter successfully looping through the ransom note without any issues, I returned true, which means the ransom note could indeed be formed from the magazine's letters.\n\nThis problem was a neat exercise in understanding how hash tables can be effectively used to solve problems involving character frequencies and string manipulations. It's a classic example showing the power of efficient data structures in simplifying complex problems.",
            solutionCode:
                'var canConstruct = function(ransomNote, magazine) {\n    let magazineLetters = new Map();\n    \n    for (let i = 0; i < magazine.length; i++) {\n        let m = magazine.charAt(i);\n        let currentCount = magazineLetters.has(m) ? magazineLetters.get(m) : 0;\n        magazineLetters.set(m, currentCount + 1);\n    }\n    \n    for (let i = 0; i < ransomNote.length; i++) {\n        let r = ransomNote.charAt(i);\n        let currentCount = magazineLetters.has(r) ? magazineLetters.get(r) : 0;\n        if (currentCount === 0) {\n            return false;\n        }\n        magazineLetters.set(r, currentCount - 1);\n    }\n    return true;\n};',
        },
    },
    {
        title: 'Middle of the Linked List (876)',
        description:
            'This challenge is sourced from leetcode. The function expects a linked list and returns the middle node of the linked list. If there are two middle nodes, it returns the second middle node.',
        status: 'Solved',
        tags: ['Leetcode', 'Math'],
        difficultyLevel: 'Easy',
        details: {
            expectedInput: '[1, 2, 3, 4, 5]',
            solutionDetails:
                "Moving on to the 'Middle of the Linked List' problem from LeetCode, it's a cool one that dives into the world of linked lists. The challenge was to find the middle node in a linked list, and if there are two middle nodes, return the second one.\n\nI approached this by using two pointers: 'middle' and 'end'. Both start at the head of the list. Think of 'middle' as a slow walker and 'end' as a fast runner. The idea is to move 'middle' one step at a time, while 'end' moves two steps.\n\nI used a while loop that runs as long as 'end' isn't null (meaning we haven't reached the end of the list) and 'end.next' isn't null (to handle the case where the list has an even number of elements).\n\nInside the loop, I moved 'middle' one step forward, and 'end' two steps forward. The trick here is that by the time 'end' reaches the end of the list, 'middle' will be right at the center of the list. If there are two middle nodes, 'middle' will end up at the second one, because 'end' would have moved an extra step.\n\nWhen the loop ends, 'middle' is pointing to the desired node. That's the node I returned as the solution.\n\nThis problem is a great example of the two-pointer technique, a handy approach for tackling problems related to linked lists. It shows how you can use different paces to gather the information you need in just one pass through the list.",
            solutionCode:
                'var middleNode = function(head) {\n    let middle = head;\n    let end = head;\n    \n    while (end != null && end.next != null) {\n        middle = middle.next;\n        end = end.next.next;\n    }\n    return middle;\n};',
        },
    },
    {
        title: 'Number of Steps to Reduce a Number to Zero (1342)',
        description:
            'Sources challenge from leetcode. This function expects a number input and returns the number of steps it takes to reduce the number to zero.',
        status: 'Solved',
        tags: ['Leetcode', 'Math'],
        difficultyLevel: 'Easy',
        details: {
            expectedInput: 'Integer',
            solutionDetails:
                "Let's talk about the 'Number of Steps to Reduce a Number to Zero' challenge from LeetCode. It's an interesting one where you're given a number and you need to find out how many steps it takes to reduce it to zero.\n\nMy strategy here was to use a while loop that runs as long as the number is greater than zero. Within the loop, I used a simple if-else structure to decide the action based on whether the number is even or odd.\n\nIf the number is even, I divided it by 2. This step is like taking a big leap towards the goal since halving an even number gets you closer to zero pretty fast. If the number is odd, I just subtracted one from it. It's like taking a small step, inching closer to the target.\n\nAfter each action, whether it was dividing by 2 or subtracting 1, I incremented the 'totalSteps' counter. This is like ticking off a step in a checklist, keeping track of how many actions I've taken.\n\nThe loop continues until the number becomes zero, and at that point, the 'totalSteps' variable holds the total number of steps taken. That's the value I returned from the function.\n\nThis problem was a neat little exercise in understanding loop conditions and operations on numbers. It's fascinating how a simple process of division and subtraction can be used to solve such an interesting problem!",
            solutionCode:
                'var numberOfSteps = function(num) {\n    let totalSteps = 0;\n    while (num > 0) {\n    if (num % 2 == 0) {\n        num = num/2;\n    }\n    else {\n        num--;\n    }\n    totalSteps++;\n    }\n    return totalSteps;\n};',
        },
    },
    {
        title: 'Fizz Buzz (412)',
        description:
            'Classic Fizz Buzz problem also sources from leetcode. The function expects a number input and returns Fizz if divisible by 3, Buzz if divisible by 5, and the number if not divisible by 3 or 5.',
        status: 'Solved',
        tags: ['Leetcode', 'Math'],
        difficultyLevel: 'Easy',
        details: {
            expectedInput: 'Integer',
            solutionDetails:
                "Ah, the classic 'Fizz Buzz' problem! This one's a favorite in coding interviews and a fun little challenge from LeetCode. The goal is to take a number and return 'Fizz' if it's divisible by 3, 'Buzz' if it's divisible by 5, and just the number itself if it's not divisible by either.\n\nI tackled this problem with a for loop, starting from 1 and going up to the number 'n'. Inside the loop, I set up a string 'str' that would hold the result for each number. Then, it was all about checking divisibility.\n\nFirst, I checked if the number is divisible by both 3 and 5. If it was, I added 'FizzBuzz' to 'str'. This is like hitting the jackpot in the Fizz Buzz world!\n\nNext, if the number was divisible by just 3 or just 5, I added 'Fizz' or 'Buzz' to 'str', respectively. It's like a mini-celebration for each number that meets one of the criteria.\n\nAnd if the number didn't meet either condition, I simply converted it to a string and added that to 'str'. It's like saying, 'You're not Fizz or Buzz, but you're still important.'\n\nFinally, I pushed 'str' into an array, creating a collection of all these Fizz, Buzz, and number strings. Once the loop finished, I returned this array. This problem was a great exercise in using loops and conditionals, and it's always a bit of fun to see all the Fizz and Buzz action happening!",
            solutionCode:
                "var fizzBuzz = function(n) {\n    let arrayOfStrings = [];\n    for (let i = 1; i <= n; i++) {\n        let str = '';\n        if (i % 3 === 0 && i % 5 === 0) {\n            str += 'FizzBuzz';\n            }\n        else if (i % 3 === 0) {\n            str += 'Fizz';\n        }\n        else if (i % 5 === 0) {\n            str += 'Buzz';\n        }\n        else {\n            str += i.toString;\n        }\n        arrayOfStrings.push(str);\n    }\n    return arrayOfStrings;\n}",
        },
    },
    {
        title: 'Richest Customer Wealth (1672)',
        description:
            'Another problem sourced from leetcode. This function expects a 2D array of integers and returns the largest sum of any of the subarrays.',
        status: 'Solved',
        tags: ['Leetcode', 'Math', 'Arrays'],
        difficultyLevel: 'Easy',
        details: {
            expectedInput: '[[1, 2, 3], [4, 5, 6]]',
            solutionDetails:
                "Alright, let's tackle the 'Richest Customer Wealth' problem. It's a fun one from LeetCode where I had to find the highest sum in a 2D array of integers. Each subarray is like a customer's account, and I needed to figure out who's the wealthiest.\n\nI approached it by looping through each customer's account. Picture this as flipping through pages of an account ledger, summing up each customer's balance. To add up the wealth in each account, I used the 'reduce' function in JavaScript. This function is super handy. It goes through each element (the wealth in each account) and tallies it up, kind of like using a calculator to add up a bill.\n\nAfter getting the total wealth for a customer, I compared it with 'maxSum', which I initially set to zero. It's like having a high score table and updating it whenever I find a richer customer. The 'Math.max' function came into play here, essentially asking, 'Is this customer richer than the current richest?' If the answer was yes, I updated 'maxSum' with this new value.\n\nIn the end, 'maxSum' holds the total wealth of the richest customer, and that's what I returned. This problem was a neat exercise in handling 2D arrays and using JavaScript methods efficiently. It showed how breaking down the problem into smaller parts can make it much more manageable.",
            solutionCode:
                'var maximumWealth = function(accounts) {\n    // loop through each index which contains an array of integers\n    // for each index, get the sum of the integers\n    // if the sum of the next account is larger than the current value of maximumWealth then replace it, otherwise move to the next index\n    let maxSum = 0;\n    \n    for (let account of accounts) {\n        let sum = account.reduce((acc, num) => acc + num, 0);\n        maxSum = Math.max(maxSum, sum);\n    }\n    return maxSum;\n};',
        },
    },
    {
        title: 'Running Sum of 1d Array (1480)',
        description:
            'This problem was sourced from my beginner leetcode problems. I completed this problem and was pretty much bit by the bug from a leetcode UI standpoint. The challenge calls for an array of integers to be passed in and the executed function needs to run a sum of all the integers in the array.',
        status: 'Solved',
        tags: ['Leetcode', 'Math', 'Arrays'],
        difficultyLevel: 'Easy',
        details: {
            expectedInput: '[1, 2, 3, 4]',
            solutionDetails:
                "Alright, let's dive into how I cracked the Running Sum of 1d Array problem.\n\nIt's a neat little challenge from LeetCode that's perfect for anyone just getting their feet wet in coding problems. The goal was simple: take an array of numbers and calculate the running sum. Imagine you're in Trader Joe's with a shopping cart, and as you walk down each aisle, you're adding items to your cart, keeping track of your total as you go. That's essentially what I did with this coding challenge.\n\nI kicked off by setting up my runningSum variable at zero. Think of this as starting with an empty shopping cart. Then, I ventured into the loop, which is like meandering through the aisles of Trader Joe's. In each iteration, every number I encountered in the array was like an item I picked up and tossed into my cart.\n\nWith each item added, I updated the runningSum. It's like looking at each product's price tag and adding it to my running total. This way, I knew exactly how much was in my cart at any given moment. The beauty of it is the simplicity - just keep adding as you go.\n\nOnce I'd gone through all the aisles (or, in my code, the end of the array), my runningSum wasn't empty anymore. It reflected the total cost of all the items (or numbers) I'd gathered. That's when I knew my shopping - I mean coding - was done. Return that final amount, and there you have it, problem solved!\n\nThis approach really highlights the ease and straightforwardness of solving such problems. It's a fantastic analogy for beginners, showing how accumulating values works, much like filling up a shopping cart at Trader Joe's, item by item.",
            solutionCode:
                'function sumArray(nums) {\n\tlet runningSum = 0;\n\tfor(let num of nums) {\n\t\trunningSum += num;\n\t}\n\treturn runningSum;\n}',
        },
    },
]

export default problems
