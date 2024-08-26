<script lang="ts">
  import { onMount } from 'svelte';
  import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';
  // Define the type for tasks
  type Task = { id: number; text: string; isCompleted: boolean };

  // State variables
  let tasks: Task[] = [];
  let newTask: string = '';
  let error: string | null = null;
  const MAX_TASK_LENGTH = 100; // Set the max character length for tasks

  // Fetch tasks from the backend
  const fetchTasks = async () => {
    try {
      const response = await fetch('http://toycube.com.au/api/tasks');
      if (!response.ok) throw new Error('Failed to fetch tasks');
      tasks = await response.json();
    } catch (err) {
      showAlert(err.message);
    }
  };

  // Add a new task
  const addTask = async () => {
    if (newTask.trim() === '') {
      showAlert('Task cannot be empty.');
      return;
    }
    if (newTask.length > MAX_TASK_LENGTH) {
      showAlert(
        `Task exceeds maximum length of ${MAX_TASK_LENGTH} characters.`
      );
      return;
    }
    try {
      const response = await fetch('http://toycube.com.au/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newTask }),
      });
      if (!response.ok) throw new Error('Failed to add task');
      const task = await response.json();
      tasks = [...tasks, task];
      newTask = '';
    } catch (err) {
      showAlert(err.message);
    }
  };

  // Update an existing task
  const updateTask = async (id: number, text: string, isCompleted: boolean) => {
    try {
      const response = await fetch(`http://toycube.com.au/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, isCompleted }),
      });
      if (!response.ok) throw new Error('Failed to update task');
      tasks = tasks.map((task) =>
        task.id === id ? { ...task, text, isCompleted } : task
      );
    } catch (err) {
      showAlert(err.message);
    }
  };

  // Delete a task
  const deleteTask = async (id: number) => {
    try {
      const response = await fetch(`http://toycube.com.au/api/tasks/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete task');
      tasks = tasks.filter((task) => task.id !== id);
    } catch (err) {
      showAlert(err.message);
    }
  };

  // Show an alert message
  const showAlert = (message: string) => {
    error = message;
    setTimeout(() => {
      error = null;
    }, 5000); // Clear error message after 5 seconds
  };

  // Fetch tasks on component mount
  onMount(fetchTasks);
</script>

<div class="flex items-center mb-4">
  <input
    type="text"
    bind:value={newTask}
    placeholder="New task"
    class="flex-grow p-2 border rounded mr-2"
  />
  <button
    on:click={addTask}
    class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
  >
    <Fa icon={faPlus} />
  </button>
</div>

{#if error}
  <div class="text-red-500 bg-red-100 border border-red-400 p-2 rounded mb-4">
    {error}
  </div>
{/if}

<ol class="list-decimal pl-6">
  {#each tasks as task, index}
    <li>
      <input
        type="checkbox"
        checked={task.isCompleted}
        on:change={() => updateTask(task.id, task.text, !task.isCompleted)}
        class="mr-3 w-6 h-6"
      />
      <input
        type="text"
        bind:value={task.text}
        on:change={(e) => updateTask(task.id, e.target.value, task.isCompleted)}
        class="flex-grow p-2 border rounded mr-3 w-96 shadow"
      />
      <button
        on:click={() => deleteTask(task.id)}
        class="bg-red-500 text-white p-2 rounded hover:bg-red-600"
      >
        <Fa icon={faTrash} />
      </button>
    </li>
  {/each}
</ol>
