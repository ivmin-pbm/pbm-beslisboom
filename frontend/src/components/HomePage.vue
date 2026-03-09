<script setup lang="ts">
const emit = defineEmits(['start'])
</script>

<template>
  <main>
    <div class="rvo-form">
      <div class="flex items-center rvo-layout-column rvo-layout-gap--xl">
        <div class="flex justify-center rvo-form-intro inline-flex py-5">
          <h2 class="flex justify-center utrecht-heading-2">PBM Beslisboom</h2>
        </div>

        <div class="rvo-layout-column rvo-layout-gap--md rvo-max-width-layout rvo-max-width-layout--lg">
          <div class="utrecht-form-fieldset rvo-form-fieldset">
            <fieldset class="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset">

              <div class="rvo-alert rvo-alert--info rvo-alert--padding-md" style="margin-bottom: 1.5rem;">
                <span
                  class="utrecht-icon rvo-icon rvo-icon-info rvo-icon--xl rvo-status-icon-info"
                  role="img"
                  aria-label="Info"
                ></span>
                <div class="rvo-alert-text">
                  <p class="utrecht-paragraph">
                    <strong>Wat doet deze tool?</strong><br />
                    Deze beslisboom ondersteunt laboratoriummedewerkers bij het zelfstandig
                    selecteren van de juiste persoonlijke beschermingsmiddelen (PBM) bij het
                    werken met gevaarlijke stoffen, biologische agentia, geluid, elektrostatische
                    ontlading, externe lichtbronnen en scherpe objecten.
                  </p>
                </div>
              </div>

              <p class="utrecht-paragraph">
                <strong>Standaard verplicht bij betreden laboratorium (NF):</strong>
              </p>
              <ul class="rvo-ul">
                <li>Labjas</li>
                <li>Gesloten schoenen</li>
                <li>Haren vast (bij schouderlengtes)</li>
                <li>Bedekkende kleding</li>
              </ul>

              <p class="utrecht-paragraph" style="margin-top: 1rem;">
                Deze beslisboom bepaalt welke <strong>aanvullende</strong> PBM's nodig zijn
                voor jouw specifieke werkzaamheden.
              </p>

              <div class="rvo-alert rvo-alert--warning rvo-alert--padding-sm" style="margin-top: 1.5rem;">
                <span
                  class="utrecht-icon rvo-icon rvo-icon-waarschuwing rvo-icon--xl rvo-status-icon-waarschuwing"
                  role="img"
                  aria-label="Waarschuwing"
                ></span>
                <div class="rvo-alert-text">
                  <p class="utrecht-paragraph">
                    Deze beslisboom is een hulpmiddel en vervangt niet het oordeel van
                    een KAM-preventiemedewerker. Bij twijfel altijd overleggen met
                    KAM centraal.
                  </p>
                </div>
              </div>

            </fieldset>
          </div>
        </div>

        <div class="py-5 px-5">
          <button
            @click="$emit('start')"
            type="button"
            class="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md rvo-link--no-underline"
          >
            Start de beslisboom
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
