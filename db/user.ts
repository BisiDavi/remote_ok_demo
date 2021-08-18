import {Db} from 'mongodb'
import {nanoid} from 'nanoid'

export const getAUser = async (db: Db, email:string) => {
   const getEmail = await db.collection("user").findOne({ email });
  return getEmail;
};

export const registerUser = async (
  db: Db,
  user: {
    username: string;
    email: string;
    password: string;
  }
) => {
  return db
    .collection("user")
    .insertOne({
      _id: nanoid(12),
      ...user,
      createdAt: new Date().toISOString()
    })
    .then(({ ops }) => ops[0]);
};

export const loginUser = async (db, email: string, password: string) => {
  const getEmail = await db.collection("user").findOne({email });
  if(!getEmail)throw new Error(`${email}, doesn't exist, please register!`);

  
};
