<<<<<<< HEAD
import { gql } from "@apollo/client";
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
addUser(username:$username, email:$email, password:$password)
{
token
user{
_id
username}
}
}
`;
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email:$email, password:$password)
    {
    token
    user{
    _id
    username}
    }
    }
`;
export const SAVE_BOOK = gql`
mutation saveBook($newBook: BookInput){
saveBook(newBook:$newBook)
{
_id
username
savedBooks{
title
authors
image}}}`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!)
{
removeBook(bookId:$bookId)
{
_id
username
email}}`;

=======
import { gql } from "@apollo/client";
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
addUser(username:$username, email:$email, password:$password)
{
token
user{
_id
username}
}
}
`;
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email:$email, password:$password)
    {
    token
    user{
    _id
    username}
    }
    }
`;
export const SAVE_BOOK = gql`
mutation saveBook($newBook: BookInput){
saveBook(newBook:$newBook)
{
_id
username
savedBooks{
title
authors
image}}}`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!)
{
removeBook(bookId:$bookId)
{
_id
username
email}}`;

>>>>>>> 0edf45538fda9f4e2a2bebf66a4bcd49e9f272d0
