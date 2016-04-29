# ZKflow task assets

Assets task in [ZKflow](https://github.com/zaklinaczekodu/zkflow) format

[<img alt="Made by Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/madeBy.svg" width="200">](http://zaklinaczekodu.com)

[Facebook](https://www.facebook.com/zaklinaczekodu)

Shields
-------

[![npm](https://img.shields.io/npm/v/zkflow-task-assets.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-task-assets)
[![npm](https://img.shields.io/npm/l/zkflow-task-assets.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-task-assets)
[![npm](https://img.shields.io/npm/dm/zkflow-task-assets.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-task-assets)
[![Travis](https://img.shields.io/travis/zaklinaczekodu/zkflow-task-assets/master.svg?style=flat-square)](https://travis-ci.org/zaklinaczekodu/zkflow-task-assets)<br>
[![bitHound Overall Score](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-assets/badges/score.svg)](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-assets)
[![bitHound Dependencies](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-assets/badges/dependencies.svg)](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-assets/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-assets/badges/devDependencies.svg)](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-assets/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-assets/badges/code.svg)](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-assets)<br>
[![GitHub forks](https://img.shields.io/github/forks/zaklinaczekodu/zkflow-task-assets.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-task-assets)
[![GitHub stars](https://img.shields.io/github/stars/zaklinaczekodu/zkflow-task-assets.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-task-assets)
[![GitHub followers](https://img.shields.io/github/followers/zaklinaczekodu.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-task-assets)

Installation
------------

```bash
npm install --save zkflow-task-assets zkflow gulp
```

Usage
-----

gulpfile.js

```javaScript
require('zkflow')({
  'assets': {
    task: require('zkflow-task-assets')
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

Sponsors
--------

[<img alt="Street Team" src="http://zaklinaczekodu.com/_assets/streetteam.svg" width="200">](http://getstreetteam.com)

[<img alt="Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/logo.svg" width="200">](http://zaklinaczekodu.com)
