{
  session: {
    username: "kevinghst",

    errors: []
  }


  profile: {
    1: {
      id: 1,
      username: "kevinghst",
      gender: "Male",
      Birthday: "06-29-1991",
      Occupation: "Sith Lord",
      Hometown: "DeathStar"
    }
  }


  postSlice: {
    posts: [
      1: {
        authorId: 1,
        authorusername: "pinkman"
        body: "can't go back no no",
        comments: {
          id: 5,
          authorId: 2
          authorusername: "winnieThePooh"
          body: "that's a lie",
          postId: 1,
          updated_at: "09:04:13, 12/12/2011"
        }
      }

    ]

  }


  friends: {
    1: {
      username: "pinkman",
    }
    2: {
      username: "winnieThePooh"
    }
  }

};
