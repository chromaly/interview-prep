# Interview Prep Bot 

Current Implementation

You can paste an interview email into the web app to classify it, and if the AI nova lite 1.0 model determines its confirmed already, it extracts the company, role, and confirmed interview time if present.

The current demo accepts pasted emails, then React sends the text to the API Gateway, which invokes Python Lambda in `us-east-2`. Lambda then calls Amazon Bedrock using Nova-Lite 1.0 to classify the email and return the result to the page.

# Run the frontend locally

From the repo root:

```bash
cd frontend
npm install
```

Create `frontend/.env.local` and paste the team API endpoint to the VITE_API_URL posted in the doc I sent to the slack

Start the app:

```bash
npm run dev
```

Open the URL from the terminal, paste the `body` text from one of the JSON files in `test-events/` or hopefully one of your own interview emails and click **Submit here**

| Sample | Expected result |
| --- | --- |
| `confirmed-invite.json` | `confirmed_interview` with an interview time |
| `needs-confirmation.json` | `needs_confirmation` with `startsAt: null` |
| `not-interview.json` | `not_interview` with `startsAt: null` |

You can also paste the entire sample JSON into the AWS Lambda **Test** tab
to invoke `interview-invite-demo` directly.

## Next tasks

- Save confirmed interviews and show them in an upcoming-interviews list.
- Send reminders based on the confirmed interview time/create an email to be sent periodically and at the start of each day that contains these reminders
- Generate an interview prep digest.
- Add team sign-in and connect a test Gmail inbox
- Add proper frontend website that handles user configurations and maybe another way to display reminders and upcoming interview timeslots
