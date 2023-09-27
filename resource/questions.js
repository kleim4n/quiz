var questions = [
	{
	id: 1,
	question: "Which of the following statements describe a valid test objective?",
	options: [
	  "To prove that there are no unfixed defects in the system under test",
	  "To prove that there will be no failures after the implementation of the system into production",
	  "To reduce the risk level of the test object and to build confidence in the quality level",
	  "To verify that there are no untested combinations of inputs",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 2,
	question: "Which of the following options shows an example of test activities that contribute to success?",
	options: [
		"Having testers involved during various software development lifecycle (SDLC) activities will help to detect defects in work products",		
		"Testers try not to disturb the developers while coding, so that the developers write better code",
		"Testers collaborating with end users help to improve the quality of defect reports during component integration and system testing",
		"Certified testers will design much better test cases than non-certified testers",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 3,
	question: "You have been assigned as a tester to a team producing a new system incrementally. You have noticed that no changes have been made to the existing regression test cases for several iterations and no new regression defects were identified. Your manager is happy, but you are not. Which testing principle explains your skepticism?",
	options: [
		"Tests wear out",
		"Absence-of-errors fallacy",
		"Defects cluster together",
		"Exhaustive testing is impossible",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 4,
	question: "You work in a team that develops a mobile application for food ordering. In the current iteration the team decided to implement the payment functionality. Which of the following activities is a part of test analysis?",
	options: [
		"Estimating that testing the integration with the payment service will take 8 person-days",
		"Deciding that the team should test if it is possible to properly share payment between many users",
		"Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing for the minimum allowed amount to be paid",
		"Analyzing the discrepancy between the actual result and expected result after executing a test case that checks the process of payment with a credit card, and reporting a defect",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 5,
	question: "Which of the following factors (i-v) have SIGNIFICANT influence on the test process?<br>i. The SDLC<br>ii. The number of defects detected in previous projects<br>iii. The identified product risks<br>iv. New regulatory requirements forcing<br>v. The number of certified testers in the organization",
	options: [
		"i, ii have significant influence; iii, iv, v have not",
		"i, iii, iv have significant influence; ii, v have not",
		"ii, iv, v have significant influence; i, iii have not",
		"iii, v have significant influence; i, ii, iv have not",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 6,
	question: "Which TWO of the following tasks belong MAINLY to a testing role?",
	options: [
		"Configure test environments",
		"Maintain the product backlog",
		"Design solutions to new requirements",
		"Create the test plan",
		"Report on achieved coverage",
	],
	number_of_answers: 2,
	points: 1,
},	
{
	id: 7,
	question: "Which of the following skills (i-v) are the MOST important skills of a tester?<br>i. Having domain knowledge<br>ii. Creating a product vision<br>iii. Being a good team player<br>iv. Planning and organizing the work of the team<br>v. Critical thinking",
	options: [
		"ii and iv are important; i, iii and v are not",
		"i, iii and v are important; ii and iv are not",
		"i, ii and v are important; iii and iv are not",
		"iii and iv are important; i, ii and v are not",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 8,
	question: "How is the whole team approach present in the interactions between testers and business representatives?",
	options: [
		"Business representatives decide on test automation approaches",
		"Testers help business representatives to define test strategy",
		"Business representatives are not part of the whole team approach",
		"Testers help business representatives to create suitable acceptance tests",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 9,
	question: "Consider the following rule: “for every SDLC activity there is a corresponding test activity”. In which SDLC models does this rule hold?",
	options: [
		"Only in sequential SDLC models",
		"Only in iterative SDLC models",
		"Only in iterative and incremental SDLC models",
		"In sequential, incremental, and iterative SDLC models",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 10,
	question: "Which of the following statements BEST describes the acceptance test-driven development (ATDD) approach?",
	options: [
		"In ATDD, acceptance criteria are typically created based on the given/when/then format",
		"In ATDD, test cases are mainly created at component testing and are code-oriented",
		"In ATDD, tests are created, based on acceptance criteria to drive the development of the related software",
		"in ATDD, tests are based on the desired behavior of the software, which makes it easier for team members to understand them",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 11,
	question: "Which of the following is NOT an example of the shift left approach?",
	options: [
		"Reviewing the user requirements before they are formally accepted by the stakeholders",
		"Writing a component test before the corresponding code is written",
		"Executing a performance efficiency test for a component during component testing",
		"Writing a test script before setting up the configuration management process",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 12,
	question: "Which of the arguments below would you use to convince your manager to organize retrospectives at the end of each release cycle?",
	options: [
		"Retrospectives are very popular these days and clients would appreciate it if we added them to our processes",
		"Organizing retrospectives will save the organization money because end user representatives do not provide immediate feedback about the product",
		"Process weaknesses identified during the retrospective can be analyzed and serve as a to do list for the organization’s continuous process improvement program",
		"Retrospectives embrace five values including courage and respect, which are crucial to maintain continuous improvement in the organization",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 13,
	question: "Which types of failures (1-4) fit which test levels (A-BEST?<br>1. Failures in system behavior as it deviates from the user’s business needs<br>2. Failures in communication between components<br>3. Failures in logic in a module<br>4. Failures in not correctly implemented business rules<br>A. Component testing<br>B. Component integration testing<br>C. System testing<br>D. Acceptance testing",
	options: [
		"1D, 2B, 3A, 4C",
		"1D, 2B, 3C, 4A",
		"1B, 2A, 3D, 4C",
		"1C, 2B, 3A, 4D",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 14,
	question: "You are testing a user story with three acceptance criteria: AC1, AC2 and AC3. AC1 is covered by test case TC1, AC2 by TC2, and AC3 by TC3. The test execution history had three test runs on three consecutive versions of the software as follows:<br><table><tr><th>Execution 1</th><th>Execution 2</th><th>Execution 3</th></tr><tr><td>TC1</td><td>(1) Failed</td><td>(4) Passed</td><td>(7) Passed</td></tr><tr><td>TC2</td><td>(2) Passed</td><td>(5) Failed</td><td>(8) Passed</td></tr><tr><td>TC3</td><td>(3) Failed</td><td>(6) Failed</td><td>(9) Passed</td></tr></table><br>Tests are repeated once you are informed that all defects found in the test run are corrected and a new version of the software is available.<br>Which of the above tests are executed as regression tests?",
	options: [
		"Only 4, 7, 8, 9",
		"Only 5, 7",
		"Only 4, 6, 8, 9",
		"Only 5, 6",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 15,
	question: "Which of the following is NOT a benefit of static testing?",
	options: [
		"Having less expensive defect management due to the ease of detecting defects later in the SDLC",
		"Fixing defects found during static testing is generally much less expensive than fixing defects found during dynamic testing",
		"Finding coding defects that might not have been found by only performing dynamic testing",
		"Detecting gaps and inconsistencies in requirements",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 16,
	question: "Which of the following is a benefit of early and frequent feedback?",
	options: [
		"It improves the test process for future projects",
		"It forces customers to prioritize their requirements based on agreed risks",
		"It is the only way to measure the quality of changes",
		"It helps avoid requirements misunderstandings",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 17,
	question: "The reviews being used in your organization have the following attributes:<br>• There is the role of a scribe<br>• The main purpose is to evaluate quality<br>• The meeting is led by the author of the work product<br>• There is individual preparation<br>• A review report is produced<br>Which of the following review types is MOST likely being used?",
	options: [
		"Informal review",
		"Walkthrough",
		"Technical review",
		"Inspection",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 18,
	question: "Which of these statements is NOT a factor that contributes to successful reviews?",
	options: [
		"Participants should dedicate adequate time for the review",
		"Splitting large work products into small parts to make the required effort less intense",
		"Participants should avoid behaviors that might indicate boredom, exasperation, or hostility to other participants",
		"Failures found should be acknowledged, appreciated, and handled objectively",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 19,
	question: "Which of the following is a characteristic of experience-based test techniques?",
	options: [
		"Test cases are created based on detailed design information",
		"Items tested within the interface code section are used to measure coverage",
		"The techniques heavily rely on the tester’s knowledge of the software and the business domain",
		"The test cases are used to identify deviations from the requirements",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 20,
	question: "You are testing a simplified apartment search form which has only two search criteria:<br>• floor (with three possible options: ground floor; first floor; second or higher floor)<br>• garden type (with three possible options: no garden; small garden; large garden)<br>Only apartments on the ground floor may have gardens. The form has a built-in validation mechanism that will not allow you to use the search criteria which violate this rule.<br>Each test has two input values: floor and garden type. You want to apply equivalence partitioning (EP) to cover each floor and each garden type in your tests.<br>What is the minimal number of test cases to achieve 100% EP coverage?",
	options: [
		"3",
		"4",
		"5",
		"6",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 21,
	question: "You are testing a system that calculates the final course grade for a given student. The final grade is assigned based on the final result, according to the following rules:<br>• 0 – 50 points: failed<br>• 51 – 60 points: fair<br>• 61 – 70 points: satisfactory<br>• 71 – 80 points: good<br>• 81 – 90 points: very good<br>• 91 – 100 points: excellent<br>You have prepared the following set of test cases:<br><table><tr><th>Final result</th><th>Final grade</th></tr><tr><td>TC1</td><td>91</td><td>excellent</td></tr><tr><td>TC2</td><td>50</td><td>failed</td></tr><tr><td>TC3</td><td>81</td><td>very good</td></tr><tr><td>TC4</td><td>60</td><td>fair</td></tr><tr><td>TC5</td><td>70</td><td>satisfactory</td></tr><tr><td>TC6</td><td>80</td><td>good</td></tr></table><br>What is the 2-value Boundary Value Analysis (BVA) coverage for the final result that is achieved with the existing test cases?",
	options: [
		"50%",
		"60%",
		"33.3%",
		"100%",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 22,
	question: "Your favorite bicycle daily rental store has just introduced a new Customer Relationship Management system and asked you, one of their most loyal members, to test it.<br>The implemented features are as follows:<br>• Anyone can rent a bicycle, but members receive a 20% discount<br>• However, if the return deadline is missed, the discount is no longer available<br>• After 15 rentals, members get a gift: a T-Shirt<br>Decision table describing the implemented features looks as follows:<br><table><tr><th>Conditions</th><th>Actions</th></tr><tr><td>Being a member</td><td>T</td><td>T</td><td>T</td><td>T</td><td>F</td><td>F</td><td>F</td><td>F</td></tr><tr><td>Missed deadline</td><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td><td>F</td><td>T</td></tr><tr><td>15th rental</td><td>F</td><td>F</td><td>T</td><td>T</td><td>F</td><td>F</td><td>T</td><td>T</td></tr><tr><td>20% discount</td><td></td><td>X</td><td></td><td>X</td><td></td><td></td><td></td><td>X</td></tr><tr><td>Gift T-Shirt</td><td></td><td></td><td>X</td><td>X</td><td></td><td></td><td></td><td>X</td></tr></table><br>Based ONLY on the feature description of the Customer Relationship Management system, which of the above rules describes an impossible situation?",
	options: [
		"R4",
		"R2",
		"R6",
		"R8",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 23,
	question: "You test a system whose lifecycle is modeled by the state transition diagram shown below. The system starts in the INIT state and ends its operation in the OFF state.<br>What is the MINIMAL number of test cases to achieve valid transitions coverage?",
	options: [
		"4",
		"2",
		"7",
		"3",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 24,
	question: "Your test suite achieved 100% statement coverage. What is the consequence of this fact?",
	options: [
		"Each instruction in the code that contains a defect has been executed at least once",
		"Any test suite containing more test cases than your test suite will also achieve 100% statement coverage",
		"Each path in the code has been executed at least once",
		"Every combination of input values has been tested at least once",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 25,
	question: "Which of the following is NOT true for white-box testing?",
	options: [
		"During white-box testing the entire software implementation is considered",
		"White-box coverage metrics can help identify additional tests to increase code coverage",
		"White-box test techniques can be used in static testing",
		"White-box testing can help identify gaps in requirements implementation",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 26,
	question: "Which of the following BEST describes the concept behind error guessing?",
	options: [
		"Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers",
		"Error guessing involves using your personal experience of development and the errors you made as a developer",
		"Error guessing requires you to imagine that you are the user of the test object and to guess errors the user could make interacting with it",
		"Error guessing requires you to rapidly duplicate the development task to identify the sort of errors a developer might make",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 27,
	question: "In your project there has been a delay in the release of a brand-new application and test execution started late, but you have very detailed domain knowledge and good analytical skills. The full list of requirements has not yet been shared with the team, but management is asking for some test results to be presented.<br>Which test technique fits BEST in this situation?",
	options: [
		"Checklist-based testing",
		"Error guessing",
		"Exploratory testing",
		"Branch testing",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 28,
	question: "Which of the following BEST describes the way acceptance criteria can be documented?",
	options: [
		"Performing retrospectives to determine the actual needs of the stakeholders regarding a given user story",
		"Using the given/when/then format to describe an example test condition related to a given user story",
		"Using verbal communication to reduce the risk of misunderstanding the acceptance criteria by others",
		"Documenting risks related to a given user story in a test plan to facilitate the risk-based testing approach",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 29,
	question: "Consider the following user story:<br>As an Editor<br>I want to review content before it is published so that I can assure the grammar is correct and its acceptance criteria:<ul><li>AC1: The Editor can review the content before it is published</li><li>AC2: The Editor can edit the content before it is published</li><li>AC3: The Editor can reject the content before it is published</li></ul>Which of the following test cases is the BEST example of a test case that checks AC1?",
	options: [
		"The Editor can review the content before it is published",
		"The Editor can edit the content before it is published",
		"The Editor can reject the content before it is published",
		"The Editor can review the content after it is published",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 30,
	question: "How do testers add value to iteration and release planning?",
	options: [
		"Testers determine the priority of the user stories to be developed",
		"Testers focus only on the functional aspects of the system to be tested",
		"Testers participate in the detailed risk identification and risk assessment of user stories",
		"Testers guarantee the release of high-quality software through early test design during the release planning",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 31,
	question: "Which TWO of the following options are the exit criteria for testing a system?",
	options: [
		"Test environment readiness",
		"The ability to log in to the test object by the tester",
		"Estimated defect density is reached",
		"Requirements are translated into given/when/then format",
		"Regression tests are automated",
	],
	number_of_answers: 2,
	points: 1,
},
{
	id: 32,
	question: "Your team uses the three-point estimation technique to estimate the test effort for a new high-risk feature. The following estimates were made:<br>• most optimistic estimation: 2 person-hours<br>• most likely estimation: 11 person-hours<br>• most pessimistic estimation: 14 person-hours<br>What is the final estimate?",
	options: [
		"9 person-hours",
		"14 person-hours",
		"11 person-hours",
		"10 person-hours",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 33,
	question: "You are testing a mobile application that allows users to find a nearby restaurant based on the type of food they want to eat. Consider the following list of test cases, priorities (i.e., a smaller number means a higher priority), and dependencies:<br><table><tr><th>Test case number</th><th>Test condition covered</th><th>Priority</th><th>Logical dependency</th></tr><tr><td>TC 001</td><td>Select type of food</td><td>3</td><td>none</td></tr><tr><td>TC 002</td><td>Select restaurant</td><td>2</td><td>TC 001</td></tr><tr><td>TC 003</td><td>Get direction</td><td>1</td><td>TC 002</td></tr><tr><td>TC 004</td><td>Call restaurant</td><td>2</td><td>TC 002</td></tr><tr><td>TC 005</td><td>Make reservation</td><td>3</td><td>TC 002</td></tr></table><br>Which of the following test cases should be executed as the third one?",
	options: [
		"TC 003",
		"TC 005",
		"TC 002",
		"TC 001",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 34,
	question: "Consider the following test categories (1-4) and agile testing quadrants (A-D):<br>1. Usability testing<br>2. Component testing<br>3. Functional testing<br>4. Reliability testing<br>A. Agile testing quadrant Q1: technology facing, supporting the development team<br>B. Agile testing quadrant Q2: business facing, supporting the development team<br>C. Agile testing quadrant Q3: business facing, critique the product<br>D. Agile testing quadrant Q4: technology facing, critique the product<br>How do the following test categories map onto the agile testing quadrants?",
	options: [
		"1C, 2A, 3B, 4D",
		"1D, 2A, 3C, 4B",
		"1C, 2B, 3D, 4A",
		"1D, 2B, 3C, 4A",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 35,
	question: "During a risk analysis the following risk was identified and assessed:<br>• Risk: Response time is too long to generate a report<br>• Risk likelihood: medium; risk impact: high<br>• Response to risk:<br>o an independent test team performs performance testing during system testing<br>o a selected sample of end users performs alpha and beta acceptance testing before the release<br>What measure is proposed to be taken in response to this analyzed risk?",
	options: [
		"Risk acceptance",
		"Contingency plan",
		"Risk mitigation",
		"Risk transfer",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 36,
	question: "Which tool can be used by an agile team to show the amount of work that has been completed and the amount of total work remaining for a given iteration?",
	options: [
		"Acceptance criteria",
		"Defect report",
		"Test completion report",
		"Burndown chart",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 37,
	question: "You need to update one of the automated test scripts to be in line with a new requirement. Which process indicates that you create a new version of the test script in the test repository?",
	options: [
		"Traceability management",
		"Maintenance testing",
		"Configuration management",
		"Requirements engineering",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 38,
	question: "You received the following defect report from the developers stating that the anomaly described in this test report is not reproducible.<br>Application hangs up<br>2022-May-03 – John Doe – Rejected<br>The application hangs up after entering “Test input: $ä” in the Name field on the new user creation screen. Tried to log off, log in with test_admin01 account, same issue. Tried with other test admin accounts, same issue. No error message received; log (see attached) contains fatal error notification. Based on the test case TC-1305, the application should accept the provided input and create the user. Please fix with high priority, this feature is related to REQ-0012, which is a critical new business requirement.<br>What critical information is MISSING from this test report that would have been useful for the developers?",
	options: [
		"Expected result and actual result",
		"References and defect status",
		"Test environment and test item",
		"Priority and severity",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 39,
	question: "Which test activity does a data preparation tool support?",
	options: [
		"Test monitoring and control",
		"Test analysis and design",
		"Test implementation and execution",
		"Test completion",
	],
	number_of_answers: 1,
	points: 1,
},
{
	id: 40,
	question: "Which item correctly identifies a potential risk of performing test automation?",
	options: [
		"It may introduce unknown regressions in production",
		"Sufficient efforts to maintain testware may not be properly allocated",
		"Testing tools and associated testware may not be sufficiently relied upon",
		"It may reduce the time allocated for manual testing",
	],
	number_of_answers: 1,
	points: 1,
}
];