import React from 'react';
import './index.css';
import MyCribsView from './view';
import CribCard from './sub_components/cribCard';

class MyCribs extends React.Component {
  componentDidMount() {
    this.props.actions.getMyCribs();
  }

  renderCribs = () => {
    return this.props.state.myCribs.map(c => {
      return <CribCard key={c.id} crib={c} />
    });
  };

  addCrib = e => {
    e.preventDefault();
    this.props.actions.addCrib({ url: e.target.crib.value });
    e.target.crib.value = '';
  };

  render() {
    return (
      <MyCribsView
        myCribs={this.props.state.myCribs}
        renderCribs={this.renderCribs}
        addCrib={this.addCrib}
      />
    );
  }
}

export default MyCribs;
