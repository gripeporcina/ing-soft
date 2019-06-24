import React, { Component } from 'react';
import{
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItems } from '../actions/itemActions';
import uuid from 'uuid';
class ItemModal extends Component{
    state = {
        modal: false,
        name: ''
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    //para inputs
    onChange = (e) => {
         this.setState({ [e.target.name]: e.target.value});
    }
    onSubmit = e => {
        e.preventDefault();

        const NewItem = {
            id: uuid(),
            name: this.state.name
        }
        // Agregar item via action
        this.props.addItems(NewItem);

        // cerrar el modal
        this.toggle();
    }
    render(){
        return(
            <div>
                <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={this.toggle}
                >Agregar Item</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Agregar a Dietas</ModalHeader>
                    <ModalBody>
                       <Form onSubmit={this.onSubmit}>
                           <FormGroup>
                               <Label for="item">Item</Label>
                               <Input
                               type="text"
                               name="name"
                               id="item"
                               placeholder="Agregar Dieta"
                               onChange={this.onChange}
                               />
                               <Button
                               color="dark"
                               style={{marginTop:'2rem'}}
                               block
                               >Agregar Dieta</Button>
                           </FormGroup>
                        </Form> 
                    </ModalBody>
                </Modal>
            </div>
        );       
    }
}
const mapStateToprops = state => ({
    item: state.item
});

export default connect(mapStateToprops, { addItems })(ItemModal);