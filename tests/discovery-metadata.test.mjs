import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";
import { fileURLToPath } from "node:url";

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const configPath = new URL("../docs.json", import.meta.url);
const indexPath = new URL("../index.mdx", import.meta.url);

const configSource = readFileSync(configPath, "utf8");
const config = JSON.parse(configSource);
const indexSource = readFileSync(indexPath, "utf8");

const expectedDescription =
  "AXTL by Axtra Intellion is a spec-first control plane that turns business requirements into reviewable AI-agent backends teams can inspect, validate, deploy, or download.";

test("publishes the canonical Axtra Intellion entity contract", () => {
  assert.equal(config.name, "Axtra Intellion");
  assert.equal(config.description, expectedDescription);
  assert.equal(config.seo?.metatags?.canonical, "https://docs.axtl.dev");
  assert.deepEqual(config.seo?.organization, {
    id: "https://axtl.dev/#organization",
    name: "Axtra Intellion",
    url: "https://axtl.dev/",
    logo: "https://docs.axtl.dev/logo/light.svg",
    sameAs: ["https://github.com/AxtraIntellion"],
  });
  assert.equal("legalName" in config.seo.organization, false);
});

test("keeps the AXTL documentation title distinct from the provider name", () => {
  const pageTitle = indexSource.match(/^title:\s*["']([^"']+)["']\s*$/m)?.[1];

  assert.equal(pageTitle, "AXTL Docs");
  assert.notEqual(pageTitle, config.name);
  assert.equal(`${pageTitle} - ${config.name}`, "AXTL Docs - Axtra Intellion");
});

test("uses only canonical public origins and a repository-backed logo", () => {
  assert.doesNotMatch(configSource, /\.mintlify\.app\b/i);
  assert.doesNotMatch(configSource, /localhost|127\.0\.0\.1/i);

  const logo = config.seo?.organization?.logo;
  assert.equal(logo, "https://docs.axtl.dev/logo/light.svg");

  const logoPath = new URL(logo).pathname.replace(/^\//, "");
  assert.equal(logoPath, "logo/light.svg");
  assert.equal(existsSync(`${repositoryRoot}${logoPath}`), true);
});
