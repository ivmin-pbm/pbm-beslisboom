<script setup lang="ts">
interface Props {
  conclusion: string
  obligation: string
  path: { question: string; answer: string }[]
}

defineProps<Props>()
defineEmits<{
  back: []
  restart: []
}>()

const isStop = (conclusion: string) =>
  conclusion.toLowerCase().includes('niet starten') ||
  conclusion.toLowerCase().includes('stop met werken') ||
  conclusion.toLowerCase().includes('eerst')
</script>

<template>
  <div class="flex flex-col py-5 gap-y-5 rvo-max-width-layout--md">
    <!-- Title -->
    <div class="flex">
      <h2 class="utrecht-heading-2">Resultaat</h2>
    </div>

    <!-- Conclusion -->
    <div
      :class="isStop(conclusion) ? 'rvo-alert rvo-alert--error rvo-alert--padding-md' : 'rvo-alert rvo-alert--success rvo-alert--padding-md'"
    >
      <span
        v-if="isStop(conclusion)"
        class="utrecht-icon rvo-icon rvo-icon-foutmelding rvo-icon--xl rvo-status-icon-foutmelding"
        role="img"
        aria-label="Foutmelding"
      ></span>
      <span
        v-else
        class="utrecht-icon rvo-icon rvo-icon-vinkje rvo-icon--xl rvo-status-icon-ok"
        role="img"
        aria-label="Ok"
      ></span>
      <div class="rvo-alert-text">
        <p class="utrecht-paragraph rvo-text--bold">{{ conclusion }}</p>
      </div>
    </div>

    <!-- Obligation -->
    <div class="rvo-layout-margin-vertical--sm">
      <h3 class="utrecht-heading-3">Toelichting</h3>
      <p style="white-space: pre-line" class="utrecht-paragraph">{{ obligation }}</p>
    </div>

    <!-- Navigation buttons -->
    <div class="rvo-layout-row rvo-layout-gap--sm rvo-layout-margin-vertical--md">
      <button
        @click="$emit('back')"
        type="button"
        class="flex utrecht-button utrecht-button--secondary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
      >
        <span
          class="utrecht-icon rvo-icon rvo-icon-terug rvo-icon--lg rvo-icon--wit"
          role="img"
          aria-label="Terug"
        ></span>
        Vorige vraag
      </button>
      <button
        @click="$emit('restart')"
        type="button"
        class="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md rvo-link--no-underline"
      >
        Opnieuw starten
      </button>
    </div>

    <!-- Accordion: answered path -->
    <div class="rvo-accordion" v-if="path.length > 0">
      <details class="rvo-accordion__item">
        <summary class="rvo-accordion__item-summary rvo-heading--no-margins rvo-heading--mixed">
          <h3 class="utrecht-heading-3 rvo-accordion__item-title rvo-heading--no-margins rvo-heading--mixed items-center">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw rvo-accordion__item-icon--closed"
              role="img"
              aria-label="Delta omlaag"
            ></span>
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw rvo-accordion__item-icon--open"
              role="img"
              aria-label="Delta omhoog"
            ></span>
            Antwoorden
          </h3>
          <span class="rvo-accordion-teaser">Bekijk hier het door jou bewandelde pad</span>
        </summary>
        <div class="rvo-accordion__content">
          <ul class="no-list">
            <li
              v-for="(step, index) in path"
              :key="index"
              class="rvo-layout-margin-vertical--md"
            >
              <strong>Vraag {{ index + 1 }}:</strong> {{ step.question }}<br />
              <em>Antwoord:</em> {{ step.answer }}
            </li>
          </ul>
        </div>
      </details>
    </div>

    <!-- Contact info -->
    <div class="rvo-alert rvo-alert--info rvo-alert--padding-md">
      <span
        class="utrecht-icon rvo-icon rvo-icon-info rvo-icon--xl rvo-status-icon-info"
        role="img"
        aria-label="Info"
      ></span>
      <div class="rvo-alert-text">
        Mocht u vragen of opmerkingen hebben, neem dan contact op met KAM centraal
        of de preventiemedewerker.
      </div>
    </div>
  </div>
</template>
