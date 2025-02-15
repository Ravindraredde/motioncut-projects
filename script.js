document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("addButton");
  const itemInput = document.getElementById("itemInput");
  const bucketList = document.getElementById("bucketList");

  // Function to create a new bucket list item
  function addItem() {
    const itemText = itemInput.value.trim();

    if (itemText !== "") {
      const listItem = document.createElement("li");
      listItem.innerHTML = `${itemText} <button class="delete-btn">Delete</button>`;
      
      // Smooth fade-out when deleting item
      const deleteButton = listItem.querySelector(".delete-btn");
      deleteButton.addEventListener("click", () => {
        listItem.style.transition = "opacity 0.5s";
        listItem.style.opacity = "0";
        setTimeout(() => {
          listItem.remove();
        }, 500);
      });

      bucketList.appendChild(listItem);
      itemInput.value = "";  // Clear the input field

      // Show an alert message when a new item is added
      alert(`New goal added: ${itemText}`);
    }
  }

  // Add item when button is clicked
  addButton.addEventListener("click", addItem);

  // Allow "Enter" key to add an item
  itemInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  });
});
