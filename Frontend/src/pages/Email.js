import React from 'react';

// imported styles
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// imported conponents

class Email extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }

    }
    render(e){

        this.onNameChange = (e) => {
            let x = e.target.value;
            console.log(x)

            this.setState({
                name: x
            })
        }

        this.onEmailChange = (e) => {
            let y = e.target.value
            console.log(y)

            this.setState({email: y})
        }

        this.onMessageChange = (e) => {
            let z = e.target.value
            console.log(z)

            this.setState({message: z})
        }

        this.handleSubmit = (e) => {
            
            fetch('http://localhost:3002/send', {
                method: "POST",
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                }).then(
                (response) => (response.json())
                ).then((response)=> {
                if (response.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
                } else if(response.status === 'fail') {
                alert("Message failed to send.")
                }
            })

            e.preventDefault();

            console.log(
                this.state.name,
                this.state.email,
                this.state.message
            );
        }
    
        return(
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="name" >Name</label>
                        <input type="text" className="form-control" onChange={this.onNameChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" onChange={this.onEmailChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" onChange={this.onMessageChange}></textarea>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        )
    };
};


export default Email;