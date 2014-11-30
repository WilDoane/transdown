var Transdown = function () {

    this.updatePreviewAfterEachKeypress = function () {
        $('#text-to-transdownify').keyup(renderTranscriptPreview);
    },
    
    this.renderTranscriptPreview = function () {
        var textToTransdownify = document.getElementById('text-to-transdownify').value,
            outputText = transdownify(textToTransdownify);
        document.getElementById('live-preview').innerHTML = outputText;
        console.log("render");
    },
    
    this.transdownify = function (text) {
        return (text);
    }

};

var t = new Transdown();
t.updatePreviewAfterEachKeypress();
t.renderTranscriptPreview();
