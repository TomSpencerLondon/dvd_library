import {donate } from '../video_library';

describe('Video Library', () => {
  it('accepts donated DVD', () => {
    let library = [];
    const dvd = {title: 'The Abyss', copies: 0};
    library = donate(library, dvd);
    let index = library.map((dvd) => dvd.title).indexOf('The Abyss');
    expect(index).toBe(0);
    expect(library[0].copies).toBe(1);
  });
});
