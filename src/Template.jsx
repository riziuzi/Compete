import React from 'react'
import { useCurrentEditor } from '@tiptap/react'

export default function Template() {
    const { editor } = useCurrentEditor()

    return (
      <pre>
        {JSON.stringify(editor.getJSON(), null, 2)}
      </pre>
    )
}
