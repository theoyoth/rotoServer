<template>
  <div id="pageContainer">
    <div id="viewer" class="pdfViewer"></div>
  </div>
</template>

<script>
// import pdfjsLib from "pdfjs-dist/build/pdf";
// import { PDFViewer } from "pdfjs-dist/web/pdf_viewer";
// import "pdfjs-dist/web/pdf_viewer.css";

// pdfjsLib.GlobalWorkerOptions.workerSrc =
  // "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.0.943/build/pdf.worker.min.js"


export default {
  mounted(){
    // const canvas = document.getElementById("viewer")
    // const context = canvas.getContext("2d")
    // canvas.height = viewport.height
    // canvas.width = viewport.width
    // render pdf
    // const rendercontext = {
    //   canvasContext: context,
    //   viewport: viewport
    // }
    // const rendertask = this.pdfurl.render(rendercontext)
    // rendertask.promise.then(()=>{
    //   console.log('page rendered')
    // })
    // fileReader.readAsArrayBuffer(this.pdfurl)
  }
}
</script>

<style>
#pageContainer {
  margin: auto;
  width: 80%;
}

</style>