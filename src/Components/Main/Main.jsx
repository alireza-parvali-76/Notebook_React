import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Notes from "../Notes/Notes";

export default function Main({ notes, setNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingNote, setEditingNote] = useState(null);

  // افزودن یادداشت جدید
  function addNote() {
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (!trimmedTitle && !trimmedContent) return;
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

    // 👇 اسکرول نرم به پایین بعد از افزودن یادداشت
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  }

  // حذف یادداشت
  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // 👇 شروع ویرایش (اسکرول نرم به بالا)
  const handleEditNote = (note) => {
    setEditingNote(note);
    setTitle(note.title);
    setContent(note.content);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 👇 ذخیره ویرایش (اسکرول نرم به پایین)
  const handleSaveEdit = () => {
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (!trimmedTitle && !trimmedContent) return;
    if (!trimmedTitle && trimmedContent) {
      alert("عنوان یادداشت باید وارد شود 📝");
      return;
    }

    const updatedNotes = notes.map((note) =>
      note.id === editingNote.id ? { ...note, title, content } : note
    );

    setNotes(updatedNotes);
    cancelEdit();

    // 👇 بعد از ذخیره، اسکرول نرم تا پایین لیست یادداشت‌ها
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
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
        {/* فیلد عنوان */}
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

        {/* فیلد متن */}
        <div className="flex items-center justify-center p-3">
          <textarea
            className="min-w-11/12 bg-blue-600 text-white p-2.5 text-right font-serif rounded-2xl resize-none h-[90px]"
            placeholder="...متن یادداشت"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* دکمه‌ها */}
        <div className="flex items-center justify-center p-3 space-x-3">
          {editingNote ? (
            <>
              <button
                className="flex items-center bg-blue-600 p-4 rounded-2xl cursor-pointer mb-3 
                           transform transition-transform duration-400 hover:scale-105"
                onClick={handleSaveEdit}
              >
                <span className="text-white font-serif">ذخیره تغییرات</span>
              </button>
              <button
                className="flex items-center bg-red-600 p-4 rounded-2xl cursor-pointer mb-3 
                           transform transition-transform duration-400 hover:scale-105"
                onClick={cancelEdit}
              >
                <span className="text-white font-serif">لغو ویرایش</span>
              </button>
            </>
          ) : (
            <button
              className="flex items-center bg-blue-600 p-4 rounded-2xl cursor-pointer mb-3 
                         transform transition-transform duration-400 hover:scale-105"
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

      {/* نمایش لیست یادداشت‌ها */}
      <div className="w-full max-w-6xl mt-8">
        <Notes notes={notes} onDelete={handleDeleteNote} onEdit={handleEditNote} />
      </div>
    </div>
  );
}
