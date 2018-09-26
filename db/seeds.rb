user1 = User.create(name: "Donald Trump", email: "dtrump@gmail.com", password: "password", password_confirmation: "password", location: "Newburgh")
user2 = User.create(name: "Barack Obama", email: "bobama@gmail.com", password: "password", password_confirmation: "password", location: "Beacon")

user1.posts.create(title: "There is a new cafe in Newburgh", content: "There is this awesome cafe in Newburgh called Two Alices. Their coffee is to die for.")
user1.posts.create(title: "Hiking in Beacon", content: "Good news everyone! The parking lot for the mt beacon trail has been newly renovated, complete with new port-a-poties... Yay!")
user2.posts.create(title: "Name of that taco place?", content: "Does anyone know the name of the taco place that is being built by the newburgh waterfront? next to the pizza shop.")
user2.posts.create(title: "Traffic on I-84", content: "Just a heads up everyone. Construction starting on both ways of I-84 just west of the Beacon bridge, by exit 10. Traffic sucks!")

user1.comments.create(content: "It's called Hudson Taco.", post_id: 3)
user1.comments.create(content: "Those lane switches are crazy!!! almost crashed.", post_id: 4)
user2.comments.create(content: "I love their coffee too. Try Cafe Macchiato", post_id: 1)
user2.comments.create(content: "thank goodness. I'm about to pee myself.", post_id: 2)