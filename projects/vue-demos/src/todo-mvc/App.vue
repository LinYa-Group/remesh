<script setup lang="ts">
import TodoItem from './components/TodoItem.vue'
import { ref } from 'vue'

import { useRemeshDomain, useRemeshQuery, useRemeshSend } from 'remesh-vue'

import { TodoDomain } from 'remesh-domains-for-demos/src/todo-mvc'

type Filter = 'all' | 'active' | 'completed'

const filterList: Filter[] = ['all', 'active', 'completed']

const domain = useRemeshDomain(TodoDomain())
const todoList = useRemeshQuery(domain.query.TodoListQuery())
const send = useRemeshSend()
const activeTodoCount = useRemeshQuery(domain.query.ActiveTodoCountQuery())
const hasCompleted = useRemeshQuery(domain.query.HasCompletedQuery())
const allCompleted = useRemeshQuery(domain.query.AllCompletedQuery())

const newTodo = ref('')

function updateFilter(value: Filter) {
  send(domain.command.SetTodoListFilterCommand(value))
}

function handleToggleAll() {
  send(domain.command.ToggleAllTodoCompletedCommand(!allCompleted.value))
}

function handleClearCompleted() {
  send(domain.command.ClearCompletedCommand())
}

function handleAddTodo() {
  if (newTodo.value.length < 1) {
    return
  }
  send(domain.command.AddTodoCommand(newTodo.value))
  newTodo.value = ''
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<template>
  <div class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input v-model="newTodo" class="new-todo" type="text" @keyup.enter="handleAddTodo" />
    </header>
    <section class="main">
      <input :checked="allCompleted" id="toggle-all" class="toggle-all" type="checkbox" @change="handleToggleAll" />
      <label htmlFor="toggle-all" />
      <ul class="todo-list">
        <TodoItem v-for="todo in todoList" :key="todo.id" :todo="todo" />
      </ul>
    </section>
    <footer class="footer">
      <span class="todo-count">
        <strong>{{ activeTodoCount }}</strong> items left
      </span>
      <ul class="filters">
        <li v-for="(item, index) in filterList" :key="index">
          <a @click="updateFilter(item)" :href="`#/${item}`">{{ capitalizeFirstLetter(item) }}</a>
        </li>
      </ul>
      <button v-if="hasCompleted" class="clear-completed" @click="handleClearCompleted">Clear completed</button>
    </footer>
  </div>
</template>
