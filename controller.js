var fs = require('fs');
var unzip = require('unzipper');

async function zipbulkupload(req, res) {
    try {
        console.log('within zipbulkupload', req.file);
        console.log('Request File:', req.file.path);
        fs.createReadStream(req.file.path).pipe(unzip.Extract({
            path: `./Server/helper/uploads`
        }));
        return {
            status: 200,
            message: 'Image Upload Successfully.'
        }
    }
    catch {
        return {
            status: 500,
            message: 'Internal Server Error.' + error
        }
    }
}
