function saveFile(fileName, data, ext, type) {
    let disableAutoBOM = true;

    if (!fileName) return Promise.resolve(void 0);

    if (ext && fileName.slice(-4) !== `.${ext}`) fileName = `${fileName}.${ext}`;

    const blob = new Blob([data], { type });
    saveAs(blob, fileName, disableAutoBOM);
    return Promise.resolve(void 0);
  }

async function fsUniversalHex(code) {
    var FS = microbitFsWrapper();

    FS.setupFilesystem().then(function() {
        FS.write('main.py', code);
        var result = FS.getUniversalHex()
        saveFile("Hello", result, 'hex', 'application/octet-stream')
    });
}