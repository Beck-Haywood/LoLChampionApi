# Introduction

> An awesome project.

# Installation


# How to make requests

## Get all champions

> http://localhost:4040/api/champ

Example output:

```
{
    "champs": [
        {
            "_id": "5e4dd579787a613581957ff4",
            "name": "Tryndamere",
            "title": "The Barbarian King",
            "__v": 0
        },
        {
            "_id": "5e4dda139e066b397cdba87f",
            "name": "Trundle",
            "title": "The Troll King",
            "__v": 0
        }
    ]
}
```

## Get champion by ID

> http://localhost:4040/api/champ/id:

Example output:
> http://localhost:4040/api/champ/5e4dd579787a613581957ff4
```
{
    "champ": {
        "_id": "5e4dd579787a613581957ff4",
        "name": "Tryndamere",
        "title": "The Barbarian King",
        "__v": 0
    }
}
```


