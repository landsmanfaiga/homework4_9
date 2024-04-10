import React from 'react';
import NumberSelected from './NumberSelected';
import NumberRow from './NumberRow';
class NumberMain extends React.Component {

    state = {
        numbers: [],
        addedNumbers: [],
        lockedNumbers: []
    }

    getRandomNumber = () => {
        return Math.floor(Math.random() * 500);
    }

    onAddClick = () => {         
        const copy = [...this.state.numbers];
        const num = this.getRandomNumber();
        copy.push(num);
        this.setState({ numbers: copy });
    }
    onSelectClicked = (num) => {
        const { addedNumbers } = this.state;
        if (addedNumbers.includes(num)) {
            this.setState({ addedNumbers: addedNumbers.filter(x => x !== num) });
        } else {
            this.setState({ addedNumbers: [...addedNumbers, num] });
        }
    }

    onLockClicked = (num) => {
        const { lockedNumbers } = this.state;
        if (lockedNumbers.includes(num)) {
            this.setState({ lockedNumbers: lockedNumbers.filter(x => x !== num) });
        } else {
            this.setState({ lockedNumbers: [...lockedNumbers, num] });
        }
    }
        
    render() {
        return (
            <div className="col-md-12">
                <button className="btn btn-success btn-lg w-100" onClick={this.onAddClick}>Add</button>
               
                <table className='table table-hover table-striped table-border'>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Add/Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.numbers.map(num => <NumberRow Number={num}
                            isLocked={this.state.lockedNumbers.includes(num)}
                            isSelected={this.state.addedNumbers.includes(num)}
                            onSelectClicked={() => this.onSelectClicked(num)}></NumberRow>)}
                    </tbody>
                    </table>
             
               
                <div className="col-md-6 col-md-offset-3">
                    <h3>Selected Numbers</h3>
                    <ul className="list-group">
                        {this.state.addedNumbers.map(num => <NumberSelected Number={num}
                            isLocked={this.state.lockedNumbers.includes(num)}
                            onLockClicked={() => this.onLockClicked(num)}></NumberSelected>)}
                    </ul>
                    </div>

            </div>
          
        )
    }
}

export default NumberMain;