export type DialogItemType = {
  id: string
  name: string
}

export type MessageType = {
  id?: string
  message: string
}

export type PostType = {
  id?: string
  title: string
  likesCount: number
}

type ProfilePageType = {
  posts: Array<PostType>
}

type DialogsPageType = {
  dialogs: Array<DialogItemType>
  messages: Array<MessageType>
}

export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}


let state: StateType = {
  profilePage: {
    posts: [
      {id: "1", title: "Hello", likesCount: 5},
      {id: "2", title: "How are u?", likesCount: 6},
      {id: "3", title: "Fine", likesCount: 4},
      {id: "4", title: "Thank u", likesCount: 10}
    ]
  },
  dialogsPage: {
    dialogs: [
      {id: "1", name: "Marina"},
      {id: "2", name: "Karina"},
      {id: "3", name: "Stas"}
    ],
    messages: [
      {id: "1", message: "Hi"},
      {id: "2", message: "How are u?"},
      {id: "3", message: "Yoo"}
    ]
  }
}

export default state