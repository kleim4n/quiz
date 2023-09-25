var questions = [
    {
      id: 1,
      question:
        "Which of the following statements describe a valid test objective?",
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
      question:
        "Which of the following options shows an example of test activities that contribute to success?",
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
      question:
        "You have been assigned as a tester to a team producing a new system incrementally. You have noticed that no changes have been made to the existing regression test cases for several iterations and no new regression defects were identified. Your manager is happy, but you are not. Which testing principle explains your skepticism?",
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
      question:
        "You work in a team that develops a mobile application for food ordering. In the current iteration the team decided to implement the payment functionality. Which of the following activities is a part of test analysis?",
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
      question:
        "Which of the following factors (i-v) have SIGNIFICANT influence on the test process?<br>i. The SDLC<br>ii. The number of defects detected in previous projects<br>iii. The identified product risks<br>iv. New regulatory requirements forcing<br>v. The number of certified testers in the organization",
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
      question:
        "Which TWO of the following tasks belong MAINLY to a testing role?",
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
      question:
        "Which of the following skills (i-v) are the MOST important skills of a tester?<br>i. Having domain knowledge<br>ii. Creating a product vision<br>iii. Being a good team player<br>iv. Planning and organizing the work of the team<br>v. Critical thinking",
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
      question:
        "How is the whole team approach present in the interactions between testers and business representatives?",
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
      question:
        "Consider the following rule: “for every SDLC activity there is a corresponding test activity”. In which SDLC models does this rule hold?",
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
      question:
        "Which of the following statements BEST describes the acceptance test-driven development (ATDD) approach?",
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
      question:
        "Which of the following is NOT an example of the shift left approach?",
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
      question:
        "Which of the arguments below would you use to convince your manager to organize retrospectives at the end of each release cycle?",
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
      question:
        "Which types of failures (1-4) fit which test levels (A-D) BEST?<br>1. Failures in system behavior as it deviates from the user’s business needs<br>2. Failures in communication between components<br>3. Failures in logic in a module<br>4. Failures in not correctly implemented business rules<br>A. Component testing<br>B. Component integration testing<br>C. System testing<br>D. Acceptance testing",
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
      question:
        "You are testing a user story with three acceptance criteria: AC1, AC2 and AC3. AC1 is covered by test case TC1, AC2 by TC2, and AC3 by TC3. The test execution history had three test runs on three consecutive versions of the software as follows:<br><table><tr><th></th><th>Execution 1</th><th>Execution 2</th><th>Execution 3</th></tr><tr><td>TC1</td><td>(1) Failed</td><td>(4) Passed</td><td>(7) Passed</td></tr><tr><td>TC2</td><td>(2) Passed</td><td>(5) Failed</td><td>(8) Passed</td></tr><tr><td>TC3</td><td>(3) Failed</td><td>(6) Failed</td><td>(9) Passed</td></tr></table><br>Tests are repeated once you are informed that all defects found in the test run are corrected and a new version of the software is available.<br>Which of the above tests are executed as regression tests?",
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
      question:
        "Which of the following is NOT a benefit of static testing?",
      options: [
        "Having less expensive defect management due to the ease of detecting defects later in the SDLC",
        "Fixing defects found during static testing is generally much less expensive than fixing defects found during dynamic testing",
        "Finding coding defects that might not have been found by only performing dynamic testing",
        "Detecting gaps and inconsistencies in requirements",
      ],
      number_of_answers: 1,
      points: 1,
    },
  ];