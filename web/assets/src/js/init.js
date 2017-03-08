import Hello from './hello-world';
(() => {
    document.addEventListener("DOMContentLoaded", function (event) {
        const hello = Hello();
    });
})();