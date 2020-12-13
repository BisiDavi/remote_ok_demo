export const getCompanyProfileById = async (db, id) => {
  return db.collection("company").findOne({ _id: id });
};
