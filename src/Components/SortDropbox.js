import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DropDownList } from "@progress/kendo-react-dropdowns";
import "../style/sortOption.css"
export default class SortDropbox extends Component {
    state = {
        value: { text: 'Fearture', id: 0 }
    };
    options =
        [
            { text: 'Alphabetical,A->Z', id: 1 },
            { text: 'Alphabetical,Z->A', id: 2 },
            { text: 'Price,low to high', id: 3 },
            { text: 'Price,high to low', id: 4 },
        ];
    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
        console.log(event.target.value.id);
        this.props.onSort(event.target.value.id);

    }

    render() {
        return (
            <div className="dropdown">
                <div >
                    <span id="drd-left">Sort by  </span>
                    <button id="drd-left-1" className="btn-light">
                        <DropDownList className="drd-list"
                            data={this.options}
                            textField="text"
                            dataItemKey="id"
                            value={this.state.value}
                            onChange={this.handleChange}
                        /></button>
                    <span id="drdr">{this.props.quantityDisplayed} sản phẩm</span>

                </div>


            </div>
        )

    }
}


