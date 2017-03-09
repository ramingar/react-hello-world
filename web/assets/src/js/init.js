import helloFactory from './hello-component';
(() => {
    document.addEventListener("DOMContentLoaded", function () {

        const Hello = helloFactory({React});

        let word = 'World';
        let mode = 'display';

        const actions = {
            setWord(w) {
                word = w;
                render();
            },

            setMode(m) {
                mode = m;
                render();
            }
        };

        const render = function () {
            ReactDOM.render(
                <Hello word={word} mode={mode} actions={actions}/>,
                document.getElementById('content')
            );
        };

        render();

    });
})();