import * as functionUnderTest from "./combinationSum";

RunTestCases();

function RunTestCases() {
  console.log("Running Tests...");
  let casesPassed = 0;

  functionUnderTest.testCases.forEach((testCase) => {
    let actual = functionUnderTest.default(testCase[0]);
    let testCasePassed = logTestCaseOutput(testCase[0], testCase[1], actual);

    casesPassed = testCasePassed ? casesPassed + 1 : casesPassed;
  });

  console.log(`\n${casesPassed} test cases passed out of ${functionUnderTest.testCases.length}`);
}

function logTestCaseOutput(testInput: any, expected: any, actual: any): boolean {
  let testCasePassed = false;

  if (JSON.stringify(expected) === JSON.stringify(actual)) {
    console.log("\nPASS");
    testCasePassed = true;
  } else {
    console.log("\nFAIL");
  }

  console.log(`Test Input: ${ JSON.stringify(testInput) }`);
  console.log(`Actual: ${ JSON.stringify(actual) }`);
  console.log(`Expected: ${ JSON.stringify(expected) }`);

  return testCasePassed;
}
