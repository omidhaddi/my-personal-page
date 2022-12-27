// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from '../../database'


export default async function handler(req, res) {

  const { name, email, title, message } = req.body

  const newMessage = await db.Message.create({ name, email, title, message })

  // return JSON.parse(JSON.stringify(route))
  console.log(newMessage);
  res.status(200).redirect(302, '/greeting');
}
