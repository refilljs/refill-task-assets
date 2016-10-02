# Refill task assets

Assets task in [Refill](https://github.com/refilljs/refill) format

[<img alt="Made by Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/madeBy.svg" width="200">](http://zaklinaczekodu.com)

[Facebook](https://www.facebook.com/zaklinaczekodu)

Shields
-------

[![npm](https://img.shields.io/npm/v/refill-task-assets.svg?style=flat-square)](https://www.npmjs.com/package/refill-task-assets)
[![npm](https://img.shields.io/npm/l/refill-task-assets.svg?style=flat-square)](https://www.npmjs.com/package/refill-task-assets)
[![npm](https://img.shields.io/npm/dm/refill-task-assets.svg?style=flat-square)](https://www.npmjs.com/package/refill-task-assets)
[![Travis](https://img.shields.io/travis/refilljs/refill-task-assets/master.svg?style=flat-square)](https://travis-ci.org/refilljs/refill-task-assets)<br>
[![bitHound Overall Score](https://www.bithound.io/github/refilljs/refill-task-assets/badges/score.svg)](https://www.bithound.io/github/refilljs/refill-task-assets)
[![bitHound Dependencies](https://www.bithound.io/github/refilljs/refill-task-assets/badges/dependencies.svg)](https://www.bithound.io/github/refilljs/refill-task-assets/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/refilljs/refill-task-assets/badges/devDependencies.svg)](https://www.bithound.io/github/refilljs/refill-task-assets/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/refilljs/refill-task-assets/badges/code.svg)](https://www.bithound.io/github/refilljs/refill-task-assets)<br>
[![GitHub forks](https://img.shields.io/github/forks/refilljs/refill-task-assets.svg?style=flat-square)](https://github.com/refilljs/refill-task-assets)
[![GitHub stars](https://img.shields.io/github/stars/refilljs/refill-task-assets.svg?style=flat-square)](https://github.com/refilljs/refill-task-assets)
[![GitHub followers](https://img.shields.io/github/followers/refilljs.svg?style=flat-square)](https://github.com/refilljs/refill-task-assets)

Installation
------------

```bash
npm install --save refill-task-assets refill gulp
```

Usage
-----

gulpfile.js

```javaScript
require('refill')({
  'assets': {
    task: require('refill-task-assets')
  }
}, require('gulp'), mode)
```

### mode

Mode object. Determines task mode of operation.

```javaScript
{
  // If watch is true rerun assets on any js file changes. Do not stop on errors.
  // If watch is false run only once and stop on any errors
  watch: true
  // If it is set to dev do not minify images
  env: dev
}
```

Default options
---------------

```javaScript
{
  globs: 'src/**/_assets/**',
  globsOptions: {
    base: './'
  },
  imagemin: undefined
}
```

Changelog
---------

[Changelog at github](https://github.com/refilljs/refill-task-assets/releases)

Sponsors
--------

[<img alt="Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/logo.svg" width="200">](http://zaklinaczekodu.com)
