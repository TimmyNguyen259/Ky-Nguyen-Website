---
title: "Building the tool myself is how I test whether I understand the problem."
pillar: "Building with AI"
tension: "A requirements list can describe a pain without understanding it — a working version cannot."
date: 2026-10-12
status: published
pageTitle: "Building the tool myself"
description: "Notes on Solace and Voice-Lab: why I build tools myself, and why each one needs a hypothesis specific enough to be wrong."
pattern: "Pain → Hypothesis → Artifact"
---

A requirements list can describe a pain without understanding it. A working version cannot. Solace is built around that kind of pain. Recruiters spend most of their day inside sourcing tools and spreadsheets that never talk to each other. Every switch costs a callback, a note, a candidate. The pain is not dramatic. It is small, constant and easy to normalize, which is why I think it so rarely reaches a requirements list in a form anyone can build against.

Written as a requirement, it becomes “better integration” or “one view of the candidate”. Both are true and neither is buildable. Building the tool myself removes that escape. A working screen forces the choices a document can defer: where the recruiter is when the work happens, what has to travel with a candidate across a switch and what can be left behind. If I only write the brief, those questions still get answered — later, by whoever is closest to the code rather than whoever is closest to the pain.

**The hypothesis has to be specific enough to be wrong.** For Solace it is this: a recruiter-first ATS that treats sourcing as a first-class surface — with LinkedIn and ITviec integration where the work actually happens — beats a general-purpose CRM retrofitted for hiring. If the hypothesis fails, it should fail visibly: recruiters would still be switching between tools. Solace is still in progress. I do not yet know whether the hypothesis holds, and I would rather say so than claim a result I do not have.

**A working version is the standard, not the reward.** Voice-Lab, a pronunciation-practice app I built with AI-assisted coding, started from a different pain. Reasoning improves faster when it is spoken and reviewed than when it is only written and filed, and most tools default to text-first. Voice-Lab is small and it is shipped, published through Render and GitHub. A small, working web application beats a slide about one — that is the standard I hold myself to, because a slide can describe a workflow no one has had to use.

**The tool is an expression. The judgment behind it is the work.** I do not build by default. I build when a repeat problem is cheaper to design around than to keep patching. I ran a “Claude Fundamentals” workshop for practical use in HR workflows, and I think the skill that matters there is the same one a build demands: stating the pain and the hypothesis precisely enough that a working version could follow. I do not expect every HR team to build an ATS. I do think the people closest to a repeat problem should be able to do that much — whether they then build it themselves or hand it to an engineer.

AI-assisted coding can make the build cheaper. It does not make the problem clearer. That part is still the job.

> Build the smallest version that could prove the hypothesis wrong.
