import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  //   const [comment, setComment] = useState({name: '', commentText: ''}) this is used for single comment
  const [commentsList, setCommentsList] = useState([])

  const onChangeName = event => setName(event.target.value)
  const onChangeCommentText = event => setCommentText(event.target.value)
  const onAddComment = event => {
    event.preventDefault()
    setCommentText({name, commentText})
    const newComment = {
      id: uuidv4,
      name,
      commentText,
    }
    setName('')
    setCommentText('')
    setCommentsList(prevCommentsList => [...prevCommentsList, newComment])
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeCommentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      {/* <CommentItem commentDetails={comment} /> this is used for single comment */}
      <CommentsList>
        {commentsList.map(eachComment => (
          <CommentItem commentDetails={eachComment} key={eachComment.id} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
