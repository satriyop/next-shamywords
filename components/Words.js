import React from 'react';
import Sharesult from '../components/Sharesult';
import Button from '../components/Button';

class Words extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: "write your promise here...", words: "", shas: [] };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }

        const id =  Date.now().toString()

        const url = "http://127.0.0.1:8080/sha"; 
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({ id: id, text: this.state.text })
        };
        fetch(url, requestOptions)
            .then(res => res.json())
            .then(data => this.setState(state => {
                shas: state.shas.push(data)
            }))
        
        this.setState(state => ({
            text: ''
        }));

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea 
                        className="textarea" 
                        value={this.state.text} 
                        onChange={this.handleChange}
                    />
                    <Button/>
                </form>
                <Sharesult shas={this.state.shas}/>
                <style jsx>{
                `
                    textarea {
                        width: 400px;
                        height: 150px;
                    }

                    ul {
                        padding: 0px;
                    }

                    .btn {
                        font-size: 14px;
                        border: 1px solid transparent;
                        background-color: blue;
                        color: white;
                        padding: 6px 12px;
                        text-align: center;
                    }
                `
                }</style>
            </div>
        )
    }
}

export default Words;