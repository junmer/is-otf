/**
 * @file test
 * @author junmer
 */

'use strict';
var assert = require('assert');
var fs = require('fs');
var isOtf = require('./');

it('should detect OTF from Empty', function () {
    assert(!isOtf());
});

it('should detect OTF from Empty Buffer', function () {
    assert(!isOtf(new Buffer('')));
});

it('should detect OTF from String', function () {
    assert(isOtf(
        fs.readFileSync('FontAwesome.otf').toString('binary')
    ));
});

it('should detect OTF from Buffer', function () {
    assert(isOtf(fs.readFileSync('FontAwesome.otf')));
});

it('should be false when detect TTF file', function () {
    assert(!isOtf(fs.readFileSync('fontawesome-webfont.ttf')));
});

it('should be false when detect other type file', function () {
    assert(!isOtf(fs.readFileSync('index.js')));
    assert(!isOtf(fs.readFileSync('package.json')));
});

