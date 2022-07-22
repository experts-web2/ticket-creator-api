const catchAsync = require("../../utils/catchAsync");
const AppError = require('../../utils/AppError');
const ticketModel = require('../../models/ticket');
const { ERRORS, STATUS_CODE, SUCCESS_MSG, STATUS, ROLES, TYPES } = require('../../constants/index');

exports.addTicket = catchAsync(async (req, res, next) => {
    if (!req.body ||
        !req.body.created_by ||
        !req.body.client) {
        return next(
            new AppError('Invalid Request Data', STATUS_CODE.BAD_REQUEST)
        );
    }
    else {
        var ticket = new ticketModel(req.body);
        ticket.save().then((ticketResult) => {
            res.status(STATUS_CODE.CREATED).json({
                status: STATUS.SUCCESS,
                message: SUCCESS_MSG.SUCCESS_MESSAGES.CREATED,
                result: ticketResult,
            });
        });
    }
});