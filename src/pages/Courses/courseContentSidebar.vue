<script>
export default {
  name: "courseContent",
  data() {
    return {
      stages: [
        {
          id: 0,
          title: 'Этап 1',
          description: 'Ранние цивилизации',
          completed: true,
          lessons: [
            {
              title: 'Появление человека на территории Казахстана',
              icon: 'fi fi-ss-check-circle',
              color: '#38bdf8',
              status: 'done',
            },
            {
              title: 'Культура бронзового века (андроновцы)',
              icon: 'fi fi-ss-check-circle',
              color: '#38bdf8',
              status: 'done',
            }
          ]
        },
        {
          id: 1,
          title: 'Этап 2',
          description: 'Кочевые империи',
          completed: false,
          lessons: [
            {
              title: 'Сакская цивилизация и "Золотой человек"',
              icon: 'fi fi-rr-play-circle',
              color: '#f59e0b',
              status: 'in_progress',
            },
            {
              title: 'Государство усуней',
              icon: '',
              color: '#d1d5db',
              status: 'not_started',
            }
          ]
        },
        {
          id: 2,
          title: 'Этап 3',
          description: 'Средневековые государства',
          completed: false,
          lessons: [
            {
              title: 'Тюркский каганат',
              icon: '',
              color: '#d1d5db',
              status: 'not_started',
            },
            {
              title: 'Караханиды и исламизация региона',
              icon: '',
              color: '#d1d5db',
              status: 'not_started',
            }
          ]
        }
      ]
    };
  }
}
</script>

<template>
  <div class="w-full">
    <Accordion v-for="stage in stages" :key="stage.id" :value="stage.id">
      <AccordionPanel :value="stage.id" class="stage">
        <AccordionHeader>
          <div class="stage-content">
            <i class="fi fi-ss-check-circle block" :style="{ color: stage.completed ? '#22c55e' : '#38bdf8', fontSize: '35px' }"></i>
            <div>
              <p class="stage_title">{{ stage.title }}</p>
              <p class="stage_description">{{ stage.description }}</p>
            </div>
          </div>
        </AccordionHeader>
        <AccordionContent>
          <Timeline :value="stage.lessons">
            <template #marker="slotProps">
              <span
                  class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10"
                  :style="{ backgroundColor: slotProps.item.color, border: '2px solid white' }">
                <i :class="slotProps.item.icon" class="text-white"></i>
              </span>
            </template>
            <template #content="slotProps">
              <p class="lesson-title">{{ slotProps.item.title }}</p>
            </template>
          </Timeline>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<style scoped lang="scss">
.stage {
  border-radius: 10px;
  border: 1px solid oklch(92.9% 0.013 255.508);
  overflow: hidden;
  margin-bottom: 16px;

  p {
    margin: 0;
  }

  .stage-content {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .stage_title {
    font-size: 12px;
    color: oklch(55.4% 0.046 257.417);
  }

  .stage_description {
    font-size: 14px;
    color: oklch(44.6% 0.043 257.281);
  }
}

::v-deep(.p-timeline-event-opposite) {
  display: none !important;
}
</style>