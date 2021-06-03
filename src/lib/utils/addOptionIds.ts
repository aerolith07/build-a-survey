import { nanoid } from '@reduxjs/toolkit';

type OptionType = {
    value?: string
}

const addOptionIds = (options: OptionType[]) => {
  if (options) {
    const optionsWithId = options.map((option) => ({
      id: nanoid(),
      value: option.value,
    }));
    return optionsWithId;
  }
  return options;
};

export default addOptionIds;
