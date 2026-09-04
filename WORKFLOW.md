# AI Development Workflow

## Round 1: Vague Prompt

In the first round, the feature was developed using a short and vague prompt. The AI was only asked to create a settings form with validation. Because the requirements were not clearly specified, the implementation depended on the AI's assumptions about the project structure, validation behavior, and user experience.

## Round 2: Precise Prompt

In the second round, a detailed prompt was used. The prompt explained the required fields, validation rules, error messages, successful submission behavior, accessibility requirements, reuse of existing project patterns, and testing requirements. The AI was also instructed to inspect the project before making changes and to avoid modifying unrelated files.

## Comparison

The precise-prompt approach produced a more controlled implementation because the expected behavior was clearly defined. The vague approach was faster to start, but it required more manual checking because important requirements were not specified.

## Correctness

The second implementation is more reliable because it explicitly defines required fields, email validation, form submission behavior, and validation feedback. These requirements make it easier to check whether the feature works as expected.

## Accessibility

The precise prompt included accessibility requirements such as proper labels, clear validation messages, and keyboard-friendly controls. These details make the form easier to use for different users.

## Edge Cases

The second approach specifically considers empty fields, invalid email input, and valid form submission. These cases help verify that the form behaves correctly instead of only testing the normal case.

## Review Effort

The vague implementation required more attention during review because the expected behavior was not clearly defined. The precise implementation was easier to review because its requirements and expected behavior were stated beforehand.

## AI Mistakes

During review, the generated implementation should be checked carefully for incorrect validation, missing accessibility attributes, or unnecessary changes. Any actual issue found during review should be documented here rather than assuming that AI-generated code is always correct.

## Verification

The implementation was reviewed against the stated requirements and the relevant validation and submission behavior was checked. The final result should be accepted only after the relevant tests and checks pass.
