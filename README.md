# Interview scanner Lambda demo

Run `python3 lambda_function.py sample-invite.json` from this directory.
The response should contain `confirmed_interview`, Example Labs, and
`2026-12-03T14:00:00-08:00`.

## Run on Lambda

Select the AWS account and region for the demo. In Lambda, create a function
named `interview-invite-demo` using a Python 3 runtime and a basic Lambda
execution role. Upload `interview-lambda-demo.zip` as the function code and
set the handler to `lambda_function.lambda_handler`. In the Test tab, paste
the contents of `sample-invite.json` into a test event and invoke the function.

The handler returns a fixed response for the bundled fake invite. This
checks that deployment, invocation, and the response format work. The next
implementation step is to replace the sample match with a Bedrock classifier
that accepts the same subject and body.
