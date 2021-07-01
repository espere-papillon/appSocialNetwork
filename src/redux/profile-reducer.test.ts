import {addPost, deletePost, profileReducer} from "./profile-reducer";

const state = {
    posts: [
        {id: "1", title: "Hello", likesCount: 5},
        {id: "2", title: "How are u?", likesCount: 6},
        {id: "3", title: "Fine", likesCount: 4},
        {id: "4", title: "Thank u", likesCount: 10}
    ],
    profileUser: null,
    status: "hi",
}

it('length of posts should be incremented', () => {
    const action = addPost("it-kamasutra.com")


    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(5)
});

it('message of new post should be correct', () => {
    const action = addPost("it-kamasutra.com")


    const newState = profileReducer(state, action)

    expect(newState.posts[4].title).toBe("it-kamasutra.com")
});

it('after deleting length of message should be decrement', () => {
    const action = deletePost("1")


    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
});

it(`after deleting length of message shouldn't be decrement if ID is incorrect`, () => {
    const action = deletePost("1000")


    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
});