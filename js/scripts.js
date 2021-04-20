function newItem(){
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("Please write something!");
  }else{
    $('#list').append(li);
  }
  }
}
