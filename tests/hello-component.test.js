/**
 * Created by rafael on 14/03/17.
 */
import React from 'react';
import test from 'tape';
import {shallow} from 'enzyme';

//Component to test
import helloComponent from '../web/assets/src/js/hello-component';

test('----- React Component Tests: HelloComponent -----', assert => {
    const expected =
        '<p>Hello,' + String.fromCharCode('160') +
        '<span style="display:inline;">World!</span>' +
        '<label for="wordInput" style="display:none;">World!</label>' +
        '<input type="text" style="display:none;" id="wordInput"/>' +
        '</p>';
    const message = 'HelloComponent must render a component with a p, span, label and input tags and must say *Hello, World!*';

    const Hello = helloComponent({React});

    let word = 'World';
    let mode = 'display';

    const actions = {
        setWord(w) {
            word = w;
        },

        setMode(m) {
            mode = m;
        }
    };

    const wrapper = shallow(<Hello word={word} mode={mode} actions={actions}/>);
    const result = wrapper.html();

    assert.equal(result, expected, message);
    assert.end();
});
