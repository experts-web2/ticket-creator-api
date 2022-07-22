const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const ticketSchema = new mongoose.Schema({
    created_by: {
        type: String,
        required: 'User id required',
    },
    client: {
        type: String,
        required: 'Client id required',
    },
    project: {
        type: String,
        required: 'Project required',
    },
    task: {
        type: String,
        required: 'Task required',
    },
    status: {
        type: String,
        required: 'Status required',
    },
    assignee: {
        type: String,
        required: 'User id required',
    },
    task_type: {
        type: String,
        required: 'Task type required',
    },
    priority: {
        type: String,
        required: 'Priority required',
    },
    notes: {
        type: String,
        required: 'Notes required',
    },
    email_notes: {
        type: String,
        required: 'Email notes required',
    },
    due_date: {
        type: Date,
        required: 'Due date required',
    },
    created_at: { 
        type: Date, default: Date.now 
    },
})

module.exports = mongoose.model("tickets", ticketSchema)