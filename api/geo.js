export default function handler(req, res) {
  const country =
    req.headers['x-vercel-ip-country'] ||
    req.headers['cf-ipcountry'] ||
    'BR';

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({ country });
}
