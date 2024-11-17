<template>
  <div>
    <div class="text-center">
      <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" variant="text" icon="fas fa-search"></v-btn>
        </template>

        <v-card min-height="100" min-width="500">
          <div class="searchField" style="top: 50px; position: relative; border: 1px thin">
            <!-- Add Google Custom Search Element -->
            <div ref="searchContainer" class="gcse-search"></div>
          </div>
          <v-card-actions style="bottom: 0px; position: fixed;">
            <v-btn color="primary" block @click="dialog = false">Close Search</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const dialog = ref(false)
const searchContainer = ref(null)

// Function to load Google Custom Search script
const loadGoogleSearch = () => {
  // Check if script is already loaded
  if (window.google && window.google.search) return

  // Create script element
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://cse.google.com/cse.js?cx=00ee76e9d64c344cc' // Replace with your CSE ID
  
  // Add script to document
  document.head.appendChild(script)
}

// Initialize Google Custom Search when component mounts
onMounted(() => {
  loadGoogleSearch()
})

// Watch dialog state to reinitialize search when opened
watch(dialog, (newVal) => {
  if (newVal) {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      if (window.google && window.google.search) {
        window.google.search.cse.element.render({
          div: searchContainer.value,
          tag: 'search'
        })
      }
    }, 100)
  }
})
</script>

<style scoped>
/* Add custom styles for Google Custom Search */
:deep(.gsc-control-cse) {
  padding: 0 !important;
  border: none !important;
  background: transparent !important;
}

:deep(.gsc-input-box) {
  border: none !important;
}

:deep(.gsc-search-button) {
  margin-left: 0 !important;
}
</style>
