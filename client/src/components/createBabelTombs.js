import React, { Component } from 'react';
import axios from 'axios';


export default class CreateBabelTomb extends Component {
    constructor(props) {
        super(props);

        this.onChangeAccess_key = this.onChangeAccess_key.bind(this);
        this.onChangeBuk = this.onChangeBuk.bind(this);
        this.onChangeS3_uri = this.onChangeS3_uri.bind(this);
        this.onChangeArn = this.onChangeArn.bind(this);
        this.onChangeObj_uri = this.onChangeObj_uri.bind(this);
        this.onChangeBook_Title = this.onChangeBook_Title.bind(this);
        this.onChangeBook_Data = this.onChangeBook_Data.bind(this);
        this.onChangeBook_are = this.onChangeBook_are.bind(this);
        this.onChangeCurrent_Lib = this.onChangeCurrent_Lib.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            access_key: '',
            buk: '',
            s3_uri: '',
            arn: '',
            obj_uri: '',
            book_title: '',
            book_data: '',
            book_are: '',
            current_lib: ''
        }
    }
    onChangeAccess_key(e) {
        this.setState({
            access_key: e.target.value
        });
    }
    onChangeBuk(e) {
        this.setState({
            buk: e.target.value
        });
    }
    onChangeS3_uri(e) {
        this.setState({
            s3_uri: e.target.value
        });
    }
    onChangeArn(e) {
        this.setState({
            arn: e.target.value
        });
    }
    onChangeObj_uri(e) {
        this.setState({
            obj_uri: e.target.value
        });
    }
    onChangeBook_Title(e) {
        this.setState({
            book_title: e.target.value
        });
    }
    onChangeBook_Data(e) {
        this.setState({
            book_data: e.target.value
        });
    }
    onChangeBook_are(e) {
        this.setState({
            book_are: e.target.value
        });
    }
    onChangeCurrent_Lib(e) {
        this.setState({
            current_lib: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        const pdf = {
            access_key: this.state.access_key,
            buk: this.state.buk,
            s3_uri: this.state.s3_uri,
            arn: this.state.arn,
            obj_uri: this.state.obj_uri,
            book_title: this.state.book_title,
            book_data: this.state.book_data,
            book_are: this.state.book_are,
            current_lib: this.state.current_lib
        }

        console.log(pdf)

        axios.post('http://localhost:5000/babeltombs/add', pdf)
        .then(res => console.log(res.data));

        window.location = '/';
    }
 



    render() {
        return (
            <div>
                <h3>Create new tomb</h3>
                <form onSubmit = {this.onSubmit}>
                    <div className = "form-group">
                        <label>access_key: </label>
                        <input 
                            type = "text"
                            className = "form-control"
                            value = { this.state.access_key }
                            onChange = { this.onChangeAccess_key }>
                            </input>
                    </div>
                    <div className = "form-group">
                        <label>buk: </label>
                        <input 
                            type = "text"
                            className = "form-control"
                            value = { this.state.buk }
                            onChange = { this.onChangeBuk }>
                            </input>
                    </div>
                    <div className = "form-group">
                        <label>s3_uri: </label>
                        <input 
                            type = "text"
                            className = "form-control"
                            value = { this.state.s3_uri }
                            onChange = { this.onChangeS3_uri }>
                            </input>
                    </div>
                    <div className = "form-group">
                        <label>arn: </label>
                        <input 
                            type = "text"
                            className = "form-control"
                            value = { this.state.arn }
                            onChange = { this.onChangeArn }>
                            </input>
                    </div>
                    <div className = "form-group">
                        <label>obj_uri: </label>
                        <input 
                            type = "text"
                            className = "form-control"
                            value = { this.state.obj_uri }
                            onChange = { this.onChangeObj_uri }>
                            </input>
                    </div>
                    <div className = "form-group">
                        <label>book_title: </label>
                        <input 
                            type = "text"
                            className = "form-control"
                            value = { this.state.book_title }
                            onChange = { this.onChangeBook_Title }>
                            </input>
                    </div>
                    <div className = "form-group">
                        <label>book_data: </label>
                        <input 
                            type = "text"
                            className = "form-control"
                            value = { this.state.book_data }
                            onChange = { this.onChangeBook_Data }>
                            </input>
                    </div>
                    <div className = "form-group">
                        <label>book_are: </label>
                        <input 
                            type = "text"
                            className = "form-control"
                            value = { this.state.book_are }
                            onChange = { this.onChangeBook_are }>
                            </input>
                    </div>
                    <div className = "form-group">
                        <label>current_lib: </label>
                        <input 
                            type = "text"
                            className = "form-control"
                            value = { this.state.current_lib }
                            onChange = { this.onChangeCurrent_Lib }>
                            </input>
                    </div>
                    <div className = "form-group">
                        <button type = "submit">submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
