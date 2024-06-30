import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { css } from "@emotion/css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Editor = () => {
  const [editorState, setEditorState] = useState("");

  const handleEditorChange = (value: string) => {
    setEditorState(value);
  };

  return (
    <div className={editorContainer}>
      <ReactQuill
        value={editorState}
        onChange={handleEditorChange}
        className={editor}
        modules={modules}
        formats={formats}
        theme="snow"
      />
    </div>
  );
};

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
];

const editorContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const editor = css`
  width: 100%;
  .ql-editor {
    min-height: 400px;
  }
`;

export default Editor;
