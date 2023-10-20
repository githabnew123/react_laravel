import React from 'react';
import ReactDOM from 'react-dom';

function PPA() {
    return (
            <div>
                <form>
                    <label>Enter Name :
                        <input name="username" type="text"/>
                    </label>
                    <label>Enter Age :
                        <input name="age" type="number"/>
                    </label>
                    <input type="submit"/>
                </form>
            </div>
    );
}

export default PPA;

if (document.getElementById('ppa')) {
    ReactDOM.render(<PPA/>, document.getElementById('ppa'));
}
