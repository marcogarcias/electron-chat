const contacts = [
  {
    name: "Contact 1",
    image: "https://via.placeholder.com/50",
    last_chat: {
      message: "Lorem ipsum dolor sit amet.",
      date: "12:00"
    }
  },
  {
    name: "Contact 2",
    image: "https://via.placeholder.com/50",
    last_chat: {
      message: "Lorem ipsum dolor sit.",
      date: "15:00"
    }
  },
  {
    name: "Contact 3",
    image: "https://via.placeholder.com/50",
    last_chat: {
      message: "Lorem ipsum dolor sit amet",
      date: "18:00"
    }
  },
  {
    name: "Contact 4",
    image: "https://via.placeholder.com/50",
    last_chat: {
      message: "Lorem ipsum dolor sit.",
      date: "20:00"
    }
  }
];

const chats = [
  [
    {
      user: {
        name: "Contact 1",
        image: "https://via.placeholder.com/50",
      },
      chat: {
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        date: "12:00"
      }
    },
    {
      user: {
        name: "Contact 1",
        image: "https://via.placeholder.com/50",
      },
      chat: {
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        date: "15:00"
      }
    },
  ],
  [

  ],
  [
    {
      user: {
        name: "Contact 3",
        image: "https://via.placeholder.com/50",
      },
      chat: {
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        date: "18:00"
      }
    },
  ]
];

module.exports.contacts = contacts;
module.exports.chats = chats;
