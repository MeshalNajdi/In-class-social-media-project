import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props){
        super(props);
        this.state={
            ispressed:false
        }
    }
    imageClilck =()=>{
        this.setState({ispressed:!this.state.ispressed})
    }
    render() {
        return (
            <div>
                <img src={this.props.img} width={"300px"} height={"300px"} />
                <h2>{this.props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum eos cum nemo ipsum, eum pariatur velit et minus quo eius sequi earum est soluta beatae laudantium nisi, molestiae dignissimos.</p>
                <img style={this.state.ispressed? {opacity: 1}: {opacity:0.5}} onClick={this.imageClilck} src="data:image/png;base64,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"></img>
            </div>
        )
    }
}
