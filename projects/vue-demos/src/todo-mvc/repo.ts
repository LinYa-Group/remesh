import type { Todo } from 'remesh-domains-for-demos/dist/todo-mvc'
import { TodoRepoExtern } from 'remesh-domains-for-demos/dist/todo-mvc/todo-repo'
import { reactive } from 'vue'

let list: Todo[] = []

async function getTotoList() {
  const res = localStorage.getItem('todo-mvc-data')
  try {
    if (res) {
      list = JSON.parse(res)
    }
  } catch (e) {
    console.error(e)
    list = []
    localStorage.setItem('todo-mvc-data', JSON.stringify(list))
  }
}

function saveTotoList() {
  localStorage.setItem('todo-mvc-data', JSON.stringify(list))
}

export const TodoRepoExternImpl = TodoRepoExtern.impl({
  async getTodoList() {
    await getTotoList()
    return list
  },
  addTodo: function (todo: Todo): void {
    list.push(todo)
    saveTotoList()
  },
  removeTodoByIds: function (ids: Todo['id'][]): void {
    list = list.filter((item) => !ids.includes(item.id))
    saveTotoList()
  },
  updateTodo: function (updateTodo: Todo): void {
    list = list.map((item) => (item.id === updateTodo.id ? updateTodo : item))
    saveTotoList()
  },
  toggleCompletedByIds: function (ids: Todo['id'][], completed: boolean): void {
    list = list.map((item) => (ids.includes(item.id) ? { ...item, completed } : item))
    saveTotoList()
  },
})
