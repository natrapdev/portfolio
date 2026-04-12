let sidebarToggle = true;

const sidebar = document.getElementById('navSidebar');
const sidebarButton = document.getElementById('sidebarBtn');

function toggleSidebar() {
  sidebarToggle = !sidebarToggle;

  if (sidebarToggle) {
    setSidebarTransform("250px");
  } else {
    setSidebarTransform(0);
  }
}

function setSidebarTransform(transform) {
  sidebarButton.style.left = transform;
  sidebar.style.width = transform;
  document.getElementById("main").style.marginLeft = transform;
}