<template>
    <div class="status-bar" v-if="isAuthenticated">
        <p>Todo Done</p>      
        <li v-for="todo in doneTodos" :key="todo.id">
            {{todo.title}}
        </li>      
    </div>
</template>
<script>
import { mapGetters} from 'vuex';

export default {
    name:'StatusBar',
    computed: {...mapGetters(['doneTodos','isAuthenticated'])}
}
</script>
<style>
.status-bar {
    padding: 5px;
    text-align: center;
    background: rgb(240,240,240);
    color: black;
}
</style>