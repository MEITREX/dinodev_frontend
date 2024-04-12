
export function formatGqlDate(isoDateString: string): string {
  const date = new Date(isoDateString);

  return date?.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }) ?? '';
}
