import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class createShipping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {createdShipping: {}};
    }

    componentDidMount() {
        this.setState({createdShipping: this.props.children[1]});
    }
    render() {
        return (<aside className='edit-existing-shipping' id={this.props.children[1]._id}>

                <h2>Shipping information:</h2>
                <h3 id="message"></h3>
                <div className='shipping-details col-md-12 col-lg-12'>
                    <label className='row pull-left col-md-12 col-lg-12'>first
                        Name: <input type='text' name='firstname' placeholder='first name'
                                     value={this.state.createdShipping.firstname}/></label>
                    <label className='row pull-left col-md-12 col-lg-12'>last
                        Name: <input type='text' name='lastname' placeholder='last name'
                                     value={this.state.createdShipping.lastname}/></label>
                    <label className='row pull-left col-md-12 col-lg-12'>Phone:
                        <input type='text' name='phone' placeholder='phone'
                               value={this.state.createdShipping.phone}/></label>
                    <label className='row pull-left col-md-12 col-lg-12'>Email:
                        <input type='text' name='email' placeholder='email'
                               value={this.state.createdShipping.email}/></label>
                    <label
                        className='row pull-left col-md-3 col-lg-3'>Street:
                        <input type='text' name='street' placeholder='street'
                               value={this.state.createdShipping.addressStreet}/></label>
                    <label
                        className='row pull-left col-md-3 col-lg-3'>Floor:
                        <input type='text' name='Floor' placeholder='Floor'
                               value={this.state.createdShipping.addressStreet}/></label>
                    <label
                        className='row pull-left col-md-3 col-lg-3'>Appartment:
                        <input type='text' name='appartment' placeholder='appartment'
                               value={this.state.createdShipping.addressAppartment}/></label>
                    <label className='row pull-left col-md-10 col-lg-10'>Special notes:
                        <textarea type='text' name='notes' placeholder='notes'
                                  value={this.state.createdShipping.notes}/></label>
                </div>
                <div className="row">
                    <button className="btn btn-primary pull-left col-md-5 col-lg-5"
                            onClick={() => this.submitEdit(this.props.children[1]._id)}>Submit
                    </button>
                    <button className="btn btn-danger pull-left col-md-5 col-lg-5"
                            onClick={() => this.cancelEdit(this.props.children[1]._id)}>
                        Cancel
                    </button>
                </div>
            </aside>
        )

    }
}
export default createShipping;
