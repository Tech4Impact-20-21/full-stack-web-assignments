import React, {Component} from "react";

class FormComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            value : ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            value : event.target.value
        })
        console.log(event.target.value)
    }

    handleSubmit(event){
        event.preventDefault();

        alert('Nama saya ' + this.state.value)
    }
    
    render(){
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input type="text" name="nama_lengkap" onChange={this.handleChange} />
                    <button type="submit">Kirim</button>
                </form>
            </div>
        )
    }
}

export default FormComponent;