import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Button } from 'react-rainbow-components';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import SmsConfirmationModal from './smsConfirmationModal';

import {
    faBell,
    faArrowRight,
    faTasks,
    faBed,
    faRunning
} from '@fortawesome/free-solid-svg-icons';
import RoutineComponent from './routineComponent';


export default class AccountPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            phoneNumber: ' ',
            isValid: false
        };
    }


    closeHandle = () => {
        this.setState({ isOpen: false })
    }
    render() {
        return (
            <div>

                <div className="rainbow-flex rainbow-flex_row rainbow-justify_space-around">
                    <RoutineComponent title="Mourning Routine" footer="(Random SMS between 7am and 12pm)" icon={faBell} />
                    <RoutineComponent title="Afternoon Routine" footer="(Random SMS between 12pm and 6pm)" icon={faTasks} />
                    <RoutineComponent title="Evening Routine" footer="(Random SMS between 6pm and 12am)" icon={faBed} />
                </div>
                <div className="rainbow-flex rainbow-flex_row rainbow-justify_space-around">
                    <Card title="Start Your Routines" icon={<FontAwesomeIcon icon={faRunning} />} >
                        <div className="rainbow-p-horizontal_x-large rainbow-p-bottom_large rainbow-checkout_media-styles-container">
                            <div className="rainbow-flex rainbow-checkout_media-styles-inner-container rainbow-m-bottom_small">
                                <IntlTelInput
                                    preferredCountries={['tr']}
                                    onPhoneNumberChange={(isValid, newNumber, selectedCountryData, fullNumber) => {
                                        console.log(isValid, newNumber, selectedCountryData, fullNumber);
                                        this.setState({ phoneNumber: fullNumber, isValid: isValid })
                                    }
                                    }
                                />
                            </div>
                            <div className="rainbow-flex">
                                <Button variant="brand"
                                    className="rainbow-checkout_button"
                                    onClick={() => {
                                        if (this.state.isValid) {
                                            this.setState({
                                                isOpen: true,
                                            })
                                        }

                                    }} >
                                    Try it!
                                            <FontAwesomeIcon icon={faArrowRight} className="rainbow-m-left_small" />
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
                <SmsConfirmationModal closeHandleParent={this.closeHandle} parentPhoneNumber={this.state.phoneNumber} isOpenFromParent={this.state.isOpen} />
            </div>
        );
    }
}
