const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const submitJob = require("./submitJob");
const claimJob = require("./claimJob");
const returnJob = require("./returnJob");

exports.submitJob = functions.https.onCall(submitJob);
exports.claimJob = functions.https.onCall(claimJob);
exports.returnJob = functions.https.onCall(returnJob);
