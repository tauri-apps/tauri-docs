/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

const translate = require('../../server/translate.js').translate

class Book extends React.Component {
  render() {

    return (
      <div className="docMainWrapper wrapper">

      </div>
    )
  }
}

Book.defaultProps = {
  language: 'en',
}

module.exports = Book
