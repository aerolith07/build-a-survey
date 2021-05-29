export type SurveyComponent = {
  name: string,
  id: string,
  drop: boolean
}

export const surveyComponents: SurveyComponent[] = [
  {
    name: 'Radio',
    id: 'r_unique',
    drop: true,
  },
  {
    name: 'True/False',
    id: 'tf_unique',
    drop: true,
  },
  {
    name: 'Checkbox',
    id: 'cb_unique',
    drop: true,
  },
];

export const getComponentById = (
  components: SurveyComponent[],
  id: string,
) => components.find((comp) => comp.id === id);
