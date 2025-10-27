import fs from 'fs';
import chalk from 'chalk';

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    return JSON.parse(dataBuffer.toString());
  } catch (e) {
    return [];
  }
};

const savedNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes, null, 2));
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicate = notes.find((note) => note.title === title);

  if (!duplicate) {
    notes.push({ title, body });
    savedNotes(notes);
    console.log(chalk.green.inverse("New note added"));
  } else {
    console.log(chalk.red.inverse("Note title already taken!"));
  }
};

const removenote = (title) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => note.title !== title);

  if (notes.length > updatedNotes.length) {
    savedNotes(updatedNotes);
    console.log(chalk.green.inverse("Note removed "));
  } else {
    console.log(chalk.red.inverse("No note found !"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue.inverse("Your Notes"));
  notes.forEach((note, index) => {
    console.log(`${index + 1}. ${note.title}`);
  });
};

const readnote = (title) => {
  const notes = loadNotes();
  const note = notes.find((n) => n.title === title);
  if (note) {
    console.log(chalk.cyan.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

export { addNotes, removenote, listNotes, readnote };
