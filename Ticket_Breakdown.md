# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1 - Implement functionality to save custom id for each agent

Acceptance criteria: Custom Id must be validated to be easy-to-recall strings or numbers. Saving custom id for an agent should be possible with a single API request and process should not mutate the internal database id of the said agent.
Time/effort estimates: 1-2 hours
Implementation details: As this is essentially a CRUD application, a standalone REST endpoint can be created with the PUT HTTPS protocol to allow saving a custom agent id to the agent table by taking the custom id as payload with requisite implementation business logic in endpoint function declaration.

### Ticket 2 - Implement functionality to use custom id when generating reports

Acceptance Criteria: If custom id is not supplied for an agent, functionality should allow use of internal database id for the said agent as default when report is generated. However, if custom id is already supplied, use custom id in generated report. Lastly, generated report should never contain a NULL value for agent id.
Time/effort estimates: 2-3 hours
Implementation details: Refactor the `generateReports` function to use the custom agent id from the agent table in lieu of the internal database id in sanitized generated report. Ensure to address edge cases where custom id isn't supplied by using the internal database id as default to avoid nulled id values.

### Ticket 3 - Implement and ensure full-working functionality of UI elements which would allow Facilities supply custom agent ids

Acceptance criteria: Custom id should be saved on entering the custom id for each agent and hitting the submit button.
Time/effort estimates: 1-2 hours
Implementation details: The UI should be extended to include elements which allows facilities pass in desired custom id for each agent and save at the click of a button. PUT API endpoint created in ticket #1 should be triggered on hitting the submit button
