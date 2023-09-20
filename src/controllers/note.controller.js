const notesCtrl = {};

const Note = require('../models/Note')

notesCtrl.renderNoteform = (req, res) => {
  res.render('notes/new-note');
};

notesCtrl.createNewnote = async (req, res) => {
  const {title, description} = req.body;
  const newNote = new Note({title , description})
  await newNote.save();
  res.send("new note");
};

notesCtrl.renderNotes = (req, res) => {
  res.send("render notes");
};

notesCtrl.renderEditForm = (req, res) => {
  res.send("render Edit Form");
};

notesCtrl.updateNote = (req, res) => {
  res.send("update from");
};

notesCtrl.deletenote = (req, res) => {
  res.send("deleting note");
};

module.exports = notesCtrl;
