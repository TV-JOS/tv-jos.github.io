const onBeforeUnload = () => {
    window.location.href = 'index.html';
}

window.addEventListener("beforeunload", onBeforeUnload, false);