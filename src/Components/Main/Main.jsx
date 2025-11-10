import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Letters from "../Notes/Notes";

export default function Main({ notes, setNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingNote, setEditingNote] = useState(null); // حالت ویرایش

  // افزودن یادداشت جدید
  function addNote() {
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    // هیچ‌کدوم پر نیست
    if (!trimmedTitle && !trimmedContent) return;

    // فقط محتوا پره ولی عنوان خالیه
    if (!trimmedTitle && trimmedContent) {
      alert("عنوان یادداشت باید وارد شود 📝");
      return;
    }
    const newNote = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleDateString("fa-IR"),
    };

    setNotes([...notes, newNote]);
    setTitle("");
    setContent("");
  }

  // حذف یادداشت
  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // آماده‌سازی ویرایش
  const handleEditNote = (note) => {
    setEditingNote(note);
    setTitle(note.title);
    setContent(note.content);
  };

  // ذخیره ویرایش
  const handleSaveEdit = () => {
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    // هیچ‌کدام پر نیست
    if (!trimmedTitle && !trimmedContent) return;

    // فقط محتوا پره ولی عنوان خالیه
    if (!trimmedTitle && trimmedContent) {
      alert("عنوان یادداشت باید وارد شود 📝");
      return;
    }

    const updatedNotes = notes.map((note) =>
      note.id === editingNote.id ? { ...note, title, content } : note
    );

    setNotes(updatedNotes);
    cancelEdit();
  };

  // لغو ویرایش
  const cancelEdit = () => {
    setEditingNote(null);
    setTitle("");
    setContent("");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-xl bg-white mt-10 rounded-2xl">
        <div className="flex items-center justify-center p-3">
          <input
            type="text"
            className="min-w-11/12 bg-blue-600 text-white p-2.5 text-right font-serif rounded-2xl mt-3"
            placeholder="...عنوان یادداشت"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (editingNote) {
                  handleSaveEdit();
                } else {
                  addNote();
                }
              }
            }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-center p-3">
          <textarea
            className="min-w-11/12 bg-blue-600 text-white p-2.5 text-right font-serif rounded-2xl resize-none h-[90px]"
            placeholder="...متن یادداشت"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <div className="flex items-center justify-center p-3 space-x-3">
          {editingNote ? (
            <>
              <button
                className="flex items-center bg-blue-600 p-4 rounded-2xl cursor-pointer mb-3
                  transform transition-transform duration-400 hover:scale-105 will-change-transform"
                onClick={handleSaveEdit}
              >
                <span className="text-white font-serif">ذخیره تغییرات</span>
              </button>

              <button
                className="flex items-center bg-red-600 p-4 rounded-2xl cursor-pointer mb-3
                  transform transition-transform duration-400 hover:scale-105 will-change-transform"
                onClick={cancelEdit}
              >
                <span className="text-white font-serif">لغو ویرایش</span>
              </button>
            </>
          ) : (
            <button
              className="flex items-center bg-blue-600 p-4 rounded-2xl cursor-pointer mb-3
                transform transition-transform duration-400 hover:scale-105 will-change-transform"
              onClick={addNote}
            >
              <span className="text-white mr-2">
                <FaPlus />
              </span>
              <span className="font-serif text-white">افزودن یادداشت</span>
            </button>
          )}
        </div>
      </div>
      <div className="w-full max-w-4xl mt-8">
        <Letters
          notes={notes}
          onDelete={handleDeleteNote}
          onEdit={handleEditNote}
        />
      </div>
    </div>
  );
}
