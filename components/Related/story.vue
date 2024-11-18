<template>
    <div>
        <a :href="`/stories/${story?.id}`">
            <v-card color="white" :class="['ma-4', selectedClass]" height="550" width="300" @click="toggle">
                <div v-if="story?.image?.filename_disk">
                    <img class="align-end text-white" height="400" :alt="story?.name"
                        :src="`${$directus.url}/assets/${story?.image?.filename_disk}`" cover />
                </div>

                <div v-else>
                    <img class="align-end text-white" height="300" src="~/assets/images/coming_soon.png" cover />
                </div>

                <v-card-subtitle class="pt-4">
                    Published: {{ new Date(story?.date_created).toLocaleDateString() }}
                </v-card-subtitle>

                <v-card-title>{{ story?.name }}</v-card-title>

                <v-card-actions>
                    <v-btn color="blue" :href="`/stories/${story?.id}`">
                        Read
                    </v-btn>
                </v-card-actions>
                <div class="d-flex fill-height align-center justify-center">
                    <v-scale-transition>
                        <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
                    </v-scale-transition>
                </div>
            </v-card>
        </a>
    </div>
</template>

<script setup>
    const props = defineProps({
        story: {
            type: Object,
            required: true,
        },
    });
    const {
        story
    } = props;
</script>