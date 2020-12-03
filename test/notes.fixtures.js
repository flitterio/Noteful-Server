function makeNotesArray() {
    return [
    {
        "id": 1,
        "note_name": "Gouda",
        "content": "Gouda is a cheese",
        "date_updated": "2020-11-25T01:45:09.919Z",
        "folder_id": 7
    },
    {
        "id": 2,
        "note_name": "Cheddar",
        "content": "Cheddar is also a cheese",
        "date_updated": "2020-11-25T01:47:15.125Z",
        "folder_id": 7
    },
    {
        "id": 3,
        "note_name": "Natalie Don't",
        "content": "Song by Raye",
        "date_updated": "2020-11-25T01:50:39.364Z",
        "folder_id": 8
    },
    {
        "id": 4,
        "note_name": "Obvious",
        "content": "Song by Ariana Grande from her album Positions",
        "date_updated": "2020-11-25T01:51:03.070Z",
        "folder_id": 8
    },
    {
        "id": 5,
        "note_name": "Chocolate Cake",
        "content": "Box chocolate cake with jar chocolate frosting is the BEST",
        "date_updated": "2020-11-25T01:54:46.103Z",
        "folder_id": 5
    },
    {
        "id": 6,
        "note_name": "Well Aren't YOU smart?",
        "content": "you think you're funny?",
        "date_updated": "2020-11-25T01:55:32.467Z",
        "folder_id": 6
    },
    ];
}

function makeMaliciousNote() {
    const maliciousNote = {
    id: 911,
    date_updated: new Date().toISOString(),
    folder_id: 5,
    note_name: 'Naughty naughty very naughty <script>alert("xss");</script>',
    content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`
    }

    const expectedNote = {
        ...maliciousNote,
        note_name: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
        content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
    }
    return {
        maliciousNote,
        expectedNote,
    }
}

module.exports = {
    makeNotesArray,
    makeMaliciousNote,
}