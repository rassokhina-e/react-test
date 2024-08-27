import React from 'react';

import { ErrorModal } from './components/ErrorModal'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
    }

    handleRedirect = () => {
      this.setState({hasError: false});
      window.location.href = '/';
    }
  
    render() {
      console.log('this.state', this.state)
      if (this.state.hasError) {
        return <ErrorModal onClick={this.handleRedirect}/>
      }
  
      return this.props.children;
    }
}

export default ErrorBoundary
