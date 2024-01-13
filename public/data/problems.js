const problems = [
    {
        title: "Problem #5",
        description: "Description for problem 1",
        status: "Unsolved",
        tags: ["tag1", "tag2", "tag3"],
        difficultyLevel: "Hard",
        details: {
            expectedInput: "Enter a number between 1 and 10",
            solutionScript: function (input) {
                return Number(input) + 10;
            }
        }
    },
    {
        title: "Problem #4",
        description: "Description for problem 2",
        status: "Unsolved",
        tags: ["tag1", "tag2", "tag3"],
        difficultyLevel: "Medium",
        details: {
            expectedInput: "Expected input",
            solutionScript: "Solution script"
        }
        
    },
    {
        title: "Problem #3",
        description: "Description for problem 3",
        status: "Unsolved",
        tags: ["tag1", "tag2", "tag3"],
        difficultyLevel: "Medium",
        details: {
            expectedInput: "Expected input",
            solutionScript: "Solution script"
        }
    },
    {
        title: "Problem #2",
        description: "Description for problem 4",
        status: "Unsolved",
        tags: ["tag1", "tag2", "tag3"],
        difficultyLevel: "Easy",
        details: {
            expectedInput: "Expected input",
            solutionScript: "Solution script"
        }
    },
    {
        title: "Problem #1",
        description: "Description for problem 5",
        status: "Unsolved",
        tags: ["tag1", "tag2", "tag3"],
        difficultyLevel: "Easy",
        details: {
            expectedInput: "Expected input",
            solutionScript: "Solution script"
        }
    },
];

export default problems;