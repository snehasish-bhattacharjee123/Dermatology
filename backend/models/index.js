/**
 * Models Index
 * Central export for all Mongoose models
 */

const Service = require('./Service');
const Booking = require('./Booking');
const Patient = require('./Patient');
const Concern = require('./Concern');
const Location = require('./Location');
const Staff = require('./Staff');
const Contact = require('./Contact');

module.exports = {
    Service,
    Booking,
    Patient,
    Concern,
    Location,
    Staff,
    Contact,
};
