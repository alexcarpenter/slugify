export const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
export const join = x => y => y.join(x);
export const filter = x => y => y.filter(x);
export const replace = (rx, rp) => x => x.replace(rx, rp);
export const split = x => y => y.split(x);
export const toLowerCase = x => x.toLowerCase();
export const trim = x => x.trim();
