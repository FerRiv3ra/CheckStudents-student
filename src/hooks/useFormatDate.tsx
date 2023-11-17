export const useFormatDate = () => {
  const format = (date: Date, lang: 'en' | 'es') => {
    if (lang === 'en') {
      return date.toLocaleString('en-GB', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      });
    } else {
      return date.toLocaleString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      });
    }
  };

  return {format};
};
