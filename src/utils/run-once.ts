type AsyncOperation<T> = () => Promise<T>;

/**
 * Run an operation once at a time. If the operation is already in progress, the
 * same promise will be returned.
 * @param operation The operation to run
 */
export function runOnce<T>(operation: AsyncOperation<T>): AsyncOperation<T> {
  let operationInProgress: Promise<T> | null = null

  return async () => {
    if (operationInProgress) {
      return operationInProgress
    }

    operationInProgress = (async () => {
      try {
        return await operation()
      } finally {
        operationInProgress = null
      }
    })()

    return operationInProgress
  }
}
