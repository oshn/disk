import test from 'ava';

import Disk from '..';

test('Produce in proper region', async t => {
    let x0 = 1,
        y0 = 4,
        rO = 2,
        rI = 1;

    let disk = new Disk([x0, y0], rO, rI);

    let [x, y] = await disk.derive();

    let dx = x - x0,
        dy = y - y0;

    let r = Math.sqrt(dx*dx+dy*dy);

    t.true(r < rO);
    t.true(r > rI);
});
