/*
 * @Author: lts
 * @Date: 2021-03-03 12:36:07
 * @LastEditTime: 2021-03-05 17:58:34
 * @FilePath: \online-compiler\index.js
 */
let iframeResult = document.getElementById('iframeResult')

const htmlContent = document.getElementById('htmlContent')
const cssContent = document.getElementById('cssContent')
const jsContent = document.getElementById('jsContent')

window.addEventListener('keydown', (e) => {
    if (e.code === 'Tab') {
        e.code === null
        e.returnValue = false
    }
    if(e.code === 'KeyS' && e.ctrlKey === true) {
        e.code === null
        e.returnValue = false
    }
})

function removeLoading() {
    document.getElementById('iframeResult').style.backgroundColor = '#fff'
    document.getElementById('loadingText') && document.getElementById('ifame').removeChild(document.getElementById('loadingText'))
}
htmlContent.onkeyup = function (e) {
    removeLoading()
    // iframeResult.srcdoc = this.value
    const { contentDocument } = iframeResult
    let contentBody = contentDocument.body
    contentBody.innerHTML = this.value
  
}
cssContent.onkeyup = function (e) {
    removeLoading()
    const { contentDocument } = iframeResult
    let contentHead = contentDocument.head
    if (contentHead.childNodes.length > 0) {
        contentHead.removeChild(contentHead.childNodes[0])
    }
    let contentStyle = contentDocument.createElement('style')
    contentStyle.innerHTML = this.value
    contentHead.appendChild(contentStyle)
}


jsContent.onblur = function (e) {

    removeLoading()
    // console.log(this.value)
    const { contentDocument } = iframeResult
    let contentHtml = contentDocument.getElementsByTagName('html')[0]
    if (contentDocument.getElementsByTagName('script')[0]) {
        contentHtml.removeChild(contentDocument.getElementsByTagName('script')[0])
    }
    var contentStyle = contentDocument.createElement('script')
    contentStyle.innerHTML = this.value
    contentHtml.appendChild(contentStyle)
    // console.log(contentBody)
}
document.getElementById('operation').onclick = function() {
    removeLoading()
    const { contentDocument } = iframeResult
    let contentHtml = contentDocument.getElementsByTagName('html')[0]
    if (contentDocument.getElementsByTagName('script')[0]) {
        contentHtml.removeChild(contentDocument.getElementsByTagName('script')[0])
    }
    var contentStyle = contentDocument.createElement('script')
    contentStyle.innerHTML = this.value
    contentHtml.appendChild(contentStyle)
}
// forbidKey(htmlContent)
// forbidKey(cssContent)
// forbidKey(jsContent)

function forbidKey(obj) {
    obj.onkeydown = function(e) {
        if (e.code === 'Tab') {
            e.code === null
            e.returnValue = false
            this.value += '   '
        }
    }
}
