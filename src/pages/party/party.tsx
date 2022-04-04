import React from 'react';
import SelectList from 'organisms/transferList';

const list = { a: true, b: false, c: false, d: true };
const selected = ['a', 'b', 'q', 's'];
const nonSelected = ['u', 'p', 'o', 'j'];

function Party() {
  return (
    <div>
      <SelectList selectedList={selected} nonSelectedList={nonSelected} />
    </div>
  );
}

export default Party;
