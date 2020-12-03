import React, {useEffect} from 'react';
import '../css/shippingComponent.css';


function ShippingComponent(props){

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const { emailAddress, firstName, lastName, mobileNo, doorNo, street, city, state, pinCode, handleAddressInputChange, 
        emailError, firstNameError, mobileError, doorNoError, streetError, cityError, stateError, pinCodeError,
        handleAddressInputUpdate} = props;

        
    return(
        <div>
            <div className="shipping-component-main">
                <form>
                    <div className="shipping-component-heading">Contact Information</div>
                        <input 
                            type='email' 
                            placeholder="Email Address" 
                            className="shipping-component-input-field"
                            name="email"
                            value={emailAddress}
                            onChange={handleAddressInputChange}
                            onInputCapture={handleAddressInputUpdate}
                        />
                        {
                            emailError ? 
                            <div className="shipping-component-input-error">Email Address Required *</div> : null
                        }
                    <div className="shipping-component-heading">Shipping Information</div>
                    <div className="row">
                        <div className="col-md-6">
                            <input 
                                type='text' 
                                placeholder="First Name" 
                                className="shipping-component-input-field"
                                name="firstName"
                                value={firstName}
                                onChange={handleAddressInputChange}
                                onInputCapture={handleAddressInputUpdate}
                            />
                            {
                                firstNameError ?
                                <div className="shipping-component-input-error">First Name Required *</div> : null
                            }
                        </div>
                        <div className="col-md-6">
                            <input 
                                type='text' 
                                placeholder="Last Name" 
                                className="shipping-component-input-field"
                                name="lastName"
                                value={lastName}
                                onChange={handleAddressInputChange}
                                onInputCapture={handleAddressInputUpdate}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <input 
                                type='text' 
                                placeholder="Mobile Number" 
                                className="shipping-component-input-field"
                                name="mobile"
                                maxLength={10}
                                value={mobileNo}
                                onChange={handleAddressInputChange}
                                onInputCapture={handleAddressInputUpdate}
                            />
                            {
                                mobileError === true ? 
                                <div className="shipping-component-input-error">Mobile Number Required *</div> : 
                                <div className="shipping-component-input-error">{mobileError}</div>
                            }
                        </div>
                        <div className="col-md-6">
                            <input 
                                type='text'
                                placeholder="D/No" 
                                className="shipping-component-input-field"
                                name="doorNo"
                                value={doorNo}
                                onChange={handleAddressInputChange}
                                onInputCapture={handleAddressInputUpdate}
                            />
                            {
                                doorNoError ?
                                <div className="shipping-component-input-error">Door No Required *</div> : null
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input 
                                type='text' 
                                placeholder="Street Name" 
                                className="shipping-component-input-field"
                                name="street"
                                value={street}
                                onChange={handleAddressInputChange}
                                onInputCapture={handleAddressInputUpdate}
                            />
                            {
                                streetError ? 
                                <div className="shipping-component-input-error">Street Required *</div> : null
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input 
                                type='text' 
                                placeholder="City" 
                                className="shipping-component-input-field"
                                name="city"
                                value={city}
                                onChange={handleAddressInputChange}
                                onInputCapture={handleAddressInputUpdate}
                            />
                            {
                                cityError ? 
                                <div className="shipping-component-input-error">City Required *</div> : null
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <select className="form-control shipping-component-input-field" onSelect={handleAddressInputUpdate} placeholder="State" onChange={handleAddressInputChange} value={state} id="sel1" name="state">
                                <option value="" disabled>State</option>
                                <option>Tamil Nadu</option>
                                <option>Kerala</option>
                                <option>Karnataka</option>
                                <option>Maharastra</option>
                            </select>
                            {
                                stateError ? 
                                <div className="shipping-component-input-error">State Required *</div> : null
                            }
                        </div>
                        <div className="col-md-6">
                            <input 
                                type='text' 
                                placeholder="Pin Code" 
                                className="shipping-component-input-field"
                                name="pinCode"
                                value={pinCode}
                                onChange={handleAddressInputChange}
                                onInputCapture={handleAddressInputUpdate}
                            />
                            {
                                pinCodeError ? 
                                <div className="shipping-component-input-error">PinCode Required *</div> : null
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ShippingComponent