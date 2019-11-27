const slugify = require('..');

describe('slugify', () => {
  test('does not mutate the original string value', () => {
    const str = 'foo bar';
    const slg = slugify(str);
    expect(str).toBe('foo bar');
    expect(slg).toBe('foo-bar');
  });

  test('camelcase strings', () => {
    expect(slugify('fooBar')).toBe('foo-bar');
    expect(slugify('FooBar')).toBe('foo-bar');
    expect(slugify('FooBarBaz')).toBe('foo-bar-baz');
  });

  test('replace diacritcs', () => {
    expect(slugify('dé jà vu')).toBe('de-ja-vu');
  });

  test('replace specified characters', () => {
    expect(slugify('alexcarpenter.me')).toBe('alexcarpenter-me');
    expect(slugify('foo&bar')).toBe('foo-bar');
    expect(slugify('foo-bar')).toBe('foo-bar');
    expect(slugify('foo_bar')).toBe('foo-bar');
  });

  test('remove special characters', () => {
    expect(slugify('foo 👻 bar')).toBe('foo-bar');
  });

  test('remove extra spacing', () => {
    expect(slugify('    one  two   three')).toBe('one-two-three');
  });
});
