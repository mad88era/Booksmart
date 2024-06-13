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
}` 