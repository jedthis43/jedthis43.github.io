var config = {
    apiKey: "AIzaSyCTQJ-UoSK0EioDG5m5GtHJ39Eqi8hK3FE",
    authDomain: "jed-sboostrap.firebaseapp.com",
    databaseURL: "https://jed-sboostrap.firebaseio.com",
    projectId: "jed-sboostrap",
    storageBucket: "jed-sboostrap.appspot.com",
    messagingSenderId: "452956817702"
};

// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to the comment's object in your Firebase database
var comments = firebase.database().ref("comments");


// Save a new comment to the database, using the input in the form
var submitComment = function () {

  var title = $("#yourName").val();
  var remark = $("#yourComment").val();
  var link = $("#yourLink").val();

  comments.push({
    "title": title,
    "remark": remark,
    "link": link
  });
};


comments.limitToLast(10).on('child_added', function(childSnapshot) {

  comment = childSnapshot.val();

  $("#title").prepend(comment.title + '<br> <br>')
  $("#remark").prepend(comment.remark + '<br> <br>')
  $("#link").prepend('<img id="image">' + '<br> <br>')

  
  var altWords = 'No \n Image'  
  // Make the link actually work and direct to the URL provided
  $("#image").attr("src", comment.link)
  $("#image").attr("alt", altWords) 
});


// When the window is fully loaded, call this function.
$(window).load(function () {
  $("#commentForm").submit(submitComment);
});
