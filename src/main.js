import deburr from 'lodash.deburr';
import { compose, join, filter, replace, split, toLowerCase, trim } from './utils';

const joinWithDash = join('-');
const filterEmptyStr = filter(Boolean);
const splitCamelcase = compose(
  replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1 $2'),
  replace(/([a-z\d])([A-Z])/g, '$1 $2'),
);
const replaceDiacritics = deburr;
const removeSpecialChars = replace(/[^\w\s]/gi, '');
const splitOnSpecialChars = replace(/&|-|_|\./g, ' ');
const splitOnSpace = split(' ');
const trimOuterSpace = trim;

const slugify = compose(
  joinWithDash,
  filterEmptyStr,
  splitOnSpace,
  removeSpecialChars,
  splitOnSpecialChars,
  replaceDiacritics,
  toLowerCase,
  splitCamelcase,
  trimOuterSpace,
);

export default slugify;
