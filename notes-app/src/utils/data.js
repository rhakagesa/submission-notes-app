const getNotesData = () => {
  return [
    {
      id: +new Date(),
      title: "Tes Judul",
      body: "Tes Body",
      createdAt: +new Date(),
      archived: false,
    },
  ];
};

export { getNotesData };
