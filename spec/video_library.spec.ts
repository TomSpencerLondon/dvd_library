import {donate } from '../video_library';

describe('Video Library', () => {
  let library = [];
  const dvd = {title: 'The Abyss', copies: 0};
  library = donate(library, dvd);


  it('adds donated DVD to library', () => {
    let index = library.map((dvd) => dvd.title).indexOf('The Abyss');
    expect(index).toBe(0);
  });

  it('assigns 1 copy to donated DVD', () => {
    expect(library[0].copies).toBe(1);
  })
});
