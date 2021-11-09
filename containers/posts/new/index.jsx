import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import UploadAdapter from "../../../utils/upload-adapter";
// import prisma from "../../../lib/prisma";

export default function Blog() {
  const [data, setData] = useState({ title: "", body: "" });

  async function onClick() {
    // const post = await prisma.post.create(data);
    console.log(data);
    return {};
  }

  function onReady(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = function (
      loader
    ) {
      return new UploadAdapter(loader);
    };
  }

  function onChange(event, editor) {
    const body = editor.getData();
    setData({ ...data, body });
  }

  return (
    <div>
      <CKEditor editor={ClassicEditor} onReady={onReady} onChange={onChange} />
      <button onClick={onClick}>Create post</button>
    </div>
  );
}
