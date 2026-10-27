'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');

function readRepoFile(rel) {
  return fs.readFileSync(path.join(ROOT, rel), 'utf8');
}

function extractInlineAppScript(html) {
  const match = html.match(/<script>([\s\S]*)<\/script>\s*<\/body>/i);
  if (!match) {
    throw new Error('Could not find the main inline <script> before </body>');
  }
  return match[1];
}

/**
 * Evaluate the monolith's inline app script with DOM/React/ExcelJS stubs.
 * Returns the sandbox so tests can inspect CONTROLS, FRAMEWORKS, etc.
 */
function loadAppData(html) {
  const src = extractInlineAppScript(html);
  const localStorage = {
    _data: Object.create(null),
    getItem(k) {
      return Object.prototype.hasOwnProperty.call(this._data, k) ? this._data[k] : null;
    },
    setItem(k, v) {
      this._data[k] = String(v);
    },
    removeItem(k) {
      delete this._data[k];
    },
  };

  const document = {
    documentElement: { setAttribute() {} },
    getElementById() {
      return {};
    },
    createElement() {
      return {};
    },
  };

  const window = {
    matchMedia() {
      return { matches: false };
    },
    localStorage,
  };

  const React = {
    createElement() {
      return null;
    },
    useState(init) {
      const v = typeof init === 'function' ? init() : init;
      return [v, function () {}];
    },
    useMemo(fn) {
      return fn();
    },
    useCallback(fn) {
      return fn;
    },
    useEffect() {},
  };

  const ReactDOM = {
    createRoot() {
      return { render() {} };
    },
  };

  class ExcelJS {
    constructor() {
      this.creator = '';
      this.created = null;
    }
    addWorksheet() {
      return {
        addRow() {},
        getRow() {
          return { getCell() { return {}; }, eachCell() {} };
        },
        columns: [],
        views: [],
      };
    }
    get xlsx() {
      return { writeBuffer: async () => Buffer.alloc(0) };
    }
  }

  const sandbox = {
    console,
    React,
    ReactDOM,
    ExcelJS,
    document,
    window,
    localStorage,
    setTimeout,
    clearTimeout,
    Blob: class Blob {},
    URL: { createObjectURL() { return 'blob:stub'; }, revokeObjectURL() {} },
    FileReader: class FileReader {},
    navigator: {},
    location: { href: 'http://localhost/', replace() {} },
  };
  sandbox.window.document = document;
  sandbox.window.React = React;
  sandbox.window.ReactDOM = ReactDOM;
  sandbox.window.ExcelJS = ExcelJS;
  sandbox.globalThis = sandbox;

  vm.runInNewContext(src, sandbox, { timeout: 10000, filename: 'index.html#script' });
  return sandbox;
}

module.exports = {
  ROOT,
  readRepoFile,
  extractInlineAppScript,
  loadAppData,
};
