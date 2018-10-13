  import React from 'react';
  import {Route, Redirect } from 'react-router-dom';

    // a component that redirects and passes state
    class SubmitForm  extends React.Component {
        render() {
          return (
            <Redirect
              to={{
                pathname: this.props.path,
                state: {
                  state: this.props.state
                }
              }}
            />
          )
        };

      };


     export default SubmitForm;
