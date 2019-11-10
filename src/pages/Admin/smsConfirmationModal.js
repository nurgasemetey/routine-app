import React from 'react';
import { Modal, Button } from 'react-rainbow-components';
import { Input } from 'react-rainbow-components';



const textStyles = {
    textAlign: 'center',
    fontSize: 15,
    padding: '0 16px',
};

export default class SmsConfirmationModal extends React.Component {



    render() {
        return (

            <Modal
                isOpen={this.props.isOpenFromParent}
                onRequestClose={() => {
                    this.props.closeHandleParent();
                }}
                title="Enter your code"
                footer={
                    <div className="rainbow-flex rainbow-justify_center">
                        <Button label="Save" variant="brand" />
                    </div>
                }
            >
                <p style={textStyles}>
                    A code has been sent to : {this.props.parentPhoneNumber}

                </p>
                <Input
                    placeholder="Confirmation code"
                    type="number"
                />
                <p style={textStyles}>
                    Enter the code to verify your number

                </p>
            </Modal>
        );
    }
}

