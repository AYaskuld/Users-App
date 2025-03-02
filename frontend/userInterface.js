export function setupUserInterface(apiClient) {
  // Create User
  document.getElementById('createUser').addEventListener('click', async () => {
    const name = document.getElementById('createName').value.trim();
    if (!name) {
      showResult('createResult', 'Please enter a username', 'error');
      return;
    }

    showResult('createResult', 'Creating user...', 'info');
    const result = await apiClient.createUser(name);
    
    if (result.success) {
      showResult('createResult', `User created successfully: ${formatUserData(result.data)}`, 'success');
    } else {
      showResult('createResult', `Error: ${result.error}`, 'error');
    }
  });

  // Get User
  document.getElementById('getUser').addEventListener('click', async () => {
    const name = document.getElementById('getName').value.trim();
    if (!name) {
      showResult('getResult', 'Please enter a username', 'error');
      return;
    }

    showResult('getResult', 'Fetching user...', 'info');
    const result = await apiClient.getUser(name);
    
    if (result.success) {
      showResult('getResult', `User found: ${formatUserData(result.data)}`, 'success');
    } else {
      showResult('getResult', `Error: ${result.error}`, 'error');
    }
  });

  // Delete User
  document.getElementById('deleteUser').addEventListener('click', async () => {
    const name = document.getElementById('deleteName').value.trim();
    if (!name) {
      showResult('deleteResult', 'Please enter a username', 'error');
      return;
    }

    showResult('deleteResult', 'Deleting user...', 'info');
    const result = await apiClient.deleteUser(name);
    
    if (result.success) {
      showResult('deleteResult', `User deleted successfully: ${formatUserData(result.data)}`, 'success');
    } else {
      showResult('deleteResult', `Error: ${result.error}`, 'error');
    }
  });

  // Check Health
  document.getElementById('checkHealth').addEventListener('click', async () => {
    showResult('healthResult', 'Checking API health...', 'info');
    const result = await apiClient.checkHealth();
    
    if (result.success) {
      showResult('healthResult', 'API is healthy! Status: ' + result.data.status, 'success');
    } else {
      showResult('healthResult', `API is unhealthy: ${result.error}`, 'error');
    }
  });

  // Set up health check interval (every 30 seconds)
  setInterval(async () => {
    const healthResult = await apiClient.checkHealth();
    const statusIndicator = document.createElement('div');
    statusIndicator.className = `status-indicator ${healthResult.success ? 'healthy' : 'unhealthy'}`;
    
    // Replace old indicator if exists
    const oldIndicator = document.querySelector('.status-indicator');
    if (oldIndicator) {
      oldIndicator.remove();
    }
    
    document.querySelector('.container').appendChild(statusIndicator);
  }, 30000);

  // Helper functions
  function formatUserData(user) {
    return `
      <div class="user-data">
        <div><strong>ID:</strong> ${user.id}</div>
        <div><strong>Name:</strong> ${user.name}</div>
        <div><strong>Created:</strong> ${new Date(user.created_at).toLocaleString()}</div>
        <div><strong>Deleted:</strong> ${user.deleted_at ? new Date(user.deleted_at).toLocaleString() : 'N/A'}</div>
      </div>
    `;
  }

  function showResult(elementId, message, type = 'info') {
    const element = document.getElementById(elementId);
    element.innerHTML = message;
    element.className = `result ${type}`;
  }

  function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
      
      setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
      }, 3000);
    }, 10);
  }
}