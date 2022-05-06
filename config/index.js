const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://testgnj.vercel.app/'

export const server1 = dev ? 'http://localhost:3000' : 'https://meta-data-mnr.vercel.app/api?url='
