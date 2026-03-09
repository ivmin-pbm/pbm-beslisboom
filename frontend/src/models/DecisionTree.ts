export interface Answer {
  answer: string
  nextQuestionId?: string
  nextConclusionId?: string
}

export interface Source {
  source: string
  url?: string
}

export interface Question {
  questionId: string
  question: string
  explanation: string
  category: string
  answers: Answer[]
  sources?: Source[]
}

export interface Conclusion {
  conclusionId: string
  conclusion: string
  obligation: string
  sources?: Source[]
}

export interface DecisionTree {
  version: string
  name: string
  questions: Question[]
  conclusions: Conclusion[]
}
