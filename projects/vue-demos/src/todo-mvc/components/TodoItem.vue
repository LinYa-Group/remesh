<script setup lang="ts">
import { defineProps, PropType, ref, watch, nextTick } from 'vue'
import { useRemeshDomain, useRemeshSend } from 'remesh-vue'
import { Todo, TodoDomain } from 'remesh-domains-for-demos/src/todo-mvc'

const props = defineProps({
  todo: {
    type: Object as PropType<Todo>,
    required: true,
  },
})

const send = useRemeshSend()
const todoListDomain = useRemeshDomain(TodoDomain())

const editing = ref(false)
const editTodoName = ref(props.todo.name)
const editInputRef = ref()

function handleDeleteTodo() {
  send(todoListDomain.command.RemoveTodoCommand(props.todo.id))
}

function handleToggleTodo() {
  send(todoListDomain.command.ToggleTodoCompletedCommand(props.todo.id))
}

function handleSaveTodo() {
  if (editTodoName.value.length < 1) {
    return
  }
  send(
    todoListDomain.command.UpdateTodoCommand({
      ...props.todo,
      name: editTodoName.value,
    }),
  )
  editing.value = false
}

watch(
  () => editing.value,
  (val) => {
    if (val) {
      editTodoName.value = props.todo.name
      nextTick().then(() => {
        editInputRef.value.focus()
      })
    }
  },
)
</script>

<template>
  <li @dblclick="editing = true" :class="{
    editing,
    completed: todo.completed,
  }">
    <div class="view">
      <input :checked="todo.completed" type="checkbox" class="toggle" @change="handleToggleTodo" />
      <label>{{ todo.name }}</label>
      <button @click="handleDeleteTodo" class="destroy"></button>
    </div>
    <input v-if="editing" v-model="editTodoName" ref="editInputRef" class="edit" type="text" @blur="editing = false"
      @keyup.enter="handleSaveTodo" />
  </li>
</template>
