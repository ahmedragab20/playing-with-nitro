import { getRequestPath } from 'h3';

export default defineEventHandler((event) => {
  const q = getRequestPath(event);

  console.log(`We got fired!!`, q || 'no query');
});
