import React from 'react';

class ListSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderNumber: ""
        }
    }

    onValueChange(e){
        let name = e.target.name;
        let value = e.target.value.trim();

        this.setState({
            [name]: value
        });
    }

    onSearch()
    {
        this.props.onSearch(this.state.orderNumber);
    }

    onSearchkeywordKeyUp(e)
    {
        if(e.keyCode === 13)
            this.onSearch();
    }

    render() {
        return (
            <div className="row search-wrap" >
                <div className="col-md-12">
                    <div className="form-inline">
                        <div className="form-group">
                            <select className="form-control"   name="searchType">
                                <option value="productId">By Order orderNumber</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Order Number" 
                            name="searchKeyword" 
                            onChange={(e)=>{this.onValueChange(e)}}
                            onKeyUp={(e)=>this.onSearchkeywordKeyUp(e)}/>
                        </div>
                        <button className="btn btn-primary" onClick={(e)=>this.onSearch(e)}>Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListSearch;

