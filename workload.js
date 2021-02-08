'use strict';

self.onmessage = function (event) {
    const workload = event.data;
    let a = 0x08a90db3, b = 0xabd209a0, c = 0x29019b32, d = 0x01ab3291;

    for (let i = 0; i < workload; i++) {
        a = (b ^ a) >> 1;
        b = (c ^ b) << 1;
        c = (d ^ c) >> 1;
        d = (a ^ d) << 1;
    }

    // Pass information back to thwart optimizers.
    postMessage(a);
};