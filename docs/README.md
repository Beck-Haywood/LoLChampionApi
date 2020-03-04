# Introduction

A League of Legends champion stat API

# Authentication
 

Guests can use GET all champion and GET by ID.

Before posting putting or deleting you must be signed up.

## SignUp

Post request to:

> https://lolchampionapi.herokuapp.com/signup

Example input:

<pre>
Key:        Value: 
username    myusername 
password    mypassword 
</pre>

Example output:

```
{
    "status": 200,
    "message": "Success: Signed up",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTVkYmRlZDUyNzg5ZjAwMDQyYTc3NTQiLCJpYXQiOjE1ODMyMDE3NzMsImV4cCI6MTU4ODM4NTc3M30.WtEyyUP6pBBH7mdoFnod9W-H7GSGd-D-CTjbaMxYK6k"
}
```

## Login 

Post request to:

> https://lolchampionapi.herokuapp.com/login

Example input:
<pre>
Key:        Value: 
username    myusername 
password    mypassword 
</pre>
Example output:

```
{
    "status": 200,
    "message": "Success: Logged in",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTVkYmRlZDUyNzg5ZjAwMDQyYTc3NTQiLCJ1c2VybmFtZSI6Im15dXNlcm5hbWUiLCJpYXQiOjE1ODMyMDE4NTAsImV4cCI6MTU4ODM4NTg1MH0.AktSltDafSmDC6RuHXeC4jTUBmWjaQn0Yu32NT5rNB0"
}
```

## Logout

Get request to:

> https://lolchampionapi.herokuapp.com/logout

Example output:

```
{
    "status": 200,
    "message": "Success: Logged out"
}
```

# How to make requests

## Get all champions

> https://lolchampionapi.herokuapp.com/api/champ

Example output:

```
{
    "champs": [
        {
            "_id": "5e4dd579787a613581957ff4",
            "addedby": "testuser1",
            "name": "Tryndamere",
            "title": "The Barbarian King",
            "health": "625.64 – 2291.64",
            "__v": 0
        },
        {
            "_id": "5e5db83052789f00042a7753",
            "addedby": "testuser2",
            "name": "Trundle",
            "title": "The Troll King",
            "health": "422.64 – 2291.64",
            "__v": 0
        }
    ]
}
```

## Get champion by ID

> https://lolchampionapi.herokuapp.com/api/champ/id:

Example output:
> https://lolchampionapi.herokuapp.com/api/champ/5e4dd579787a613581957ff4
```
{
    "champ": {
        "_id": "5e4dd579787a613581957ff4",
        "addedby": "testuser1",
        "name": "Tryndamere",
        "title": "The Barbarian King",
        "health": "625.64 – 2291.64",
        "__v": 0
    }
}
```
## Post a Champion

Post request to:

> https://lolchampionapi.herokuapp.com/api/champ/new

Example input:
<pre>
Key:        Value: 
name        Tryndamere 
title       The Barbarian King
health:     625.64 – 2291.64
token:      asd38a7sd68aASDdasdas7987a8sADEsd6a8s   
</pre>
Remember token is <strong>REQUIRED</strong> to prove your authentication

Example output:

```
{
    "champ": {
        "_id": "5e4dd579787a613581957ff4",
        "addedby": "myusername",
        "name": "Tryndamere",
        "title": "The Barbarian King",
        "health": "625.64 – 2291.64",
        "__v": 0
    }
}
```
## Put by ID (Update)

Put request to:

> https://lolchampionapi.herokuapp.com/api/champ/id:

Example input:
<pre>
Change one to all of the keys!

Key:        Value: 
health:     625.64 – 1000000.64
token:      asd38a7sd68aASDdasdas7987a8sADEsd6a8s   
</pre>
Remember token is <strong>REQUIRED</strong> to prove your authentication

Example output:
> https://lolchampionapi.herokuapp.com/api/champ/5e4dd579787a613581957ff4
```
{
    "champ": {
        "_id": "5e4dd579787a613581957ff4",
        "addedby": "testuser1",
        "name": "Tryndamere",
        "title": "The Barbarian King",
        "health": "625.64 – 1000000.64",
        "__v": 0
    }
}
```

## Delete by ID

Delete request to:

> https://lolchampionapi.herokuapp.com/api/champ/id:

Example input:

<pre>
Key:        Value: 
token:      asd38a7sd68aASDdasdas7987a8sADEsd6a8s   
</pre>

Remember token is <strong>REQUIRED</strong> to prove your authentication

Example output:

> https://lolchampionapi.herokuapp.com/api/champ/5e4dd579787a613581957ff4
```
{
    "champ": {
        "_id": "5e4dd579787a613581957ff4",
        "addedby": "testuser1",
        "name": "Tryndamere",
        "title": "The Barbarian King",
        "health": "625.64 – 2291.64",
        "__v": 0
    }
}
```
