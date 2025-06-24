const backendUrl = "http://localhost:5000";
const token = localStorage.getItem("token");
const username = localStorage.getItem("username");

// Redirect to login if no token
if (!token) {
  window.location.href = "auth.html";
}

// Display username
document.getElementById("userDisplay").textContent = username;

// Logout button
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "auth.html";
});

const listsContainer = document.getElementById("listsContainer");
const addListForm = document.getElementById("addListForm");
const addListNameInput = document.getElementById("listName");

let currentItemsListId = null; // To track which list’s items are displayed
const itemsContainer = document.getElementById("itemsContainer");
const addItemForm = document.getElementById("addItemForm");
const addItemContentInput = document.getElementById("itemContent");

// Fetch and display all lists
async function fetchLists() {
  try {
    const res = await fetch(`${backendUrl}/api/lists`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to fetch lists");
    const lists = await res.json();
    displayLists(lists);
  } catch (err) {
    alert("Error loading lists. Please login again.");
    localStorage.clear();
    window.location.href = "auth.html";
  }
}

// Display lists with Edit, Delete, and View Items buttons
function displayLists(lists) {
  listsContainer.innerHTML = "";
  itemsContainer.innerHTML = ""; // clear items when lists reload
  currentItemsListId = null;

  lists.forEach((list) => {
    const div = document.createElement("div");
    div.className = "list-item";

    // List name text
    const nameSpan = document.createElement("span");
    nameSpan.textContent = list.name;
    nameSpan.style.fontWeight = "bold";

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editListPrompt(list);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteList(list._id);

    // View items button
    const viewItemsBtn = document.createElement("button");
    viewItemsBtn.textContent = "View Items";
    viewItemsBtn.onclick = () => fetchItems(list._id);

    div.appendChild(nameSpan);
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
    div.appendChild(viewItemsBtn);

    listsContainer.appendChild(div);
  });
}

// Prompt user to edit list name
function editListPrompt(list) {
  const newName = prompt("Enter new list name:", list.name);
  if (newName && newName.trim() !== "" && newName !== list.name) {
    updateList(list._id, { name: newName.trim() });
  }
}

// Update list API call
async function updateList(listId, updatedData) {
  try {
    const res = await fetch(`${backendUrl}/api/lists/${listId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    });
    if (!res.ok) throw new Error("Failed to update list");
    await fetchLists();
  } catch (err) {
    alert(err.message);
  }
}

// Delete list API call
async function deleteList(listId) {
  if (!confirm("Are you sure you want to delete this list and all its items?")) return;
  try {
    const res = await fetch(`${backendUrl}/api/lists/${listId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to delete list");
    await fetchLists();
  } catch (err) {
    alert(err.message);
  }
}

// Add new list form submit handler
addListForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const listName = addListNameInput.value.trim();
  if (!listName) return alert("List name cannot be empty");
  try {
    const res = await fetch(`${backendUrl}/api/lists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: listName }),
    });
    if (!res.ok) throw new Error("Failed to add list");
    addListNameInput.value = "";
    await fetchLists();
  } catch (err) {
    alert(err.message);
  }
});

// Fetch items in a list
async function fetchItems(listId) {
  try {
    const res = await fetch(`${backendUrl}/api/items/list/${listId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to fetch items");
    const items = await res.json();
    currentItemsListId = listId;
    displayItems(items);
  } catch (err) {
    alert(err.message);
  }
}

// Display items with Edit and Delete buttons
function displayItems(items) {
  itemsContainer.innerHTML = "";

  if (items.length === 0) {
    itemsContainer.textContent = "No items in this list.";
    return;
  }

  items.forEach((item) => {
    const div = document.createElement("div");
    div.className = "item";

    const contentSpan = document.createElement("span");
    contentSpan.textContent = item.content + (item.status ? ` [${item.status}]` : "");

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editItemPrompt(item);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteItem(item._id);

    div.appendChild(contentSpan);
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);

    itemsContainer.appendChild(div);
  });
}

// Prompt to edit item content and status
function editItemPrompt(item) {
  const newContent = prompt("Edit item content:", item.content);
  if (!newContent || newContent.trim() === "") return;

  const newStatus = prompt("Edit status (e.g., pending, done):", item.status || "pending");

  updateItem(item._id, { content: newContent.trim(), status: newStatus.trim() });
}

// Update item API call
async function updateItem(itemId, updatedData) {
  try {
    const res = await fetch(`${backendUrl}/api/items/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    });
    if (!res.ok) throw new Error("Failed to update item");
    if (currentItemsListId) fetchItems(currentItemsListId);
  } catch (err) {
    alert(err.message);
  }
}

// Delete item API call
async function deleteItem(itemId) {
  if (!confirm("Are you sure you want to delete this item?")) return;
  try {
    const res = await fetch(`${backendUrl}/api/items/${itemId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to delete item");
    if (currentItemsListId) fetchItems(currentItemsListId);
  } catch (err) {
    alert(err.message);
  }
}

// Add new item form submit handler
addItemForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!currentItemsListId) return alert("Select a list first by clicking 'View Items'.");

  const content = addItemContentInput.value.trim();
  if (!content) return alert("Item content cannot be empty");

  try {
    const res = await fetch(`${backendUrl}/api/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content, listId: currentItemsListId }),
    });
    if (!res.ok) throw new Error("Failed to add item");
    addItemContentInput.value = "";
    fetchItems(currentItemsListId);
  } catch (err) {
    alert(err.message);
  }
});

// Initial load
fetchLists();
