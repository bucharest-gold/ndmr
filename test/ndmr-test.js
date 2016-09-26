/**
 * Copyright 2016 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const test = require('tape');
const BooleanValue = require('../lib/BooleanValue');
const DataOutput = require('../lib/DataOutput');

test('Should test BooleanValue.', t => {
  let value = { ModelType: false, value: false };
  t.deepEqual(new BooleanValue(false), value);
  t.end();
});

test('Should test DataOutput.', t => {
  let dout = new DataOutput();
  let bytes = { bytes: [] };
  t.deepEqual(dout, bytes);

  dout.writeUtf('abc');
  bytes = { bytes: [ {}, [ 97, 98, 99 ] ] };
  t.deepEqual(dout, bytes);
  t.end();
});
