function trocarEmbed(src) {
    document.getElementById('videoPlayer').src = src;
}

window.addEventListener('load', function() {
    var iframe = document.getElementById('videoPlayer');

    iframe.addEventListener('error', function() {
        var originalSrc = iframe.src;
        var alternativeSrc = originalSrc + "&alternative=true"; 
        console.log('Erro no carregamento, tentando:', alternativeSrc);
        trocarEmbed(alternativeSrc);
    });

    setTimeout(function() {
        if (!iframe.contentWindow || iframe.contentWindow.location.href === 'about:blank') {
            var originalSrc = iframe.src;
            var alternativeSrc = originalSrc + "&alternative=true";
            console.log('Conteúdo não carregado corretamente, tentando:', alternativeSrc);
            trocarEmbed(alternativeSrc);
        }
    }, 5000);
});
