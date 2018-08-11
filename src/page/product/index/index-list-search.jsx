import React from 'react';

class ListSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchType: "",  // productId, productName
            searchKeyword: ""
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
        this.props.onSearch(this.state.searchType, this.state.searchType);
    }

    render() {
        return (
            <div className="row search-wrap" >
                <div className="col-md-12">
                    <div className="form-inline">
                        <div className="form-group">
                            <select className="form-control"   name="searchType" onChange={(e)=>{this.onValueChange(e)}}>
                                <option value="productId">By Id</option>
                                <option value="productName">By Name</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="keyword" 
                            name="searchKeyword" 
                            onChange={(e)=>{this.onValueChange(e)}}/>
                        </div>
                        <button className="btn btn-primary" onClick={(e)=>this.onSearch(e)}>Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListSearch;

