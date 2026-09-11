# AXTL Documentation Instructions

This repository contains public AXTL documentation built with Mintlify. Pages
are MDX with YAML frontmatter; `docs.json` owns navigation and site configuration.
Use [README.md](README.md) for local preview setup.

## Product language and claims

- Describe AXTL as a human-approved, spec-first backend engineering control
  plane. Lead with business-logic fit, inspectable code, validation evidence,
  and user ownership.
- Distinguish the AXTL platform from separately deployed generated ALMS runtimes.
  Describe implemented behavior from current platform code and product docs;
  verify live availability separately before making a live-state claim.
- Use Axga-branded customer model labels. Do not publish provider keys, raw
  internal model identifiers, credentials, or internal-only operations details.
- Keep current features and future plans distinct. Do not invent capabilities,
  deployment URLs, validation results, or customer evidence.

## Editing and verification

- Read the affected page and relevant navigation. Consult Mintlify documentation
  or an available skill when component or configuration behavior needs it; an
  ordinary content edit does not require installing a skill or configuring MCP.
- Use active voice, second person, concise sentences, and sentence case headings.
  Bold UI labels and use code formatting for commands, paths, and code references.
- Check links, navigation, frontmatter, and code examples affected by the change.
  Use `mint dev` from this repository for visual or configuration changes. An
  instruction-only edit needs content and link checks, not a site preview.
- `axtl-docs` is an overlapping sibling. Check the connected repository/branch
  in Mintlify or GitHub deployment evidence before changing deployment claims.
  Mirror only when the task and the sibling's ownership require it; a local
  instruction change does not itself require copying this file there.
- Keep changes local unless publishing is authorized. Finish the requested edit
  and relevant checks, then report the result and any unverified claims.
