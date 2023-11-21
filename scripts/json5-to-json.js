const fs = require('fs');
const path = require('path');
const JSON5 = require('json5');
const glob = require('glob');

const baseDir = path.resolve(__dirname, '..');
const presetLocationRelative = 'presets';
const presetDir = path.resolve(baseDir, presetLocationRelative);

glob(baseDir + '/**/*.json5', {}, (err, files) => {
    for (const filepathWithExtension of files) {
        let file = path.parse(filepathWithExtension);
        console.log(`Converting ${file.name}${file.ext} to ${presetLocationRelative}/${file.name}.json`)

        let outputFile = path.resolve(presetDir, `${file.name}.json`)

        try {
            let json = {
                "$generated": `This file was generated from a ${file.name}.json5 as Renovate Bot cannot extend JSON5 files. Do not edit directly and edit ${file.name}.json5 instead!`,
                ...(JSON5.parse(fs.readFileSync(filepathWithExtension)))
            }


            fs.writeFileSync(outputFile, JSON.stringify(json, null, ' '));
        } catch (error) {
            console.log('There was an error converting JSON5 to JSON.', error);
        }
    }
})

console.log('Finished converting JSON5 files to JSON.')
