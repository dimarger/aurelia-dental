import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('Aurelia Dental render error:', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="render-error" role="alert">
          <h1>Something went wrong</h1>
          <p>{this.state.error.message}</p>
          <small>Open the browser console for the full stack trace.</small>
        </div>
      );
    }

    return this.props.children;
  }
}
