import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SummaryPage extends React.Component{
    constructor (props){
        super(props);
        this.state={
            isOpen:true
        }
    }

    toggle() {
        this.setState(prevState => ({
          isOpen: !prevState.isOpen
        }));
    }

    
    render(){
        const {data} = this.props;
        //const data = this.props.data;
        return (
            <div>
            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
            <Modal isOpen={this.state.isOpen} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Summary</ModalHeader>
              <ModalBody>
                  <pre>
                    {JSON.stringify(data,0,2)}
                  </pre>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        )
    }
}

export default SummaryPage;