'use strict';

const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { readRepoFile, loadAppData } = require('./helpers');

const EXPECTED_FRAMEWORKS = [
  'ISO 27001',
  'NIST CSF 2.0',
  'SOC 2',
  'CIS v8',
  'PCI DSS',
  'Cyber Essentials',
  'NIST 800-53',
  'NIS 2',
  'ISO 22301',
  'ISO 27017',
  'NCSC CAF',
];

describe('embedded catalog integrity', () => {
  const html = readRepoFile('index.html');
  const app = loadAppData(html);

  it('exposes CONTROLS with 118 unique ISO 27001 entries (93 Annex A + 25 clauses)', () => {
    assert.ok(Array.isArray(app.CONTROLS), 'CONTROLS missing after script eval');
    assert.equal(app.CONTROLS.length, 118);

    const annexA = app.CONTROLS.filter((c) => c.cat !== 'Management System');
    const clauses = app.CONTROLS.filter((c) => c.cat === 'Management System');
    assert.equal(annexA.length, 93);
    assert.equal(clauses.length, 25);

    const ids = app.CONTROLS.map((c) => c.id);
    assert.equal(new Set(ids).size, 118, 'duplicate control ids');

    for (const c of app.CONTROLS) {
      assert.equal(typeof c.id, 'string');
      assert.ok(c.id.length > 0, 'empty control id');
      assert.equal(typeof c.name, 'string');
      assert.ok(c.name.length > 0, `empty name for ${c.id}`);
      assert.equal(typeof c.isoDesc, 'string');
      assert.ok(c.isoDesc.length > 0, `empty isoDesc for ${c.id}`);
      assert.equal(typeof c.cat, 'string');
    }

    assert.ok(annexA.every((c) => /^A\.\d+\.\d+$/.test(c.id)), 'Annex A ids should look like A.x.y');
    // Clause 6.1.3(d) is a named sub-requirement in the catalog.
    assert.ok(
      clauses.every((c) => /^\d+(\.\d+)+(\([a-z]\))?$/.test(c.id)),
      'clause ids should be dotted numbers (optional letter suffix)'
    );
  });

  it('registers all 11 frameworks with expected ids and hierarchy props', () => {
    assert.ok(Array.isArray(app.FRAMEWORKS), 'FRAMEWORKS missing after script eval');
    assert.equal(app.FRAMEWORKS.length, 11);
    // Copy out of the vm realm so deepEqual compares same-realm arrays.
    const frameworkIds = Array.from(app.FRAMEWORKS, (f) => String(f.id));
    assert.deepEqual(frameworkIds, EXPECTED_FRAMEWORKS);

    for (const fw of app.FRAMEWORKS) {
      assert.equal(typeof fw.prop, 'string');
      assert.ok(fw.prop.length > 0, `${fw.id} missing prop`);
      assert.equal(typeof fw.color, 'string');
      assert.ok(fw.desc && typeof fw.desc === 'object', `${fw.id} missing desc map`);
      if (fw.id !== 'ISO 27001') {
        assert.ok(fw.hier, `${fw.id} missing hierarchy`);
      }
    }
  });

  it('builds ISO_DESC for every control id', () => {
    assert.ok(app.ISO_DESC && typeof app.ISO_DESC === 'object');
    for (const c of app.CONTROLS) {
      assert.equal(typeof app.ISO_DESC[c.id], 'string');
      assert.ok(app.ISO_DESC[c.id].includes(c.name));
    }
  });
});
