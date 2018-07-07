import constants from './../data/constant';

export function increment(index) {
  return {
    type: constants.INCREMENT_LIKES,
    index
  };
}