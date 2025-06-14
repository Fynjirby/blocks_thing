const blockIds = ['one', 'two', 'three', 'four'];
let currentIndex = 0;

function showBlocks() {
    if (currentIndex >= blockIds.length) {
        currentIndex = 0;
    }
    if (currentIndex === 0) {
        const last = document.getElementById(blockIds[blockIds.length - 1]);
        last.style.opacity = 0;
    } else {
        const prev = document.getElementById(blockIds[currentIndex - 1]);
        prev.style.opacity = 0;
    }
    const block = document.getElementById(blockIds[currentIndex]);
    block.style.opacity = 1;
    currentIndex++;
}
