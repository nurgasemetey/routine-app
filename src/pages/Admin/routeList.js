import React, { Component } from 'react';
import { Accordion, AccordionSection } from 'react-rainbow-components';

export default class RoutineList extends Component {
    render(){
      return (

        <Accordion>
        {
            Object.keys(this.props.listItems).map( (index) => {
              return (
                <AccordionSection label={this.props.listItems[index]}>
                </AccordionSection>
              );
            })
          }
        </Accordion>
      );
    }
  }