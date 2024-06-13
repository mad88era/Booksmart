<<<<<<< HEAD
import{gql} from "@apollo/client";
export const QUERY_ME= gql`
{
    me{
    _id 
    username
    email
    password
    savedBooks{
    _id 
    authors 
    description
    bookId
    image
    Link
    title
    }
    }
=======
import{gql} from "@apollo/client";
export const QUERY_ME= gql`
{
    me{
    _id 
    username
    email
    password
    savedBooks{
    _id 
    authors 
    description
    bookId
    image
    Link
    title
    }
    }
>>>>>>> 0edf45538fda9f4e2a2bebf66a4bcd49e9f272d0
}` 