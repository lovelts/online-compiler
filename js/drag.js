/*
 * @Author: lts
 * @Date: 2021-03-05 13:40:30
 * @LastEditTime: 2021-03-05 16:23:33
 * @FilePath: \online-compiler\drag.js
 */
const box = document.getElementById('box')
let { clientWidth, clientHeight } = document.body
const drags = document.getElementsByClassName('drag')
const allDragsWidth = drags[0].offsetWidth * drags.length
let editors = document.getElementsByClassName('editor-box')
let aBoxWidth = (clientWidth - allDragsWidth) / editors.length
for (let i = 0; i < editors.length; i++) {
    editors[i].style.width = aBoxWidth + 'px'
}
window.addEventListener('resize', () => {
    clientWidth = document.body.clientWidth
    editors = document.getElementsByClassName('editor-box')
    aBoxWidth = (clientWidth - allDragsWidth) / editors.length
    for (let i = 0; i < editors.length; i++) {
        editors[i].style.width = aBoxWidth + 'px'
    }

})
drags[1].onmousedown = function (event) {
    event = event || window.event
    const al = event.clientX - this.offsetLeft
    const myHtmlWidth = document.getElementById('myHtml').offsetWidth
    const myCssWidth = document.getElementById('myCss').offsetWidth
    const myJsWidth = document.getElementById('myJs').offsetWidth
    const downWidth = event.clientX
    box.onmousemove = function (event) {
        event = event || window.event
        const mousePosi = event.clientX
        const moveWidth = downWidth - mousePosi
        editors[0].style.width = myHtmlWidth - moveWidth + 'px'
        editors[1].style.width = myCssWidth + moveWidth + 1 + 'px'

        if (myHtmlWidth - moveWidth <= 100) {
            document.onmousemove = null
            editors[0].style.width = 100 + 'px'
            editors[1].style.width = myHtmlWidth + myCssWidth - 100 + 'px'
        }
        if (myCssWidth + moveWidth + 1 <= 100) {
            document.onmousemove = null
            editors[0].style.width = myHtmlWidth + myCssWidth - 100 + 'px'
            editors[1].style.width = 100 + 1 + 'px'
        }
    }
    document.onmouseup = function () {
        box.onmousemove = null
        document.onmouseup = null
    }
    return false
}
drags[2].onmousedown = function (event) {

    event = event || window.event
    const al = event.clientX - this.offsetLeft
    const myHtmlWidth = document.getElementById('myHtml').offsetWidth
    const myCssWidth = document.getElementById('myCss').offsetWidth
    const myJsWidth = document.getElementById('myJs').offsetWidth
    const downWidth = event.clientX
    // console.log(myHtmlWidth + myCssWidth)
    box.onmousemove = function (event) {
        event = event || window.event
        const mousePosi = event.clientX
        const moveWidth = downWidth - mousePosi
        editors[1].style.width = myCssWidth - moveWidth + 'px'
        editors[2].style.width = myJsWidth + moveWidth + 1 + 'px'

        if (myCssWidth - moveWidth <= 100) {
            // document.onmousemove = null
            editors[1].style.width = 100 + 1 + 'px'
            editors[2].style.width = myCssWidth + myJsWidth - 100 + 'px'
        }
        if (myJsWidth + moveWidth <= 100) {
            // document.onmousemove = null
            editors[1].style.width = myCssWidth + myJsWidth - 100 + 'px'
            editors[2].style.width = 100 + 1 + 'px'
        }
    }
    document.onmouseup = function () {
        box.onmousemove = null
        document.onmouseup = null
    }
    return false
}

//拖拽高度变化
const dragCover = document.getElementById('dragCover')

const horDrag = document.getElementById('horDrag')
horDrag.onmousedown = function (event) {
    event = event || window.event
    const mouseDown = event.clientY
    const ah = event.clientY - this.offsetTop
    const boxHeight = box.offsetHeight
    const ifame = document.getElementById('iframeResult')
    const ifameHeight = ifame.offsetHeight
    dragCover.style.display = 'block'
    document.onmousemove = function (event) {
        event = event || window.event
        const moveWidth = event.clientY - mouseDown
        box.style.height = boxHeight + moveWidth + 'px'
        if (boxHeight + moveWidth <= 125) {
            box.style.height = 125 + 'px'
        }
        if (ifameHeight - moveWidth <= 100) {
            box.style.height = document.body.clientHeight - 100 - 60 - 17 + 'px'
        }

    }

    document.onmouseup = function () {
        dragCover.style.display = 'none'
        document.onmousemove = null
        document.onmouseup = null
    }
    return false
}