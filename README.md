# remark-utf8

Remark plugin to transform basic markdown into utf8 special characters. Useful for when your output is going into plaintext, not HTML.

[![](https://github.com/Swizec/remark-utf8/blob/master/screenshot-1547102782573.png?raw=true)](https://twitter.com/Swizec/status/1083253614527733760)

## Basic Usage

```
$ yarn add remark-utf8
// or
$ npm install remark-utf8
```

```javascript
import remark from "remark";
import utf8 from "remark-utf8";

const markdownString = `
    Just open sourced **remark-utf8** as a standalone plugin. Use _emphasis_, \`monospace fonts\` and **bolds** wherever. Careful about those screen readers tho ✌️

    https://github.com/Swizec/remark-utf8
`;

remark()
    .use(utf8)
    .process(markdownString, function(err, output) {
        console.log(output.contents);
    });
```

Outputs something like:

```
Just open sourced 𝗿𝗲𝗺𝗮𝗿𝗸-𝘂𝘁𝗳𝟴 as a standalone plugin. Use 𝘦𝘮𝘱𝘩𝘢𝘴𝘪𝘴, 𝚖𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎 𝚏𝚘𝚗𝚝𝚜 and 𝗯𝗼𝗹𝗱𝘀 wherever. Careful about those screen readers tho ✌️

https://github.com/Swizec/remark-utf8
```

Use responsibly.

## Warning

This messes with screen readers. Make sure you are okay with inaccessible text before using this. ✌️
