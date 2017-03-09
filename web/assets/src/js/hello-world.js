/**
 * Created by rafael on 08/03/17.
 */
const Hello = function (props) {

    return {
        props,

        render () {
            const {word} = this.props;  // es6 destructuring

            return (
                <p>Hello, {word}!</p>
            );
        }
    };

};

export default Hello;