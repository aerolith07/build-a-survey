import { nanoid } from '@reduxjs/toolkit';

type ContentType = {
  title: string,
  subheading: string,
  options: {value: string}[]
}

const addOptionIds = (content: ContentType) => {
  const options = content.options.map((option) => ({
    id: nanoid(),
    value: option.value,
  }));

  return { ...content, options };
};

export default addOptionIds;
