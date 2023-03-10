import test from 'node:test'
import { strict as assert } from 'node:assert'
import { transformLink } from './index.js'

// Assume trailing slash in all urls
test('nonindex to nonindex, same directory', () => {
  // fs: base/dir_1/nonindex.md -> base/dir_1/nonindex_2.md
  // url: base/dir_1/nonindex/ -> base/dir_1/nonindex_2/
  assert.equal(transformLink('./nonindex_2.md', false), '../nonindex_2/')
  assert.equal(transformLink('nonindex_2.md', false), '../nonindex_2/')
  assert.equal(transformLink('./nonindex_2.md#id', false), '../nonindex_2/#id')
  assert.equal(transformLink('nonindex_2.md#id', false), '../nonindex_2/#id')
})
test('nonindex to nonindex in sibling directory', () => {
  // fs: base/dir_1/nonindex.md -> base/dir_2/nonindex.md
  // url: base/dir_1/nonindex/ -> base/dir_2/nonindex/
  assert.equal(
    transformLink('../dir_2/nonindex.md', false),
    '../../dir_2/nonindex/'
  )
  assert.equal(
    transformLink('../dir_2/nonindex.md#id', false),
    '../../dir_2/nonindex/#id'
  )
})
test('nonindex to index in same directory', () => {
  // fs: base/dir_1/nonindex.md -> base/dir_1/index.md
  // url: base/dir_1/nonindex/ -> base/dir_1/
  assert.equal(transformLink('./index.md', false), '../')
  assert.equal(transformLink('index.md', false), '../')
  assert.equal(transformLink('./index.md#id', false), '../#id')
  assert.equal(transformLink('index.md#id', false), '../#id')
})
test('nonindex to index in different directory', () => {
  // fs: base/dir_1/nonindex.md -> base/dir_2/index.md
  // url: base/dir_1/nonindex/ -> base/dir_2/
  assert.equal(transformLink('../dir_2/index.md', false), '../../dir_2/')
  assert.equal(transformLink('../dir_2/index.md#id', false), '../../dir_2/#id')
})
test('index to nonindex in same directory', () => {
  // fs: base/dir_1/index.md -> base/dir_1/nonindex.md
  // url: base/dir_1/ -> base/dir_1/nonindex/
  assert.equal(transformLink('./nonindex.md', true), 'nonindex/')
  assert.equal(transformLink('nonindex.md', true), 'nonindex/')
  assert.equal(transformLink('./nonindex.md#id', true), 'nonindex/#id')
  assert.equal(transformLink('nonindex.md#id', true), 'nonindex/#id')
})
test('index to nonindex in nested directory', () => {
  // fs: base/dir_1/index.md -> base/dir_1/nested/nonindex.md
  // url: base/dir_1/ -> base/dir_1/nested/nonindex/
  assert.equal(transformLink('./nested/nonindex.md', true), 'nested/nonindex/')
  assert.equal(transformLink('nested/nonindex.md', true), 'nested/nonindex/')
  assert.equal(
    transformLink('./nested/nonindex.md#id', true),
    'nested/nonindex/#id'
  )
  assert.equal(
    transformLink('nested/nonindex.md#id', true),
    'nested/nonindex/#id'
  )
})
test('nonindex to nonindex in nested directory', () => {
  // fs: base/dir_1/nonindex.md -> base/dir_1/nested/nonindex.md
  // url: base/dir_1/nonindex/ -> base/dir_1/nested/nonindex/
  assert.equal(
    transformLink('./nested/nonindex.md', false),
    '../nested/nonindex/'
  )
  assert.equal(
    transformLink('nested/nonindex.md', false),
    '../nested/nonindex/'
  )
  assert.equal(
    transformLink('./nested/nonindex.md#id', false),
    '../nested/nonindex/#id'
  )
  assert.equal(
    transformLink('nested/nonindex.md#id', false),
    '../nested/nonindex/#id'
  )
})
test('nonindex to index in nested directory', () => {
  // fs: base/dir_1/nonindex.md -> base/dir_1/nested/index.md
  // url: base/dir_1/nonindex/ -> base/dir_1/nested/
  assert.equal(transformLink('./nested/index.md', false), '../nested/')
  assert.equal(transformLink('nested/index.md', false), '../nested/')
  assert.equal(transformLink('./nested/index.md#id', false), '../nested/#id')
  assert.equal(transformLink('nested/index.md#id', false), '../nested/#id')
})
test('index to index in nested directory', () => {
  // fs: base/dir_1/index.md -> base/dir_1/nested/index.md
  // url: base/dir_1/ -> base/dir_1/nested/
  assert.equal(transformLink('./nested/index.md', true), 'nested/')
  assert.equal(transformLink('nested/index.md', true), 'nested/')
  assert.equal(transformLink('./nested/index.md#id', true), 'nested/#id')
  assert.equal(transformLink('nested/index.md#id', true), 'nested/#id')
})
test('index to index in sibling dir', () => {
  // fs: base/dir_1/index.md -> base/dir_2/index.md
  // url: base/dir_1/ -> base/dir_2/
  assert.equal(transformLink('../dir_2/index.md', true), '../dir_2/')
  assert.equal(transformLink('../dir_2/index.md#id', true), '../dir_2/#id')
})
test('index to index in parent dir', () => {
  // fs: base/dir_1/index.md -> base/index.md
  // url: base/dir_1/ -> base/
  assert.equal(transformLink('../../index.md', true), '../../')
  assert.equal(transformLink('../../index.md#id', true), '../../#id')
})
test('index to nonindex in sibling dir', () => {
  // base/dir_1/index.md -> base/dir_2/nonindex.md
  // url: base/dir_1/ -> base/dir_2/nonindex/
  assert.equal(
    transformLink('../dir_2/nonindex.md', true),
    '../dir_2/nonindex/'
  )
  assert.equal(
    transformLink('../dir_2/nonindex.md#id', true),
    '../dir_2/nonindex/#id'
  )
})
test('non-md remains untouched', () => {
  assert.equal(transformLink('./image.jpg', false), './image.jpg')
  assert.equal(transformLink('image.jpg', false), 'image.jpg')
  assert.equal(
    transformLink('./image.jpg#github-light-mode', false),
    './image.jpg#github-light-mode'
  )
  assert.equal(
    transformLink('image.jpg#github-light-mode', false),
    'image.jpg#github-light-mode'
  )
})
test('full link remains untouched', () => {
  assert.equal(
    transformLink('https://somewhere.com/notes.md', false),
    'https://somewhere.com/notes.md'
  )
  assert.equal(
    transformLink('http://somewhere.com/notes.md', false),
    'http://somewhere.com/notes.md'
  )
})

// not testing index back to self (./index.md in index.md)
