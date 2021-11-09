import React, { useState } from "react";
import { CKEditor } from "ckeditor4-react";
import prisma from "../../lib/prisma";

export default function Blog() {
  const [data, setData] = useState<any>({ title: "", body: "" });

  async function onClick() {
    return await fetch(`http://localhost:3000/api/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  function onChange(event: any) {
    setData({ ...data, body: event.editor.getData() });
  }

  return (
    <div>
      <CKEditor onChange={onChange} />
      <button onClick={onClick}>Create post</button>
    </div>
  );
}
