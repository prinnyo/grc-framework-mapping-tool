'use strict';

const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const { ROOT, readRepoFile, extractInlineAppScript } = require('./helpers');

describe('static HTML smoke / structure', () => {
  const indexHtml = readRepoFile('index.html');
  const redirectHtml = readRepoFile('grc_framework_mapping.html');

  it('index.html is a non-trivial HTML document with CtrlMap title and root mount', () => {
    assert.match(indexHtml.slice(0, 32), /<!DOCTYPE html>/i);
    assert.match(indexHtml, /<title>[^<]*CtrlMap/i);
    assert.match(indexHtml, /<div id="root"><\/div>/);
    assert.match(indexHtml, /ReactDOM\.createRoot\(document\.getElementById\("root"\)\)/);
    const size = fs.statSync(path.join(ROOT, 'index.html')).size;
    assert.ok(size > 100_000, `index.html unexpectedly small (${size} bytes)`);
    assert.ok(size < 2_000_000, `index.html unexpectedly large (${size} bytes)`);
  });

  it('loads pinned React + ExcelJS CDNs and does not load unused SheetJS', () => {
    assert.match(
      indexHtml,
      /cdnjs\.cloudflare\.com\/ajax\/libs\/react\/18\.3\.1\/umd\/react\.production\.min\.js/
    );
    assert.match(
      indexHtml,
      /cdnjs\.cloudflare\.com\/ajax\/libs\/react-dom\/18\.3\.1\/umd\/react-dom\.production\.min\.js/
    );
    assert.match(indexHtml, /cdn\.jsdelivr\.net\/npm\/exceljs@4\.4\.0\/dist\/exceljs\.min\.js/);
    assert.doesNotMatch(indexHtml, /xlsx\.full\.min\.js/i);
    assert.doesNotMatch(indexHtml, /sheetjs/i);
  });

  it('keeps assessment JSON backup UI and reverse-map disclaimer markers', () => {
    assert.match(indexHtml, /Export assessment JSON/);
    assert.match(indexHtml, /Import assessment JSON/);
    assert.match(indexHtml, /application\/json/);
    assert.match(indexHtml, /className:"map-disclaimer"/);
    assert.match(indexHtml, /Derived mappings — verify before audit reliance/);
  });

  it('persists assessment data under the expected localStorage keys', () => {
    for (const key of ['grc-scores', 'grc-evidence', 'grc-justifications', 'grc-theme', 'grc-v2']) {
      assert.match(indexHtml, new RegExp(key));
    }
  });

  it('inline app script is present and parses as JavaScript', () => {
    const src = extractInlineAppScript(indexHtml);
    assert.ok(src.length > 10_000, 'inline script looks truncated');
    assert.doesNotThrow(() => {
      // Syntax-only check; do not execute app logic here.
      new Function(src);
    });
  });

  it('legacy grc_framework_mapping.html is a redirect stub to index.html', () => {
    const size = fs.statSync(path.join(ROOT, 'grc_framework_mapping.html')).size;
    assert.ok(size < 2_000, `redirect stub unexpectedly large (${size} bytes)`);
    assert.match(redirectHtml, /url=\.\/index\.html/);
    assert.match(redirectHtml, /location\.replace\("\.\/index\.html"\)/);
    assert.doesNotMatch(redirectHtml, /var CONTROLS=/);
    assert.doesNotMatch(redirectHtml, /ReactDOM\.createRoot/);
  });

  it('LICENSE file is present and declares MIT', () => {
    const license = readRepoFile('LICENSE');
    assert.match(license, /MIT License/);
    assert.match(license, /Copyright \(c\) 2026/);
  });
});
