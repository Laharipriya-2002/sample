// App3.jsx
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles for the editor
import './app3.css';  // custom styles for the editor (if needed)

const App3 = () => {
  const [editorContent, setEditorContent] = useState('');

  // Handle editor change
  const handleChange = (value) => {
    setEditorContent(value);
  };

  return (
    <div className="editor-container">
      <h2>Rich Text Editor</h2>
      <ReactQuill
        value={editorContent}
        onChange={handleChange}
        theme="snow"
        modules={{
          toolbar: [
            [{ 'header': '1'}, { 'header': '2'}, { 'font': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            [{ 'align': [] }],
            ['link', 'image']
          ],
        }}
      />
      <div className="editor-output">
        <h3>Editor Output:</h3>
        <div>{editorContent}</div>
      </div>
    </div>
  );
};

export default App3;