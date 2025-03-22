import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import './style.scss'
import App from './App.vue'
import '@flaticon/flaticon-uicons/css/all/all.css';
import { createPinia } from 'pinia';
import router from '@/routes.js'
import 'primeicons/primeicons.css'

import SelectButton from 'primevue/selectbutton';
import Select from 'primevue/select';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Tag from 'primevue/tag';
import Paginator from 'primevue/paginator';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Panel from 'primevue/panel';
import RadioButton from 'primevue/radiobutton';
import Checkbox from 'primevue/checkbox';
import Chart from 'primevue/chart';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import ConfirmDialog from 'primevue/confirmdialog';


const app = createApp(App);
const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        }
    }
});
app.use(createPinia());
app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
        options: {
            prefix: 'p',
            darkModeSelector: false,
            cssLayer: false
        }
    }
});
app.component('Button', Button);
app.component('InputText', InputText);
app.component('SelectButton', SelectButton);
app.component('Select', Select);
app.component('IconField', IconField);
app.component('InputIcon', InputIcon);
app.component('Toolbar', Toolbar);
app.component('FloatLabel', FloatLabel);
app.component('Tag', Tag);
app.component('Tabs', Tabs);
app.component('TabList', TabList);
app.component('Tab', Tab);
app.component('TabPanels', TabPanels);
app.component('TabPanel', TabPanel);
app.component('Paginator', Paginator);
app.component('RadioButton', RadioButton);
app.component('Panel', Panel);
app.component('Checkbox', Checkbox);
app.component('Chart', Chart);
app.component('ConfirmDialog', ConfirmDialog);
app.component('Avatar', Avatar);
app.component('AvatarGroup', AvatarGroup);

app.use(router);
app.mount('#app');
