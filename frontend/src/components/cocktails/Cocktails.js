import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCocktails } from "../../actions/cocktails";
export class Cocktails extends Component {
  static propTypes = {
    cocktails: PropTypes.array.isRequired,
    getCocktails: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCocktails();
  }
  render() {
    return (
      <Fragment>
        <h1>Cocktails</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cocktails.map((cocktail) => (
              <tr key={cocktail.name}>
                <td>{cocktail.id}</td>
                <td>{cocktail.name}</td>
                <td>{cocktail.price}</td>
                <td>{cocktail.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  cocktails: state.cocktails.cocktails,
});
export default connect(mapStateToProps, { getCocktails })(Cocktails);
