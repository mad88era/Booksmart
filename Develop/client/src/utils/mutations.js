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
export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
    addUser(email:$email, password:$password)
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
mutation removeBook($bookID: ID!)
{
removeBook(bookID:$bookID)
{
_id
username
email}}`;

