import {donate } from '../video_library';

describe('Video Library', () => {
  it('accepts donated DVD', () => {
    let library = [];
    const dvd = {title: 'The Abyss'};
    library = donate(library, dvd);
    let index = library.map((dvd) => dvd.title).indexOf('The Abyss');
    expect(index).toBe(0);
  });
});
