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

  // Fetch tasks from the backend
  const fetchTasks = async () => {
    try {
      const response = await fetch('http://toycube.com.au/api/tasks');
      if (!response.ok) throw new Error('Failed to fetch tasks');
      tasks = await response.json();
    } catch (err) {
      error = err.message;
    }
  };

  // Add a new task
  const addTask = async () => {
    if (newTask.trim() === '') return;
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
      error = err.message;
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
      error = err.message;
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
      error = err.message;
    }
  };

  // Fetch tasks on component mount
  onMount(fetchTasks);
</script>

<div class="task-input">
  <input
    type="text"
    bind:value={newTask}
    placeholder="New task"
    class="task-textbox"
  />
  <button on:click={addTask} class="task-button">
    <Fa
      icon={faPlus}
      primaryColor="red"
      secondaryColor="#000000"
      primaryOpacity={0.8}
      secondaryOpacity={0.6}
      swapOpacity
    />
  </button>
  {#if error}
    <p class="error">{error}</p>
  {/if}
</div>

<ol>
  {#each tasks as task, index}
    <li>
      <input
        type="checkbox"
        checked={task.isCompleted}
        on:change={() => updateTask(task.id, task.text, !task.isCompleted)}
      />
      <input
        type="text"
        bind:value={task.text}
        class="task-textbox"
        on:change={(e) => updateTask(task.id, e.target.value, task.isCompleted)}
      />
      <button on:click={() => deleteTask(task.id)} class="task-button">
        <Fa
          icon={faTrash}
          primaryColor="red"
          secondaryColor="#000000"
          primaryOpacity={0.8}
          secondaryOpacity={0.6}
          swapOpacity
        />
      </button>
    </li>
  {/each}
</ol>

<style>
  /* Darker text color */
  body {
    color: #333;
  }

  .task-input {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .task-textbox {
    font-size: 1rem;
    padding: 0.5rem;
    margin-right: 0.5rem;
    flex-grow: 1;
    /* Adjust width based on content */
    width: fit-content;
  }

  .task-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
  }

  ol {
    list-style-type: decimal; /* Numbered list */
    padding-left: 1.5rem;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .error {
    color: red;
  }
</style>
