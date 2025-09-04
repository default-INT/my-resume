export const getFormattedDate = (date: Date, locale: string) => {
  const formatted = Intl.DateTimeFormat(locale, {
    month: 'short',
    year: 'numeric',
  }).format(date);

  if (locale.startsWith('ru')) {
    return formatted.charAt(0).toUpperCase() + formatted.slice(1).replace('.', '');
  }

  return formatted;
};
