router.post('/zipbulkupload',fileUpload.single('file'),zipbulkupload);

async function zipbulkupload(req,res){
    console.log('zipbulkupload product.');
    let response = await controller.zipbulkupload(req, res);
    res.status(response.status).json({ message: response.message });
}
