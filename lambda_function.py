"""Direct-invocation demo for the interview scanner."""
import json
import sys

SAMPLE_INVITE = {
    "subject": "Interview confirmed",
    "body": "Example Labs confirmed your Software Engineering Intern interview "
            "for December 3, 2026 at 2 p.m. Pacific.",
}


def lambda_handler(event, context):
    if not isinstance(event, dict) or any(
        not isinstance(event.get(key), str) or not event[key].strip()
        for key in ("subject", "body")
    ):
        raise ValueError("Provide a non-empty subject and body.")

    if any(event[key] != value for key, value in SAMPLE_INVITE.items()):
        raise ValueError("This demo only accepts the included sample invite.")

    return {
        "status": "confirmed_interview",
        "company": "Example Labs",
        "role": "Software Engineering Intern",
        "startsAt": "2026-12-03T14:00:00-08:00",
    }


if __name__ == "__main__":
    with open(sys.argv[1], encoding="utf-8") as event_file:
        print(json.dumps(lambda_handler(json.load(event_file), None), indent=2))
