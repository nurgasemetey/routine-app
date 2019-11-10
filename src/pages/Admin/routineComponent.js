import React, { Component } from 'react';
import { Input } from 'react-rainbow-components';

import Card from 'react-rainbow-components/components/Card';
import Button from 'react-rainbow-components/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RoutineList from './routeList';


const inputStyles = {
    "flex-grow": 6,
};
const buttonStyle = {
    "flex-grow": 1,
};
export default class RoutineComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routineList: [],
            value: ''
        };
    }
    addRoutineItem(e) {
        console.log(e);
        // this.setState({ value: '' });

    }

    render() {
        const { title, icon, footer } = this.props;
        return (
            <Card
                className="rainbow-m-around_medium"
                icon={<FontAwesomeIcon icon={icon} />}
                title={title || "Routine"}
                footer={footer}
            >
                <RoutineList listItems={this.state.routineList} />


                <div className="rainbow-flex rainbow-flex_row rainbow-justify_space-around">
                    <Input
                        id="input"
                        placeholder="Routine To Be Added"
                        value={this.state.value}
                        ref="routineItem"
                        style={inputStyles}
                        onChange={event => {
                            console.log(this.state.value);
                            this.setState({ value: event.target.value });
                        }}
                        disabled={this.state.routineList.length >= 3}
                    />
                    <Button label="+"
                        style={buttonStyle}
                        variant="brand"
                        disabled={this.state.routineList.length >= 3}
                        onClick={() => {

                            var item = this.state.value;
                            if (item != '') {
                                console.log(item);

                                var routineList = this.state.routineList;
                                routineList.push(item);
                                this.setState({
                                    routineList: routineList,
                                    value: ''
                                })
                            }

                        }}
                    />
                </div>

            </Card>
        );
    }

}

