import React from 'react';
import './sign-in.styles.scss';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';
 
class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {emailSignInStart} = this.props;
        const{email,password} = this.state;

        emailSignInStart(email, password);
    }

    handleChange = event => {
        const {value,name} = event.target;
        this.setState({[name]: value});
    }

    render(){   
        const { googleSignInStart} = this.props;
        return(
            <div className='sign-in'>
                <h2>Ya tengo una cuenta</h2>
                <span>Ingresar con mail y contraseña</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label={"email"}
                        required
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label={"contraseña"}
                        required 
                    />
                    <div className='buttons'>
                    <CustomButton type="submit" value="Submit Form"> Ingresar </CustomButton>
                        <CustomButton type="button" isGoogleSignIn onClick={googleSignInStart}> Ingresar con Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);