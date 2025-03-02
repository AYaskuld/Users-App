import './style.css'
import { setupApiClient } from './apiClient.js'
import { setupUserInterface } from './userInterface.js'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>User Management App</h1>

    <div class="card">
      <h2>Create User</h2>
      <div class="input-group">
        <label for="createName">Username:</label>
        <input type="text" id="createName" placeholder="Enter username" />
      </div>
      <button id="createUser" class="primary-button">Create User</button>
      <div id="createResult" class="result"></div>
    </div>

    <div class="card">
      <h2>Get User</h2>
      <div class="input-group">
        <label for="getName">Username:</label>
        <input type="text" id="getName" placeholder="Enter username" />
      </div>
      <button id="getUser" class="primary-button">Get User</button>
      <div id="getResult" class="result"></div>
    </div>

    <div class="card">
      <h2>Delete User</h2>
      <div class="input-group">
        <label for="deleteName">Username:</label>
        <input type="text" id="deleteName" placeholder="Enter username" />
      </div>
      <button id="deleteUser" class="primary-button">Delete User</button>
      <div id="deleteResult" class="result"></div>
    </div>

    <div class="card">
      <h2>API Health</h2>
      <button id="checkHealth" class="primary-button">Check Health</button>
      <div id="healthResult" class="result"></div>
    </div>
  </div>
`

// Initialize the API client with the base URL from environment variables
const apiClient = setupApiClient(import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api');

// Setup the user interface with the API client
setupUserInterface(apiClient);
