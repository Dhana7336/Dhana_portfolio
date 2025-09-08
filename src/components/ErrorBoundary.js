import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '2rem', 
          textAlign: 'center', 
          color: 'white', 
          backgroundColor: '#0f172a',
          minHeight: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h2 style={{ color: '#f87171', marginBottom: '1rem' }}>Something went wrong</h2>
          <p style={{ marginBottom: '1rem' }}>This component encountered an error.</p>
          <details style={{ 
            textAlign: 'left', 
            backgroundColor: '#1e293b', 
            padding: '1rem', 
            borderRadius: '8px',
            maxWidth: '600px',
            width: '100%',
            marginTop: '1rem'
          }}>
            <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Error Details</summary>
            <p style={{ color: '#f87171', marginTop: '0.5rem' }}>
              {this.state.error && this.state.error.toString()}
            </p>
            <pre style={{ 
              overflow: 'auto', 
              backgroundColor: '#334155', 
              padding: '0.5rem',
              borderRadius: '4px',
              fontSize: '0.8rem'
            }}>
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;