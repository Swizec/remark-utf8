import expect from "expect";
import remark from 'remark'

import utf8 from "src/index";

describe("italic", () => {
    it("converts _italic_ into utf8 italics", done => {
        remark().use(utf8).process("_italic_", function (err, output) {
            const result = output.contents;
            expect(result).toEqual("𝘪𝘵𝘢𝘭𝘪𝘤\n");
            done();
        });
    });
});

describe("bold", () => {
    it("converts **bold** into utf8 bolds", done => {
        remark().use(utf8).process("**bold**", function (err, output) {
            const result = output.contents;
            expect(result).toEqual("𝗯𝗼𝗹𝗱\n");
            done();
        })
    })
});

describe("code", () => {
    it("converts `code` into monospace font", done => {
        remark().use(utf8).process("`code`", function (err, output) {
            const result = output.contents;
            expect(result).toEqual("𝚌𝚘𝚍𝚎\n");
            done();
        })
    })
});