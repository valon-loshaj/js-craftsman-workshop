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
            solutionDetails: 'Details of the solution.',
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
            solutionDetails: 'Details of the solution.',
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
            solutionDetails: 'Details of the solution.',
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
            solutionDetails: 'Details of the solution.',
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
            solutionDetails: 'Details of the solution.',
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
            solutionDetails: 'Explanation of the solution.',
            solutionCode:
                'function sumArray(nums) {\n\tlet runningSum = 0;\n\tfor(let num of nums) {\n\t\trunningSum += num;\n\t}\n\treturn runningSum;\n}',
        },
    },
]

export default problems
