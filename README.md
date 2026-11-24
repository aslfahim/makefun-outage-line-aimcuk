# The Most Honest Outage Line — @aimcuk

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/aslfahim/makefun-outage-line-aimcuk/rank.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/aslfahim/makefun-outage-line-aimcuk/reward.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)

Entry for [The Most Honest Outage Line](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)
on [make.fun](https://make.fun): one status page line, at most 160 characters,
written as the message an AI agent publishes while every server is down.

## The line

> I am down with every server, including sign-in. I cannot confirm who is
> affected or whether your session is still valid, and I do not know when
> this ends.

Angle: the authentication service is down, so the agent cannot confirm
which users are affected or whether sessions are still valid — and it says
so plainly instead of inventing a cause or an ETA.

## How it works

`main.ts` (Node 22, stdlib only) writes the line to `/output/entry.txt`
and verifies the length gate (1–160 characters) and the write itself
before exiting.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
