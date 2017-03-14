/**
 * Created by rafael on 09/03/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';

const helloFactory = function ({React}) {
    const {string, func} = React.PropTypes;

    return function Hello(props) {
        // React wants propTypes to be static.
        Hello.propTypes = {
            word: string,
            mode: string,

            actions: React.PropTypes.shape({
                setWord: func.isRequired,
                setMode: func.isRequired
            })
        };

        return {
            props,

            componentDidUpdate() {
                this.refs.wordInput.focus();
            },

            render() {
                const {word, mode} = this.props;
                const {setWord, setMode} = this.props.actions;

                const styles = {
                    displayMode: {
                        display: (mode === 'display') ? 'inline' : 'none'
                    },

                    editMode: {
                        display: (mode === 'edit') ? 'inline' : 'none'
                    }
                };

                const onKeyUp = function (e) {
                    if (e.key !== 'Enter') return;

                    setWord(e.target.value);
                    setMode('display');
                };

                return (
                    <p>Hello,&nbsp;
                        <span
                            style={styles.displayMode}
                            onClick={() => {setMode('edit')}}>
                            {word}!
                        </span>
                        <label htmlFor="wordInput" style={styles.editMode}>
                            {word}!
                        </label>
                        <input style={styles.editMode} type="text" id="wordInput" ref="wordInput" onKeyUp={onKeyUp}/>
                    </p>
                );
            }
        }
    };
};

export default helloFactory;
