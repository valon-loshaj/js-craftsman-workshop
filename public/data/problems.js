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
            solutionScript: function (ransomNote, magazine) {
                let magazineLetters = new Map()

                for (let i = 0; i < magazine.length; i++) {
                    let m = magazine.charAt(i)
                    let currentCount = magazineLetters.has(m) ? magazineLetters.get(m) : 0
                    magazineLetters.set(m, currentCount + 1)
                }

                for (let i = 0; i < ransomNote.length; i++) {
                    let r = ransomNote.charAt(i)
                    let currentCount = magazineLetters.has(r) ? magazineLetters.get(r) : 0
                    if (currentCount === 0) {
                        return false
                    }
                    magazineLetters.set(r, currentCount - 1)
                }
                return true
            },
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
            solutionScript: function (head) {
                let middle = head
                let end = head

                while (end != null && end.next != null) {
                    middle = middle.next
                    end = end.next.next
                }
                return middle
            },
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
            solutionScript: function (num) {
                let totalSteps = 0
                while (num > 0) {
                    if (num % 2 == 0) {
                        num = num / 2
                    } else {
                        num--
                    }
                    totalSteps++
                }
                return totalSteps
            },
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
            solutionScript: function (n) {
                let arrayOfStrings = []
                for (let i = 1; i <= n; i++) {
                    let str = ''
                    if (i % 3 === 0 && i % 5 === 0) {
                        str += 'FizzBuzz'
                    } else if (i % 3 === 0) {
                        str += 'Fizz'
                    } else if (i % 5 === 0) {
                        str += 'Buzz'
                    } else {
                        str += i.toString
                    }
                    arrayOfStrings.push(str)
                }
                return arrayOfStrings
            },
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
            solutionScript: function (accounts) {
                let maxSum = 0

                for (let account of accounts) {
                    let sum = account.reduce((acc, num) => acc + num, 0)
                    maxSum = Math.max(maxSum, sum)
                }
                return maxSum
            },
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
            solutionScript: function sumArray(nums) {
                let runningSum = 0
                for (let num of nums) {
                    runningSum += num
                }
                return runningSum
            },
        },
    },
]

export default problems
