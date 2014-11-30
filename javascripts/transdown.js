var Transdown = {

    updatePreviewAfterEachKeypress = function () {
        $('#text-to-transdownify').keyup(transdown.renderTranscriptPreview);
    },
    
    renderTranscriptPreview = function () {
        var textToTransdownify = document.getElementById('text-to-transdownify').value,
            outputText = transdownify(textToTransdownify);
        document.getElementById('live-preview').innerHTML = outputText;
        console.log("render");
    },
    
    transdownify = function (text) {
        return (text);
    }

};

var t = new Transdown();
t.updatePreviewAfterEachKeypress();
t.renderTranscriptPreview();
