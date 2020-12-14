import {Db} from 'mongodb'
import {nanoid} from 'nanoid'

export const getOnePostedJob = async (db: Db, id:string) => {
  return db.collection("company").findOne({ _id: id });
};

export const addJob = async (
  db: Db,
  job: {
    company: string;
    company_logo?: string;
    description: string;
    location: string;
    position: string;
    tags: string[];
    url: string;
  }
) => {
  return db
    .collection("company")
    .insertOne({
      _id: nanoid(12),
      ...job,
      createdAt: new Date().toISOString()
    })
    .then(({ ops }) => ops[0]);
};

export const updateJob = async (db, id: string, updates: any) => {
  const updateOperation = await db.collection("company").updateOne(
    {
      _id: id
    },
    { $set: updates }
  );

  if (!updateOperation.result.ok) {
    throw new Error("could not update company profile");
  }
  const updated = await db.collection("company").findOne({ _id: id });
  return updated;
};
