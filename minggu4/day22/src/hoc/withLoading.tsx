import React from "react";

interface WithLoadingProps {
  loading: boolean;
}

export function withLoading<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const ComponentWithLoading: React.FC<P & WithLoadingProps> = ({
    loading,
    ...props
  }) => {
    if (loading) {
      return <p>⏳ Loading data...</p>;
    }
    return <WrappedComponent {...(props as P)} />;
  };

  return ComponentWithLoading;
}
