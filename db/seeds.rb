user1 = User.create(name: "Donald Trump", email: "dtrump@gmail.com", password: "password", password_confirmation: "password", location: "Newburgh")
user2 = User.create(name: "Barack Obama", email: "bobama@gmail.com", password: "password", password_confirmation: "password", location: "Beacon")

user1.posts.create(title: "Post Number 1", content: "This is post number 1 which belongs to user number1")
user1.posts.create(title: "Post Number 2", content: "This is post number 2 which belongs to user number1")
user2.posts.create(title: "Post Number 3", content: "This is post number 3 which belongs to user number2")
user2.posts.create(title: "Post Number 4", content: "This is post number 4 which belongs to user number2")

user1.comments.create(content: "user 1 comment content", post_id: 3)
user1.comments.create(content: "user 1 comment content", post_id: 4)
user2.comments.create(content: "user 2 comment content", post_id: 1)
user2.comments.create(content: "user 2 comment content", post_id: 2)