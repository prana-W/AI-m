// components/ErrorBoundary.jsx
import React from 'react';
import handleError from '@/utils/errorHandler';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        handleError(error, 'React Component');
        console.error('React Error Info:', errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-4 text-red-500 text-center">
                    ⚠️ Something went wrong. Please refresh.
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
