const languages = [
  {
    _id: "1",
    name: "Spanish",
    started: "04/18/2022",
    currentStage: "Vocabulary",
  },
  {
    _id: "2",
    name: "Ukrainian",
    started: "Not started",
    currentStage: "Planning",
  },
  {
    _id: "3",
    name: "French",
    started: "Not started",
    currentStage: "Planning",
  },
];

export function getLanguages() {
  return languages;
}
