type AsyncOperation<T> = () => Promise<T>;

export function runOnce<T>(operation: AsyncOperation<T>): AsyncOperation<T> {
  let operationInProgress: Promise<T> | null = null;

  return async () => {
    if (operationInProgress) {
      return operationInProgress;
    }

    operationInProgress = (async () => {
      try {
        return await operation();
      } finally {
        operationInProgress = null;
      }
    })();

    return operationInProgress;
  };
}
