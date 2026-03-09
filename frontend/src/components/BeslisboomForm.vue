<script setup lang="ts">
import { ref, computed } from 'vue'
import type { DecisionTree, Question, Conclusion, Answer } from '@/models/DecisionTree'
import decisionTreeData from '@/assets/decision-tree.json'
import Header from '@/components/Header.vue'
import HomePage from '@/components/HomePage.vue'
import QuestionComponent from '@/components/Question.vue'
import ConclusionComponent from '@/components/Conclusion.vue'

// ── State ────────────────────────────────────────────────────────────────────
type Screen = 'home' | 'question' | 'conclusion'

const screen = ref<Screen>('home')
const tree = decisionTreeData as DecisionTree

// Stack of question IDs visited (for back navigation)
const history = ref<string[]>([])
// Parallel stack of answers given (for history display)
const answerPath = ref<{ question: string; answer: string }[]>([])

const currentQuestionId = ref<string | null>(null)
const currentConclusionId = ref<string | null>(null)

// ── Computed ─────────────────────────────────────────────────────────────────
const currentQuestion = computed<Question | undefined>(() =>
  tree.questions.find((q) => q.questionId === currentQuestionId.value)
)

const currentConclusion = computed<Conclusion | undefined>(() =>
  tree.conclusions.find((c) => c.conclusionId === currentConclusionId.value)
)

const isFirst = computed(() => history.value.length === 0)

// ── Actions ───────────────────────────────────────────────────────────────────
function start() {
  history.value = []
  answerPath.value = []
  currentQuestionId.value = tree.questions[0].questionId
  currentConclusionId.value = null
  screen.value = 'question'
}

function reset() {
  screen.value = 'home'
  history.value = []
  answerPath.value = []
  currentQuestionId.value = null
  currentConclusionId.value = null
}

function answer(a: Answer) {
  if (!currentQuestion.value) return

  // Push current question to history
  history.value.push(currentQuestion.value.questionId)
  answerPath.value.push({
    question: currentQuestion.value.question,
    answer: a.answer
  })

  if (a.nextConclusionId) {
    currentQuestionId.value = null
    currentConclusionId.value = a.nextConclusionId
    screen.value = 'conclusion'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else if (a.nextQuestionId) {
    currentQuestionId.value = a.nextQuestionId
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

function back() {
  if (screen.value === 'conclusion') {
    // Go back to the last question
    const last = history.value[history.value.length - 1]
    if (last !== undefined) {
      currentQuestionId.value = last
      currentConclusionId.value = null
      screen.value = 'question'
      history.value.pop()
      answerPath.value.pop()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return
  }

  if (history.value.length === 0) {
    reset()
    return
  }

  const prev = history.value.pop()!
  answerPath.value.pop()
  currentQuestionId.value = prev
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="rvo-layout-column rvo-layout-gap--2xl">
    <Header :is-home="screen === 'home'" @reset="reset" />

    <div
      class="rvo-layout-column rvo-max-width-layout rvo-layout-align-items-start rvo-max-width-layout-inline-padding--sm"
    >
      <!-- Home screen -->
      <HomePage v-if="screen === 'home'" @start="start" />

      <!-- Question screen -->
      <QuestionComponent
        v-if="screen === 'question' && currentQuestion"
        :question-id="currentQuestion.questionId"
        :question="currentQuestion.question"
        :explanation="currentQuestion.explanation"
        :answers="currentQuestion.answers"
        :is-first="isFirst"
        @answered="answer"
        @back="back"
      />

      <!-- Conclusion screen -->
      <ConclusionComponent
        v-if="screen === 'conclusion' && currentConclusion"
        :conclusion="currentConclusion.conclusion"
        :obligation="currentConclusion.obligation"
        :path="answerPath"
        @back="back"
        @restart="reset"
      />
    </div>
  </div>
</template>
