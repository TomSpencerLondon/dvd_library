"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var video_library_1 = require("../video_library");
describe('Video Library', function () {
    it('accepts donated DVD', function () {
        var library = [];
        var dvd = { title: 'The Abyss', copies: 0 };
        library = video_library_1.donate(library, dvd);
        var index = library.map(function (dvd) { return dvd.title; }).indexOf('The Abyss');
        expect(index).toBe(0);
        expect(library[0].copies).toBe(1);
    });
});
//# sourceMappingURL=video_library.spec.js.map