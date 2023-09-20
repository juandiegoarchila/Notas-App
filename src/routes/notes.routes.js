const { Router } = require("express");
const router = Router();

const {
  renderNoteform,
  createNewnote,
  renderNotes,
  renderEditForm,
  updateNote,
  deletenote,
} = require("../controllers/note.controller");

// New note
router.get("/notes/add", renderNoteform);

router.post("/notes/new-note", createNewnote);

//get all note
router.get("/notes", renderNotes);

//Edit Notes
router.get("/notes/edit/:id", renderEditForm);

router.put("/notes/edit/:id", updateNote);

//DElate Notes

router.delete("/notes/delete/:id", deletenote);

module.exports = router;
