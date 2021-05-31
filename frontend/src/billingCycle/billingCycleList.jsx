import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getList, showUpdate, showDelete } from "./billingCycleActions";

class BillingCycleList extends Component {
  componentWillMount() {
    this.props.getList();
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map((bc) => (
      <tr key={bc._id}>
        <td>{bc.name}</td>
        <td>{bc.month}</td>
        <td>{bc.year}</td>
        <td>
          <button
            onClick={() => this.props.showUpdate(bc)}
            className="btn btn-warning"
          >
            <i className="fa fa-pencil"></i>
          </button>
          <button
            onClick={() => this.props.showDelete(bc)}
            className="btn btn-danger"
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
              <th className="table-actions">Ações</th>
            </tr>
          </thead>
          <tbody>{this.renderRows()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ list: state.billingCycle.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList, showUpdate, showDelete }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);
