# apollo-server
Apollo-Server is Repository is for GraphQL Training.


# What is GraphQL?

-> The graphQL is a type System which describe a schema for our data.
-> This is Powerful Query Language.
-> Allow for a more flexible and Effecient Approch.
-> It is mostly useful where the data get more complex because sometimes it is not possible to  fetch data with a single request.

Ex:- the query language are:

{
   students {
      id
      firstName
   }
}

This will Return:-

{
   "data": {
      "students": [
         {
            "id": "S1001",
            "firstName": "Mohtashim"
         },
         {
            "id": "S1002",
            "firstName": "Kannan"
         }
      ]
   }
}


# Difference between GraphQL and Rest


GRAPHQL
----------------------------------

-> A query language offering efficiency and flexibility for solving common problems when integrating APIs	

-> Deployed over HTTP using a single endpoint that provides the full capabilities of the exposed service	

-> Uses a client-driven architecture	

-> Lacks automatic caching mechanism	

-> No API versioning	

-> JSON representation only	

-> Only a single tool is used predominantly for documentation: GraphiQL	

-> Complicates handling of HTTP status codes to identify errors	


REST
-------------------------

-> An architectural style largely viewed as a conventional standard for designing APIs

-> Deployed over a set of URLs where each of them exposes a single resource

-> Uses a server-driven architecture

-> Uses caching automatically

-> Supports multiple API versions

-> Wide range of options for automated documentation, such as OpenAPI and API Blueprint

-> Uses HTTP status codes to identify errors easily




# Write down about Schema and Resolvers?

Schema
----------------------

-> A GraphQL schema is a description of data clients can request from a GraphQL API.
-> It also defines the queries and mutation functions that the client can use to read and write data from the GraphQL server.


Resolver
------------------------

-> A resolver is a function that resolves a value for a type or field in a schema.
-> Resolvers can return objects or scalars like Strings, Numbers, Booleans, etc
-> If an Object is returned, execution continues to the next child field.
-> If a scalar is returned (typically at a leaf node), execution completes.






