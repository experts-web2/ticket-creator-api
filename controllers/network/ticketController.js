const connection = require("./connection/connection");
const { STATUS_CODE, SUCCESS_MSG, STATUS } = require("../../constants/index");

const catchAsync = require("../../utils/catchAsync");

exports.addTicket = catchAsync(async (req, res, next) => {
  var created_by = req.body.created_by;
  var client = req.body.client_id;
  var project = req.body.project;
  var task = req.body.task;
  var status = req.body.status;
  var assignee = req.body.assignee_id;
  var task_type = req.body.task_type;
  var priority = req.body.priority;
  var notes = req.body.notes;
  var email_notes = req.body.email_notes;
  var due_date = req.body.due_date;

  var sql = `INSERT INTO ticket (created_by, client_id, project, task, status,assignee_id,task_type,priority,notes,email_notes,due_date,created_at) VALUES ("${created_by}", "${client}", "${project}", "${task}", "${status}","${assignee}","${task_type}","${priority}","${notes}","${email_notes}","${due_date}", NOW())`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.status(STATUS_CODE.CREATED).json({
      status: STATUS.SUCCESS,
      message: SUCCESS_MSG.SUCCESS_MESSAGES.CREATED,
      result: result,
    });
  });
});



exports.getTicketList = catchAsync(async (req, res, next) => {
  var sql = `select * from ticket`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.status(STATUS_CODE.OK).json({
      status: STATUS.SUCCESS,
      message: SUCCESS_MSG.SUCCESS_MESSAGES.RETRIEVED,
      tickets: result,
    });
  });
});
