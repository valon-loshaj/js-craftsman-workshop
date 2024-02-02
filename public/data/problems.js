const problems = [
    {
        title: 'Integer to Roman (12)',
        description:
            "This challenge requires you to write a function that takes in a number and spits back out the roman numeral equivalent. At first it sounds pretty simple, but of course roman numerals have this weird thing they do for numbers like 4 and 9 and many others where the first numeral is smaller than the next signifying that you have to subtract the current numeral from the next one. For example if you have the number 4, you don't write it as 'IIII' but instead it's 'IV'.",
        status: 'Solved',
        tags: ['Leetcode', 'Strings', 'Math'],
        difficultyLevel: 'Medium',
        details: {
            expectedInput: 'abcdef, abcef',
            solutionDetails:
                "This challenge requires you to write a function that takes in a number and spits back out the roman numeral equivalent. At first it sounds pretty simple, but of course roman numerals have this weird thing they do for numbers like 4 and 9 and many others where the first numeral is smaller than the next signifying that you have to subtract the current numeral from the next one. For example if you have the number 4, you don't write it as 'IIII' but instead it's 'IV'.\n\nI started the solution by defining a map of key value pairs where the key was the number and the value was the roman numeral value. I figured this was a good place to start because I'll need the map in order to establish the link between the numbers and their respective roman numerals. The next thing I did was define the romanNumeral variable which is a string and will be used to define the final roman numeral which will be returned. With that I felt like I got the easy stuff out of the way.\n\nThe tough part was figuring out how to add the correct roman numerals to the romanNumerals string variable in the correct order so that I can create the correct roman numeral for each number. What I noticed when looking through the roman numerals was that if I were to sort all of the number values for the roman numerals in descending order, I could possibly loop through them and depending on whether the input number provided to the function was greater than the current number in the array I can get a pretty good idea of when to add a particular roman numeral to the final roman numeral string.\n\nSo I wrote a for loop with a nested while loop which handles the greater than operator logic and it also subtracts the value of the roman numeral from the original num which is really important to make sure the loop does what I need it to do and evaluates the number in its entirety. This approach worked well...at first. But the edge cases were still not satisfied. Numbers like '9' and '4' were still being generated incorrectly.\n\nAfter banging my head trying to build in conditional logic within the while loop it occurred to me that I could actually simplify this by including the edge cases in the original map and referencing the numbers when executing the 'get' method on the map. So I added the edge cases which were 4, 40, 400, 9, 90, and 900 to the map and ran through the logic again. Bingo! That managed to do the trick!",
            solutionCode:
                "function intToRoman(num: number): string {\n    const romanNumerals: Map<number, string> = new Map([\n        [1, 'I'], [4, 'IV'], [5, 'V'], [9, 'IX'],\n        [10, 'X'], [40, 'XL'], [50, 'L'], [90, 'XC'],\n        [100, 'C'], [400, 'CD'], [500, 'D'], [900, 'CM'],\n        [1000, 'M']\n    ]);\n    const romanNumeralsKeys: number[] = Array.from(romanNumerals.keys()).sort((a, b) => b - a);\n    let romanNumeral: string = '';\n\n    for (let i = 0; i < romanNumeralsKeys.length; i++) {\n        while (num >= romanNumeralsKeys[i]) {\n            romanNumeral += romanNumerals.get(romanNumeralsKeys[i]);\n            num -= romanNumeralsKeys[i];\n        }\n    }\n    return romanNumeral;\n};",
        },
    },
    {
        title: 'H-Index (274)',
        description:
            "The 'H-Index' problem is a fascinating exercise in array manipulation. It involves finding the largest 'h' value in an array, where 'h' is defined as the number of elements in the array that are greater than or equal to 'h'.",
        status: 'Solved',
        tags: ['Leetcode', 'Arrays', 'Sorting'],
        difficultyLevel: 'Medium',
        details: {
            expectedInput: 'abcdef, abcef',
            solutionDetails:
                "In solving the 'H-Index' problem, I used a sorting approach to efficiently find the largest 'h' value.\n The solution involved sorting the array in descending order and then iterating through it.\n For each element, I checked if it was greater than or equal to the current 'h' value. If it was, I incremented 'h' and moved on to the next element. Otherwise, I stopped the loop and returned the current 'h' value.\n This method ensures that the largest 'h' value is found, showcasing the power of sorting in solving array problems.",
            solutionCode:
                'function hIndex(citations: number[]): number {\n    // Sort the citations in descending order.\n    citations.sort((a, b) => b - a);\n    \n    // Find the h-index.\n    let hInd: number = 0;\n    for (let i = 0; i < citations.length; i++) {\n        if (citations[i] >= i + 1) {\n            hInd = i + 1;\n        } else {\n            break;\n        }\n    }\n    \n    return hInd;\n};',
        },
    },
    {
        title: 'Valid Palindrome (125)',
        description:
            "The 'Valid Palindrome' problem is a fascinating exercise in string manipulation. It asks to determine whether a given string is a palindrome, considering only alphanumeric characters and ignoring cases.",
        status: 'Solved',
        tags: ['Leetcode', 'Strings', 'Two_Pointers'],
        difficultyLevel: 'Easy',
        details: {
            expectedInput: 'abcdef, abcef',
            solutionDetails:
                "To solve the 'Valid Palindrome' problem, I started by cleaning the input string using a regular expression to remove any non-alphanumeric characters. This preprocessing step simplified the problem to focus solely on the characters that matter. I then converted the cleaned string to lowercase to ensure case-insensitivity. The next step involved creating a reversed version of the string. I iterated over the cleaned string in reverse, appending each character to form the reversed string. Finally, I compared the original cleaned string with its reversed counterpart. If they matched, it indicated that the string is a palindrome. This solution highlights the importance of preprocessing in string problems and offers a straightforward approach to palindrome checking.",
            solutionCode:
                "let isPalindrome = function(s) {\n    let phrase = s.replace(/[^0-9a-zA-Z]/g, '');\n    phrase = phrase.toLowerCase();\n    let reversePhrase = '';\n    let palindromeCheck = false;\n    for (let i = phrase.length - 1; i >= 0; i--) {\n        let letter = phrase.charAt(i);\n        reversePhrase += letter;\n    }\n    if (phrase === reversePhrase) {\n        palindromeCheck = true;\n    }\n    return palindromeCheck;\n};",
        },
    },
    {
        title: 'Length of Last Word (58)',
        description:
            "The 'Length of Last Word' problem is a classic string manipulation challenge. It asks to find the length of the last word in a given string, making it an intriguing test of parsing and navigating strings.",
        status: 'Solved',
        tags: ['Leetcode', 'Strings', 'TypeScript'],
        difficultyLevel: 'Easy',
        details: {
            expectedInput: 'abcdef, abcef',
            solutionDetails:
                "In solving the 'Length of Last Word' problem, I used a TypeScript function to efficiently process the input string. The approach involved iterating through the string and building an array of words. For each character in the string, I checked whether it was a space. If it was, and the next character was not a space (to avoid empty words), I moved on to the next word in the array. Otherwise, I appended the character to the current word. This way, I constructed an array of all the words in the string. The challenge's crux was to handle trailing spaces correctly, ensuring the last word's length was accurately returned. This problem was a neat exercise in string processing, particularly in understanding how to handle edge cases in string parsing.",
            solutionCode:
                "function lengthOfLastWord(s: string): number {\n    let stringsArray: Array<string> = ['']; // Initialize the first word as an empty string\n    let j: number = 0;\n    for (let i: number = 0; i < s.length; i++) { // Loop until i < s.length\n        if (s.charAt(i) === ' ') {\n            if (i < s.length - 1 && s.charAt(i + 1) !== ' ') { // Check next character to avoid empty words\n                j++;\n                stringsArray[j] = ''; // Initialize new word\n            }\n        } else {\n            stringsArray[j] += s.charAt(i); // Append character to current word\n        }\n    }\n    // Handle case where the last word is followed by spaces\n    return stringsArray[j].length;\n};",
        },
    },
    {
        title: 'Roman to Integer (13)',
        description:
            "Diving into the world of ancient Rome with the 'Roman to Integer' problem! This challenge is all about converting Roman numerals into their integer equivalent. A fun twist on traditional number conversion problems, it combines string manipulation with a touch of historical math.",
        status: 'Solved',
        tags: ['Leetcode', 'Hash_Tables', 'Strings', 'Math'],
        difficultyLevel: 'Easy',
        details: {
            expectedInput: 'abcdef, abcef',
            solutionDetails:
                "To solve the 'Roman to Integer' problem, I created a map to associate each Roman numeral with its integer value. Then, I iterated through the input string, translating each numeral to its corresponding value. The key part was handling the subtraction cases like 'IV' or 'IX'. For this, I looked ahead: if a smaller numeral precedes a larger one, I subtracted the smaller value from the running total; otherwise, I added it. This method effectively navigates the unique structure of Roman numerals, ensuring accurate conversion to integers. It's a neat blend of string processing and applying mathematical logic.",
            solutionCode:
                "var romanToInt = function(s) {\n    const romanNumerals = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);\n    let nums = [];\n    for (let j = 0; j <= s.length - 1; j++) {\n        let num = romanNumerals.get(s.charAt(j));\n        nums[j] = num;\n    }\n    let runningSum = 0;\n    for(let i = 0; i <= nums.length - 1; i++) {\n        if (nums[i] < nums[i + 1]) {\n            runningSum -= nums[i]\n        }\n        else {\n            runningSum += nums[i];\n        }\n    }\n    return runningSum;\n};",
        },
    },
    {
        title: 'Jump Game II (45)',
        description:
            "The sequel to the 'Jump Game', 'Jump Game II', raises the bar by asking not just whether you can reach the end of the array, but also how many minimum jumps you need to get there. Each array element still represents your maximum jump length, but now it's all about efficiency.",
        status: 'Solved',
        tags: ['Leetcode', 'Arrays', 'Greedy'],
        difficultyLevel: 'Medium',
        details: {
            expectedInput: 'abcdef, abcef',
            solutionDetails:
                "Approaching 'Jump Game II', I employed a greedy strategy to find the minimum number of jumps needed to reach the end of the array. Initially, I set the current and next maximum reachable indices based on the first element. The trick was to iterate over the array and continually update the next maximum reach. Whenever I surpassed the current maximum reach, I incremented the jump counter and updated the current reach to the next maximum. This process continued until I reached the end of the array. The beauty of this solution lies in its ability to minimize the number of jumps by always opting for the farthest reachable jump, showcasing an effective use of the greedy approach in problem-solving.",
            solutionCode:
                'var jump = function(nums) {\n    if (nums.length === 1) return 0; // No jump needed if the array has only one element\n\n    let currentJumpReach = nums[0];\n    let nextJumpMaxReach = nums[0];\n    let jumps = 1;\n\n    for (let i = 1; i < nums.length; i++) {\n        if (i > currentJumpReach) {\n            jumps++;\n            currentJumpReach = nextJumpMaxReach;\n        }\n        nextJumpMaxReach = Math.max(nextJumpMaxReach, i + nums[i]);\n    }\n\n    return jumps;\n};',
        },
    },
    {
        title: 'Jump Game (55)',
        description:
            "The 'Jump Game' challenge involves navigating an array where each element represents the maximum jump length at that position. The objective is to determine if it's possible to reach the end of the array.",
        status: 'Solved',
        tags: ['Leetcode', 'Arrays', 'Greedy'],
        difficultyLevel: 'Medium',
        details: {
            expectedInput: 'abcdef, abcef',
            solutionDetails:
                "In tackling the 'Jump Game', the key was to use a greedy approach to track the farthest reachable index. I iterated over each element of the array, updating the maximum reachable index at each step. If at any point I found myself at an index beyond my maximum reach, it meant the end of the array was not attainable, and I returned false. Conversely, if the maximum reach surpassed or reached the last index, I could conclude that the end was reachable, returning true. This method efficiently checks reachability without exhaustively exploring all possible paths, showcasing the power of greedy algorithms in solving optimization problems.",
            solutionCode:
                'var canJump = function(nums) {\n    let maxReach = 0;\n    for (let i = 0; i < nums.length; i++) {\n        if (i > maxReach) return false;\n        maxReach = Math.max(maxReach, i + nums[i]);\n        if (maxReach >= nums.length - 1) return true;\n    }\n    return false;\n};',
        },
    },
    {
        title: 'Best Time to Buy and Sell Stock II (122)',
        description:
            "In the 'Best Time to Buy and Sell Stock II' challenge, the goal is to maximize profit in a stock market scenario where you can buy and sell stocks multiple times. This problem extends the concept of finding profit opportunities in an array of stock prices.",
        status: 'Solved',
        tags: ['Leetcode', 'Arrays', 'Dynamic_Programming'],
        difficultyLevel: 'Medium',
        details: {
            expectedInput: 'abcdef, abcef',
            solutionDetails:
                "Solving 'Best Time to Buy and Sell Stock II' was about capturing every profitable opportunity. Unlike its predecessor, where you only buy and sell once, this problem allows multiple transactions for profit maximization. I iterated through the array, comparing each price with the next day's price. Whenever I found that the next day's price was higher, I executed a 'buy and sell' transaction, adding the difference to my total profit. This strategy ensures that every potential profit, no matter how small, is captured, thereby maximizing the overall profit.",
            solutionCode:
                'var maxProfit = function(prices) {\n    let profit = 0;\n    for (let i = 0; i < prices.length - 1; i++) {\n        if (prices[i] < prices[i + 1]) {\n            profit += prices[i + 1] - prices[i];\n        }\n    }\n    return profit;\n};',
        },
    },
    {
        title: 'Best Time to Buy and Sell Stock (121)',
        description:
            "The 'Best Time to Buy and Sell Stock' challenge is all about identifying the optimal time to buy and sell a stock for maximum profit. This problem is a great introduction to the concept of maximizing differences in an array.",
        status: 'Solved',
        tags: ['Leetcode', 'Arrays', 'Dynamic_Programming'],
        difficultyLevel: 'Easy',
        details: {
            expectedInput: 'abcdef, abcef',
            solutionDetails:
                "Solving the 'Best Time to Buy and Sell Stock' problem required an understanding of Dynamic_ and array manipulation. The key was to keep track of the minimum price seen so far and the maximum profit that can be achieved. I iterated through the array, updating the minimum price whenever a lower price was found. Simultaneously, I calculated the potential profit at each step and updated the maximum profit if a higher value was found. This approach ensures that the maximum difference between the selling and buying price is found, leading to the best possible profit.",
            solutionCode:
                'var maxProfit = function(prices) {\n    let maxProfit = 0;\n    let minPrice = Infinity;\n    \n    for (let i = 0; i <= prices.length; i++) {\n        if (prices[i] < minPrice) {\n            minPrice = prices[i];\n        }\n        else if (prices[i] - minPrice > maxProfit) {\n            maxProfit = prices[i] - minPrice;\n        }\n    }\n    return maxProfit;\n};',
        },
    },
    {
        title: 'Majority Element (169)',
        description:
            "The 'Majority Element' problem is a classic example that demonstrates the power of hash table manipulations. It involves finding an element in an array that appears more than any other.",
        status: 'Solved',
        tags: ['Leetcode', 'Arrays', 'Hash_Tables'],
        difficultyLevel: 'Easy',
        details: {
            expectedInput: 'abcdef, abcef',
            solutionDetails:
                "Solving the 'Majority Element' problem was an interesting exercise in efficient counting using a hash table. The solution involves iterating over the array and using a map to keep track of the count of each element. For each element in the array, I updated its count in the map. Then, I checked if the current element's count exceeded the maximum count found so far. If it did, this element became the new most frequent element. The algorithm is efficient and effectively utilizes a map for counting, highlighting the usefulness of Hash_Tables in solving frequency-based problems.",
            solutionCode:
                'var majorityElement = function(nums) {\n    const countMap = new Map();\n    let maxCount = 0, mostFrequent;\n    \n    for(const num of nums) {\n        let count = (countMap.get(num) || 0) + 1;\n        countMap.set(num, count);\n        \n        if (count > maxCount) {\n            maxCount = count;\n            mostFrequent = num;\n        }\n    }\n    return mostFrequent;\n};',
        },
    },
    {
        title: 'Remove Duplicates from Sorted Array (26)',
        description:
            "Tackling the 'Remove Duplicates from Sorted Array' problem is all about efficiently managing array elements. The aim is to modify the array in-place to remove any duplicates, keeping only unique elements, and then return the new length of the array.",
        status: 'Solved',
        tags: ['Leetcode', 'Arrays', 'Two_Pointers'],
        difficultyLevel: 'Easy',
        details: {
            expectedInput: '"abcdef", "abcef"',
            solutionDetails:
                "The 'Remove Duplicates from Sorted Array' challenge required a clever use of the two-pointer technique to effectively remove duplicates from a sorted array. Here's how I approached it: I set up Two_Pointers, 'i' and 'j'. Pointer 'i' is used to track the position where the next unique element should go, while 'j' is used to explore the array. As 'j' moves through the array, whenever it finds an element different from the current element at 'i', I increment 'i' and copy the new unique element to the 'i'-th position. This method ensures that all unique elements are moved to the front of the array, and duplicates are overwritten. After the loop, the length of the array without duplicates is 'i + 1', which is the final result. This problem is a great exercise in array manipulation and illustrates how to use pointers to achieve space-efficient solutions.",
            solutionCode:
                'var removeDuplicates = function(nums) {\n\tif (nums.length === 0) return 0;\n\n\tlet i = 0;\n\tfor (let j = 1; j < nums.length; j++) {\n\t\tif (nums[j] !== nums[i]) {\n\t\t\ti++;\n\t\t\tnums[i] = nums[j];\n\t\t}\n\t}\n\treturn i + 1;\n};',
        },
    },
    {
        title: 'Remove Element (27)',
        description:
            "In this 'Remove Element' challenge, we're tasked with removing all instances of a specified value from an array. The goal is to do this in-place and then return the new length of the array. It's a great way to practice efficient array manipulation!",
        status: 'Solved',
        tags: ['Leetcode', 'Arrays', 'Two_Pointers'],
        difficultyLevel: 'Easy',
        details: {
            expectedInput: '"abcdef", "abcef"',
            solutionDetails:
                "The 'Remove Element' problem had me working with arrays, specifically removing elements. The approach I used involved Two_Pointers: one for iterating over the array ('j') and another ('i') for tracking the position where non-target values should be placed. As I looped through the array, whenever I found a value that wasn't the specified value to remove, I placed it at the current 'i' index and then incremented 'i'. This way, all the non-target values got shuffled to the front of the array, and the target values were overwritten. After the loop, 'i' indicated the new length of the modified array, which was the final result to return. This problem was a neat exercise in in-place array manipulation, demonstrating how you can effectively use pointers to avoid the need for additional memory.",
            solutionCode:
                'var removeElement = function(nums, val) {\n\tlet i = 0;\n\tfor (let j = 0; j < nums.length; j++) {\n\t\tif (nums[j] !== val) {\n\t\t\tnums[i] = nums[j];\n\t\t\ti++;\n\t\t}\n\t}\n\treturn i;\n};',
        },
    },
    {
        title: 'Merge Sorted Array (88)',
        description:
            "Let's merge some arrays! In 'Merge Sorted Array', we get to blend two sorted lists into one. Picture combining two decks of sorted cards into a single, neatly ordered stack. It's all about finding the right spot for each element. Ready to sort and merge? Let's dive in!",
        status: 'Solved',
        tags: ['Leetcode', 'Arrays', 'Two_Pointers'],
        difficultyLevel: 'Easy',
        details: {
            expectedInput: '"abcdef", "abcef"',
            solutionDetails:
                "The 'Merge Sorted Array' problem was a neat exercise in array manipulation. It involved merging two sorted arrays, nums1 and nums2, into a single sorted array. The twist was that the first array, nums1, had enough space at its end to hold the elements of nums2.\n\nHere's how I approached it:\n1. **Copy the First Part of nums1:** I started by making a copy of the initial part of nums1. This was done using the slice method, ensuring I only took the first 'm' elements. This step was crucial to avoid overwriting elements in nums1 that needed to be merged.\n\n2. **Reset nums1:** Next, I cleared the nums1 array. This might seem counterintuitive at first, but it’s a nifty trick. By resetting nums1, I made space to merge the elements from both arrays.\n\n3. **Merge and Sort:** Now comes the merging. I used the spread operator to merge the elements of the copied nums1 and nums2 into nums1. Once merged, I sorted nums1 to ensure the final array was in ascending order. The sorting used a simple numeric comparison function to handle the ordering correctly.\n\nThis approach, while straightforward, highlights a smart use of JavaScript's array methods like slice, push, and sort. It’s a great example of how combining simple operations can lead to an elegant solution to a potentially tricky problem.",
            solutionCode:
                'let merge = function(nums1, m, nums2, n) {\n    let copyOfNums1 = nums1.slice(0, m);\n\n    nums1.length = 0;\n    nums1.push(...copyOfNums1, ...nums2);\n\n    nums1.sort((a, b) => a - b);\n};',
        },
    },
    {
        title: 'Ransom Note (383)',
        description:
            'This challeng was also sourced from leetcode. The function expects two strings and returns a boolean value if the first string can be made from the letters in the second string.',
        status: 'Solved',
        tags: ['Leetcode', 'Strings', 'Hash_Tables'],
        difficultyLevel: 'Easy',
        details: {
            expectedInput: '"abcdef", "abcef"',
            solutionDetails:
                "Diving into the 'Ransom Note' problem from LeetCode, it's all about string manipulation and clever use of Hash_Tables. The task was to check if the first string (the ransom note) could be formed from the letters of the second string (the magazine).\n\nMy approach involved creating a hash table, or in JavaScript terms, a Map, to keep track of the letter frequencies in the magazine. I looped through each character in the magazine and updated the Map with the count of each letter.\n\nOnce I had the counts of all the letters in the magazine, I started to loop through the ransom note. For each character in the ransom note, I checked if it existed in the Map and whether there were enough of those characters left (as per the count in the Map).\n\nIf at any point, I found a letter that wasn't in the magazine or there weren't enough of that letter, I returned false, indicating that the ransom note couldn't be constructed from the magazine. Otherwise, I decreased the count of the used letter in the Map.\n\nAfter successfully looping through the ransom note without any issues, I returned true, which means the ransom note could indeed be formed from the magazine's letters.\n\nThis problem was a neat exercise in understanding how Hash_Tables can be effectively used to solve problems involving character frequencies and string manipulations. It's a classic example showing the power of efficient data structures in simplifying complex problems.",
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
                "Moving on to the 'Middle of the Linked List' problem from LeetCode, it's a cool one that dives into the world of linked lists. The challenge was to find the middle node in a linked list, and if there are two middle nodes, return the second one.\n\nI approached this by using Two_Pointers: 'middle' and 'end'. Both start at the head of the list. Think of 'middle' as a slow walker and 'end' as a fast runner. The idea is to move 'middle' one step at a time, while 'end' moves two steps.\n\nI used a while loop that runs as long as 'end' isn't null (meaning we haven't reached the end of the list) and 'end.next' isn't null (to handle the case where the list has an even number of elements).\n\nInside the loop, I moved 'middle' one step forward, and 'end' two steps forward. The trick here is that by the time 'end' reaches the end of the list, 'middle' will be right at the center of the list. If there are two middle nodes, 'middle' will end up at the second one, because 'end' would have moved an extra step.\n\nWhen the loop ends, 'middle' is pointing to the desired node. That's the node I returned as the solution.\n\nThis problem is a great example of the two-pointer technique, a handy approach for tackling problems related to linked lists. It shows how you can use different paces to gather the information you need in just one pass through the list.",
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
