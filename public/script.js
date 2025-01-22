function updateAvatar(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('user-avatar').src = e.target.result;
        document.getElementById('avatar-upload').style.display = 'none';
        document.getElementById('edit-avatar').style.display = 'inline-block';
      };
      reader.readAsDataURL(file);
    }
  }
  
  function editAvatar() {
    document.getElementById('avatar-upload').style.display = 'inline-block';
    document.getElementById('edit-avatar').style.display = 'none';
  }
  
  function addAnnotation() {
    const annotationInput = document.getElementById('annotation-input').value;
    const annotationList = document.getElementById('annotation-list');
    if (annotationInput.trim() !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = annotationInput;
      annotationList.appendChild(listItem);
      document.getElementById('annotation-input').value = '';
    }
  }
  
  function searchAnnotations() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const annotations = document.querySelectorAll('#annotation-list li');
    annotations.forEach(annotation => {
      if (annotation.textContent.toLowerCase().includes(searchTerm)) {
        annotation.style.display = 'block';
      } else {
        annotation.style.display = 'none';
      }
    });
  }
  
