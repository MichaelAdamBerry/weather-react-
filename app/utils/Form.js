import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className='form' onSubmit={this.props.handleSubmit}>
        
        <label>
          Zip Code:
          <input
            id='zipcode'
            placeholder='enter zip'
            type='text'
            value={this.props.zip}
            autoComplete='off'
            onChange={this.props.handleChange} />
        </label>
        <button
          className='button'
          type='submit'
          //disabled={!this.props.appState}
          >
          Submit
        </button>
      </form>
    )
  }
};

export default Form;
