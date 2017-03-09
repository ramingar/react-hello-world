import Hello from './hello-world';
(() => {
    document.addEventListener("DOMContentLoaded", function (event) {

        ReactDOM.render(
            <Hello word={'Rafeta'}/>,
            document.getElementById('content')
        );

    });
})();