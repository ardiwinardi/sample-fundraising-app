export const toDateInputValue = (date: Date | null): string => {
  if (!date) return '';
  try {
    const local = new Date(date);
    local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
  } catch (e) {
    return '';
  }
};

export const getMaxDate = (): string => {
  return toDateInputValue(
    new Date(new Date().setFullYear(new Date().getFullYear() + 10))
  );
};

export const toLocalDateString = (date: Date | null): string => {
  if (!date) return '';

  try {
    const local = new Date(date);
    return local.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  } catch (e) {
    return '';
  }
};

export const toLocalDateTimeString = (date: Date | null): string => {
  if (!date) return '';

  try {
    const local = new Date(date);
    return local
      .toLocaleString(['ban', 'id'], {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      })
      .replaceAll('.', ':');
  } catch (e) {
    return '';
  }
};

export const toLocalTimeString = (date: Date | null): string => {
  if (!date) return '';

  try {
    const local = new Date(date);
    return local.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  } catch (e) {
    return '';
  }
};

export const is17YearsPlus = (date: string | null): boolean => {
  if (!date) return false;

  try {
    const birthdate = new Date(date);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
    return age >= 17;
  } catch (e) {
    return false;
  }
};

export const toChatTimeString = (date: Date | null): string => {
  if (!date) return '';

  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const input = new Date(date);

    if (input.toDateString() === today.toDateString()) {
      return toLocalTimeString(input);
    }

    return toLocalDateString(input);
  } catch (e) {
    return '';
  }
};
