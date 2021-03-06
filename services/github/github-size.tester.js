'use strict'

const { isFileSize } = require('../test-validators')
const t = (module.exports = require('../tester').createServiceTester())

t.create('File size')
  .get('/webcaetano/craft/build/phaser-craft.min.js.json')
  .expectBadge({ label: 'size', message: isFileSize })

t.create('File size 404')
  .get('/webcaetano/craft/build/does-not-exist.min.js.json')
  .expectBadge({ label: 'size', message: 'repo or file not found' })

t.create('File size for "not a regular file"')
  .get('/webcaetano/craft/build.json')
  .expectBadge({ label: 'size', message: 'not a regular file' })
