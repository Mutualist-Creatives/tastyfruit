"use client";

import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";

interface TipTapEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
  className?: string;
  editable?: boolean;
}

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="border-b border-gray-200 p-2 flex flex-wrap gap-2">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("bold")
            ? "bg-blue-500 text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("italic")
            ? "bg-blue-500 text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("underline")
            ? "bg-blue-500 text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        underline
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`px-2 py-1 rounded ${
          editor.isActive({ textAlign: "left" })
            ? "bg-blue-500 text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        left
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`px-2 py-1 rounded ${
          editor.isActive({ textAlign: "center" })
            ? "bg-blue-500 text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        center
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`px-2 py-1 rounded ${
          editor.isActive({ textAlign: "right" })
            ? "bg-blue-500 text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        right
      </button>
    </div>
  );
};

export default function TipTapEditor({
  content,
  onChange,
  placeholder = "Start writing...",
  className = "",
  editable = true,
}: TipTapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Color,
      Highlight,
    ],
    content,
    editable,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className={`border border-gray-300 rounded-lg ${className}`}>
      {editable && <MenuBar editor={editor} />}
      <EditorContent
        editor={editor}
        className={`p-4 min-h-[100px] ${editable ? "focus:outline-none" : ""}`}
        placeholder={placeholder}
      />
    </div>
  );
}
