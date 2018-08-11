import React from 'react'

class TableList extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            firstLoading: true
        }
    }

    componentWillReceiveProps(){
        this.setState(
            {
                firstLoading: false
            }
        )
    }

    render() {
        let tableHeader = this.props.tableHeads.map((tableHead, index) => {
            <th key={index}>{tableHead}</th>
        });
        let listBody = this.props.children;
        let listInfo = (
            <tr><td colSpan={this.props.tableHeads.length} className="text-center">
                {this.state.firstLoading ? "Is loading" : "No data"}
            </td></tr>
        );
        let tableBody = listBody.length > 0 ? listBody : listInfo;

        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                {tableHeader}
                            </tr>
                        </thead>
                        <tbody>
                            {tableBody}
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}
export default TableList;
