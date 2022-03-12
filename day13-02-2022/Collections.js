// creating zenClass Data base

use zenClass

//  creating Student collection and inserting documents in it

db.students.insertMany([
    {
        "_id": "0",
        "name": "Lakshmi Vara Prasad Kuna",
        "Location": "Andhra Pradesh"
    },
    {
        "_id": "1",
        "name": "Usha Rani",
        "Location": "Rayalaseema"
    },
    {
        "_id": "2",
        "name": "Savithri",
        "Location": "Karnataka"
    },
    {
        "_id": "3",
        "name": "Manohar",
        "Location": "Karnataka"
    },
    {
        "_id": "4",
        "name": "Shiva",
        "Location": "Murudeshwar"
    }
])

//  creating Batch collection and inserting documents in it

db.batch.insertMany([
    {
        "_id": "0",
        "batchName": "B27WE"
    },
    {
        "_id": "1",
        "batchName": "B26WD"
    },
    {
        "_id": "2",
        "batchName": "B28WE"
    },
    {
        "_id": "3",
        "batchName": "B27WD"
    },
    {
        "_id": "4",
        "batchName": "B28WD"
    }
])

//  creating Task collection and inserting documents in it

db.task.insertMany([
    {
        "_id": "0",
        "Task": "JavaScript"
    },
    {
        "_id": "1",
        "Task": "ReactJS"
    },
    {
        "_id": "2",
        "Task": "MongoDB"
    },
    {
        "_id": "3",
        "Task": "NodeJS"
    },
    {
        "_id": "4",
        "Task": "ExpressJS"
    }
])


//  creating Mentor collection and inserting documents in it

db.mentors.insertMany([
    {
        "_id": "0",
        "MentorName": "Ragav Kumar V"
    },
    {
        "_id": "1",
        "MentorName": "Prakash"
    },
    {
        "_id": "2",
        "MentorName": "Lavish Jain"
    },
    {
        "_id": "3",
        "MentorName": "Lakshman"
    },
    {
        "_id": "4",
        "MentorName": "piyush"
    }
])
