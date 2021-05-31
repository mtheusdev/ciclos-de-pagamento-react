import React, { Component } from "react";
import { Field, arrayInsert, arrayRemove } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Grid from "../common/layout/grid";
import Input from "../common/form/input";
import If from "../common/operator/if";
class ItemList extends Component {
  add(index, item = {}) {
    if (!this.props.readOnly) {
      this.props.arrayInsert("billingCycleForm", this.props.field, index, item);
    }
  }
  remove(index) {
    if (!this.props.readOnly && this.props.list.length > 1) {
      this.props.arrayRemove("billingCycleForm", this.props.field, index);
    }
  }
  renderRows() {
    const list = this.props.list || [];
    return list.map((item, index) => (
      <tr key={index}>
        <td>
          <Field
            name={`${this.props.field}[${index}].name`}
            component={Input}
            readOnly={this.props.readOnly}
            placeholder="Informe o nome"
          />
        </td>
        <td>
          <Field
            name={`${this.props.field}[${index}].value`}
            component={Input}
            readOnly={this.props.readOnly}
            placeholder="Informe o valor"
          />
        </td>
        <If test={this.props.showStatus}>
          <td>
            <Field
              name={`${this.props.field}[${index}].status`}
              component={Input}
              readOnly={this.props.readOnly}
              placeholder="Informe o status"
            />
          </td>
        </If>
        <td>
          <button
            onClick={() => this.add(index + 1)}
            type="button"
            className="btn btn-success"
          >
            <i className="fa fa-plus"></i>
          </button>
          <button
            onClick={() => this.add(index + 1, item)}
            type="button"
            className="btn btn-warning"
          >
            <i className="fa fa-clone"></i>
          </button>
          <button
            onClick={() => this.remove(index)}
            type="button"
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
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>{this.props.legend}</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <If test={this.props.showStatus}>
                  <th>Status</th>
                </If>
                <th className="table-actions">Ações</th>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </table>
        </fieldset>
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ arrayInsert, arrayRemove }, dispatch);
export default connect(null, mapDispatchToProps)(ItemList);
