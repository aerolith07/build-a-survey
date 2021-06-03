import Questions from './Questions';

type DefaultQuestions = {
  [key in keyof typeof Questions]: {
    type: string,
    content: {
      title: string,
      subheading: string,
      options: { value: string, id?: string}[]
    }
    optionPrefix:string
  }
}

const defaultQuestions: DefaultQuestions = {
  radio: {
    type: 'radio',
    content: {
      title: 'Radio Option',
      subheading: 'optional description',
      options: [{ value: 'True' }, { value: 'False' }],
    },
    optionPrefix: 'Option',
  },
  // TODO change to checkbox for consistency
  checkboxes: {
    type: 'checkboxes',
    content: {
      title: 'Checkboxes',
      subheading: 'optional description',
      options: [{ value: 'Option 1' }, { value: 'Option 2' }],
    },
    optionPrefix: 'Option',
  },
  input: {
    type: 'input',
    content: {
      title: 'new input option',
      subheading: 'optional description',
      options: [{ value: '' }],
    },
    optionPrefix: '',
  },
};

export default defaultQuestions;
