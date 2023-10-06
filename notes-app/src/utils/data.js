const getNotesData = () => {
  return [
    {
      id: +new Date(),
      title: "Ini Judul Catatan",
      body: "Ini merupakan tempat isi catatan",
      createdAt: new Date().toDateString(),
      archived: false,
    },
  ];
};

export { getNotesData };
