<script>
import { getQuestion, getProgram } from "@/services/recServices.js";
import { getUserIdFromToken } from "@/utils/jwt";
export default {
    name: "CourseItem",
    data() {
        return {
            rec: null,
            q: [],
            p: [],

        }
    },
    async mounted() {
        const id = getUserIdFromToken();
        this.q = await getQuestion(id);
        this.p = await getProgram(id);

    },
    methods: {
        async getP() {
            const id = getUserIdFromToken();
            this.p = await getProgram(id);
            console.log(p);

        }
    }
}</script>
<template>
    <pre>{{ q }}</pre>
    <pre>{{ p }}--</pre>
    <button @click="getP">test</button>
</template>