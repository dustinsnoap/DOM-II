let blocks  = document.querySelector('.blocks')
let id = 0

blocks.childNodes.forEach(block => {
    blocks.removeChild(block)
})

blocks.childNodes.forEach(block => {
    block.onclick = () => {
        blocks.removeChild(block)
        blocks.prepend(block)
    }
    block.onmousedown = () => {
        id = setInterval(() => {
            let transx = window.getComputedStyle(block).getPropertyValue('transform').match(/(-?[0-9\.]+)/g)
            if(transx) transx = transx[4]
            transx++
            block.style.transform = `translateX(${transx}px)`
        },0)
    }
    window.onmouseup = () => {
        clearInterval(id)
    }
})