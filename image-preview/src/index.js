
const file = document.getElementById('inImg');
const img = document.getElementById('image');

file.addEventListener('change', function () {
  const reader = new FileReader();
  reader.onload = function () {
    img.src = reader.result;
  };
  reader.readAsDataURL(file.files[0]);
});
