/**
 *
 * ProjectStoreInteractingTrade
 *
 */

import { Input } from 'semantic-ui-react';
import { Map } from 'immutable';
import * as projectStore from '~/containers/App/getters/projectStore';
import PropTypes from 'prop-types';
import React from 'react';

/* eslint-disable react/prefer-stateless-function */
class ProjectStoreInteractingTrade extends React.PureComponent {
  constructor(props) {
    super(props);

    this.changeValue = evt => {
      const { onChangeValue, store } = this.props;
      onChangeValue(store, evt.target.value);
    };
  }

  render() {
    const {
      store,
      storeNextValues,
      size,
      className,
      label,
      fluid,
    } = this.props;

    const value = projectStore.getTrade(storeNextValues.get('nextValue'), {
      entry: store,
    });

    return (
      <Input
        size={size}
        fluid={fluid}
        type="number"
        value={value}
        onChange={this.changeValue}
        className={className}
        label={label}
      />
    );
  }
}

ProjectStoreInteractingTrade.propTypes = {
  store: PropTypes.instanceOf(Map).isRequired,
  storeNextValues: PropTypes.instanceOf(Map).isRequired,
  onChangeValue: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['mini', 'small', 'large', 'big', 'huge', 'massive']),
  className: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.number,
  ]),
  fluid: PropTypes.bool,
};

ProjectStoreInteractingTrade.defaultProps = {
  size: 'mini',
  className: '',
  label: null,
  fluid: true,
};

export default ProjectStoreInteractingTrade;
