$.getJSON('https://fathomless-gorge-57039.herokuapp.com/api/all')
.then(function(objects){
  // $('.chirps').append('<tr><th></th><th>User</th><th>Chirp</th><th>Chirped at</th></tr>')
  objects.posts.forEach(function(c){
    if (c.user.file == null) {
      c.user.file = "https://robohash.org/" + c.user.id + "?size=50x50"
    } else {
        c.user.file = "https://fathomless-gorge-57039.herokuapp.com" + c.user.file
      }
      console.log(c)
    $('.chirps').append('<tr class="table table-striped"><td><img src='+c.user.file+ '><h5>'+ c.user.name+'</h5></td><td><span class="col-md-12"><h4>'+c.chirp+ '</h4></span><span class= col-md-3>' + c.created_at +'</span></td></tr>')
  })
})
