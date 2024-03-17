const onBeforeUnload = () => {
    window.location.href = 'index.html';
}

window.addEventListener("beforeunload", onBeforeUnload, false);

if (!localStorage.getItem('visited') && window.location.pathname !== 'index.html') {
    localStorage.setItem('visited', true);
    window.location.href = 'index.html';
}