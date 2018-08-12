import React from 'react'
import Simditor from 'simditor';
import 'simditor/styles/simditor.scss';


class RichEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    componentDidMount()
    {
        this.loadEditor();
    }

    loadEditor(){
        let element = this.refs['textarea'];

        new Simditor({
            textarea: $(element),
            defaultValue: this.props.placeholder || 'Please input'
        });
    }


    render() {
        return (
            <div className="rich-editor">
                <textarea ref="textarea">

                </textarea>
            </div>
        );
    }
}

export default RichEditor;