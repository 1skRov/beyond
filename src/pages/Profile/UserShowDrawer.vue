<template>
  <Drawer :visible="visible" @update:visible="$emit('update:visible', $event)" position="right" :modal="true"
    :dismissableMask="true" :header="header" :style="{ width: '600px' }">
    <div class="p-4 space-y-4">

      <!-- Личные данные -->
      <div class="field" v-for="(label, key) in personalFields" :key="key">
        <label :for="key">{{ label }}</label>
        <InputText v-model="form[key]" :id="key" class="w-full" />
      </div>

      <!-- Дата рождения -->
      <div class="field">
        <label>Дата рождения</label>
        <DatePicker v-model="form.birth_date" fluid iconDisplay="input" dateFormat="yy-mm-dd" class="w-full" />
      </div>

      <!-- Профильные предметы -->
      <div class="field">
        <label>Профильный предмет 1</label>
        <AutoComplete v-model="form.profile_subjects[0]" :suggestions="filteredSubjects1"
          @complete="e => searchSubject(e, 0)" class="w-full" />
      </div>
      <div class="field">
        <label>Профильный предмет 2</label>
        <AutoComplete v-model="form.profile_subjects[1]" :suggestions="filteredSubjects2"
          @complete="e => searchSubject(e, 1)" class="w-full" />
      </div>

      <!-- Результаты ЕНТ -->
      <div class="field">
        <label>Результаты ЕНТ</label>
        <div v-if="form.ent_scores.length === 0" class="text-sm italic text-gray-500 mb-2">
          Пока нет добавленных результатов. Нажмите "Добавить результат".
        </div>
        <div v-for="(score, index) in form.ent_scores" :key="index" class="mb-3 p-2 border rounded-md bg-gray-50">
          <div class="mb-1">
            <label>Дата отправки</label>
            <DatePicker v-model="score.submitted_at" fluid iconDisplay="input" dateFormat="yy-mm-dd" class="w-full" />
          </div>

          <div class="mb-1" v-for="(label, key) in score.scores" :key="key">
            <label>{{ key }}</label>
            <InputText v-model.number="score.scores[key]" type="number" class="w-full" />
          </div>
        </div>
        <Button label="Добавить результат" icon="pi pi-plus" class="mt-2" @click="addENTScore" />
      </div>
    </div>

    <template #footer>
      <div class="flex justify-end gap-2 p-4">
        <Button label="Сохранить" icon="pi pi-check" @click="onSave" />
        <Button label="Отмена" icon="pi pi-times" severity="danger" @click="$emit('update:visible', false)" />
        <Button label="Удалить профиль" icon="pi pi-times" severity="danger" @click="onDelete" />
      </div>
    </template>
  </Drawer>
</template>


<script setup>
import { ref, reactive, watch, onMounted } from 'vue';
import { getprof, updateUser, deleteUser } from '@/services/userService';
import { getUserIdFromToken } from '@/utils/jwt';
import { DatePicker } from 'primevue';

const props = defineProps({ visible: Boolean, userData: Object });
const emit = defineEmits(['update:visible', 'updated']);

const subjectOptions = ref([]);
const form = reactive({
  id: '',
  name: '',
  surname: '',
  username: '',
  email: '',
  birth_date: '',
  city: '',
  class_level: 0,
  school: '',
  photo_url: '', // оставлено для API, но не редактируется
  profile_subjects: ['', ''],
  ent_scores: []
});

const personalFields = {
  name: 'Имя',
  surname: 'Фамилия',
  username: 'Логин',
  email: 'Email',
  city: 'Город',
  school: 'Школа',
  class_level: 'Класс'
};

watch(() => props.userData, (val) => {
  if (val) {
    const copy = JSON.parse(JSON.stringify(val));
    Object.assign(form, copy);
    form.birth_date = new Date(copy.birth_date);
    if (!Array.isArray(form.ent_scores)) {
      form.ent_scores = [];
    }
  }
}, { immediate: true });

onMounted(async () => {
  const res = await getprof();
  subjectOptions.value = res?.subjects || [];
});

function addENTScore() {
  const profile1 = form.profile_subjects[0] || 'Профильный предмет 1';
  const profile2 = form.profile_subjects[1] || 'Профильный предмет 2';

  form.ent_scores.push({
    submitted_at: new Date(),
    scores: {
      'История Казахстана': 0,
      'Грамотность чтения': 0,
      'Математическая грамотность': 0,
      [profile1]: 0,
      [profile2]: 0
    }
  });
}

function formatDate(date) {
  const d = new Date(date);
  const pad = (n) => n.toString().padStart(2, '0');
  const yyyy = d.getFullYear();
  const MM = pad(d.getMonth() + 1);
  const dd = pad(d.getDate());

  return `${yyyy}-${MM}-${dd}`;
}


async function onSave() {
  const id = form.id || getUserIdFromToken();
  const payload = {
    ...form,
    birth_date: formatDate(form.birth_date),
    ent_scores: form.ent_scores.map(score => ({
      submitted_at: formatDate(score.submitted_at),
      scores: { ...score.scores }
    }))
  };
  await updateUser(id, payload);
  emit('updated');
  emit('update:visible', false);
}

async function onDelete() {
  const id = getUserIdFromToken();
  try {
    await deleteUser(id);
    localStorage.removeItem("jwt");
    window.location.href = "/login";
  } catch (err) {
    console.error("Ошибка удаления пользователя:", err);
    alert("Не удалось удалить профиль");
  }
}

const filteredSubjects1 = ref([]);
const filteredSubjects2 = ref([]);

function searchSubject(event, index) {
  const query = event.query.toLowerCase();
  const filtered = subjectOptions.value.filter(subject =>
    subject.toLowerCase().includes(query)
  );
  if (index === 0) {
    filteredSubjects1.value = filtered;
  } else {
    filteredSubjects2.value = filtered;
  }
}
</script>


<style scoped>
.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
  margin-bottom: 0.25rem;
  font-weight: 500;
}
</style>
